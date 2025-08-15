/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: { primary: '#184E77' }
      },
      borderRadius: { sm: '4px', md: '8px' }
    }
  },
  plugins: []
};