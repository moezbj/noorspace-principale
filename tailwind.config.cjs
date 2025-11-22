/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // These map to CSS variables so you can change the value in one place (src/index.css)
        'ns-primary': 'var(--ns-primary)',
        'ns-accent': 'var(--ns-accent)',
        'ns-border': 'var(--ns-border)',
        'ns-card': 'var(--ns-card)',
        'ns-muted': 'var(--ns-muted)'
      },
      fontFamily: {
        sans: ['Noto Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};