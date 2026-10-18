/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf8f4',      // warm off-white background
        ink: '#1b1c1e',        // dark charcoal typography
        muted: '#5b5f66',      // secondary text
        accent: '#1d4ed8',     // cobalt blue
        accentDeep: '#1e40af', // deep indigo/blue hover
        line: '#e8e4dc',       // subtle borders
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
