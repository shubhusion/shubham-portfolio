/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: '#0A0A0F',
        paper: '#F5F3FF',
        violet: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          pale: '#EDE9FE',
          dim: 'rgba(124,58,237,0.1)',
        },
        electric: '#A78BFA',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
}
