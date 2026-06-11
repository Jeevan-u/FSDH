/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3fa',
          100: '#d4e2f2',
          200: '#a9c5e5',
          300: '#7aa8d8',
          400: '#4f8bcb',
          500: '#0F4C81',
          600: '#0c3d67',
          700: '#092e4d',
          800: '#061f33',
          900: '#031019',
        },
        accent: {
          50: '#fdf8ed',
          100: '#f9edd1',
          200: '#f2d99e',
          300: '#ebc570',
          400: '#e4b142',
          500: '#D4AF37',
          600: '#b8942e',
          700: '#8c6f23',
          800: '#604a18',
          900: '#34260c',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
