
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#00B0F0',
        'dark-blue': '#00263C',
        'white': '#FFFFFF',
        'black': '#000000',
        'yellow': '#FFD700',
        'red': '#FF4757',
        'whatsapp': '#25D366',
        'gray-light': '#F8F9FA',
        'gray-medium': '#6C757D',
      },
      boxShadow: {
        'shadow': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'shadow-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
