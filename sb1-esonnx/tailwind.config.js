/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leaf-pattern': "url('/images/leaf-pattern.svg')",
      },
      colors: {
        'natural': {
          50: '#f8faf8',
          100: '#f0f4f0',
          200: '#dce5dc',
          300: '#b8ccb8',
          400: '#8ba98b',
          500: '#658665',
          600: '#4d674d',
          700: '#405440',
          800: '#364436',
          900: '#2f392f',
          950: '#1a1f1a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}