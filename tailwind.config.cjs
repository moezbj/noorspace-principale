/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // These map to CSS variables so you can change the value in one place (src/index.css)
        'ns-primary': 'var(--ns-primary)',
        'ns-accent': 'var(--ns-accent)'
      },
      fontFamily: {
        // keep default, or add custom family here if you want to match Figma font
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};