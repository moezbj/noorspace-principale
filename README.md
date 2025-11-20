```markdown
# Noorspace — Principale (React 19, Vite, Tailwind, Storybook, Jest)

This project scaffold includes a Principale role layout (sidebar, header, main) and tooling:

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Storybook
- Jest + Testing Library

Getting started:
1. Install
   npm install

2. Run dev server
   npm run dev

3. Storybook
   npm run storybook

4. Tests
   npm run test

Figma assets
1. Open your Figma file (make it "Anyone with link can view" or invite the export user).
2. Export needed layers/icons as SVG/PNG:
   - Select layer(s) -> right panel -> Export -> choose SVG/PNG -> Export.
3. Place exported files into `src/assets/` (create that folder).
4. Update image imports in `src/pages/PrincipaleDashboard.tsx` or components.

Next steps
- After you add exported assets into src/assets, I can update Tailwind config and components to match the Figma visuals precisely.
```