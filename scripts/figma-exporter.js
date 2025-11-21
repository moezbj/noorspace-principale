#!/usr/bin/env node
/**
 * Figma exporter script (sanitized filenames)
 *
 * Usage:
 *   export FIGMA_TOKEN="YOUR_FIGMA_PAT"
 *   node scripts/figma-exporter.js --fileKey=xjOBBjTMllXQfESxjAJnXh --formats=svg,png
 *
 * This version sanitizes node names AND ids so generated filenames are safe on Windows/macOS/Linux.
 */

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const argv = process.argv.slice(2);
  const out = {};
  argv.forEach(arg => {
    if (arg.startsWith('--')) {
      const [k, v] = arg.slice(2).split('=');
      out[k] = v === undefined ? true : v;
    }
  });
  return out;
}

const argv = parseArgs();
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'figd_1d7zQJNAAlFyxg8q21CCTrLWbDy7c_ejNUTa-LIc';
const FILE_KEY = argv.fileKey || argv.file || '';
const FORMATS = (argv.formats || 'svg').split(',').map(f => f.trim().toLowerCase());

if (!FIGMA_TOKEN) {
  console.error('ERROR: set FIGMA_TOKEN environment variable with your Figma personal access token.');
  process.exit(1);
}
if (!FILE_KEY) {
  console.error('ERROR: provide --fileKey=<figma_file_key>');
  process.exit(1);
}

const OUTPUT_DIR = path.resolve(process.cwd(), 'src', 'assets');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'X-Figma-Token': FIGMA_TOKEN } });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`HTTP ${res.status}: ${txt}`);
  }
  return res.json();
}

function walk(node, cb) {
  cb(node);
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(child => walk(child, cb));
  }
}

function sanitizeName(name, maxLen = 80) {
  if (!name) return 'node';
  // replace whitespace with dash, then remove disallowed chars, then collapse repeated dashes
  let s = String(name).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-._]/g, '-');
  s = s.replace(/-+/g, '-').replace(/(^-|-$)/g, '');
  if (s.length > maxLen) s = s.slice(0, maxLen);
  return s.toLowerCase();
}

function sanitizeId(id) {
  if (!id) return 'id';
  // replace any non alnum, dot, underscore, or dash with a dash
  return String(id).replace(/[^a-zA-Z0-9-._]/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '');
}

(async function main() {
  try {
    console.log('Fetching Figma file metadata...');
    const fileUrl = `https://api.figma.com/v1/files/${FILE_KEY}`;
    const fileJson = await fetchJson(fileUrl);

    console.log('Scanning nodes for likely assets (logo/icon/avatar/image/export settings)...');

    const candidates = new Map(); // id -> name

    walk(fileJson.document, node => {
      if (!node || !node.name || !node.id) return;
      const name = node.name.toLowerCase();
      const hasExport = node.exportSettings && node.exportSettings.length > 0;
      if (hasExport || /logo|icon|avatar|illustration|image|img|banner|cover|hero|icon-/.test(name)) {
        candidates.set(node.id, node.name);
      }
    });

    if (argv.nodeIds) {
      const ids = String(argv.nodeIds).split(',').map(s => s.trim()).filter(Boolean);
      ids.forEach(id => candidates.set(id, `node-${id}`));
    }

    const idsArray = Array.from(candidates.keys()).slice(0, 100);
    if (idsArray.length === 0) {
      console.log('No asset-like nodes found. You can try --nodeIds=id1,id2 or add export settings in Figma.');
      return;
    }

    for (const fmt of FORMATS) {
      console.log(`Requesting ${fmt} images for ${idsArray.length} nodes...`);
      const imagesUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${idsArray.join(',')}&format=${fmt}&scale=1`;
      const imagesJson = await fetchJson(imagesUrl);

      if (!imagesJson || !imagesJson.images) {
        console.warn('No images returned for format', fmt);
        continue;
      }

      const entries = Object.entries(imagesJson.images);
      console.log(`Downloading ${entries.length} ${fmt} files...`);

      for (const [id, url] of entries) {
        if (!url) {
          console.warn(`No url for node ${id}`);
          continue;
        }
        const nameRaw = candidates.get(id) || `node-${id}`;
        const safeName = sanitizeName(nameRaw);
        const safeId = sanitizeId(id);
        const fname = `${safeName}-${safeId}.${fmt}`;
        const outPath = path.join(OUTPUT_DIR, fname);

        try {
          const res = await fetch(url);
          if (!res.ok) {
            console.warn(`Failed to download ${url}: ${res.status}`);
            continue;
          }
          const buffer = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(outPath, buffer);
          console.log('Saved', outPath);
        } catch (err) {
          console.warn(`Error saving ${outPath}:`, err.message || err);
        }

        await sleep(150);
      }
    }

    console.log('Done. Check the src/assets/ folder and commit the files to your repo.');
    console.log('When pushed, reply: "Pushed — assets added" and I will continue integration.');
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
})();