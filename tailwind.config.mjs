/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6F0',
        cream: '#F3EDE3',
        sage: '#DCE5DD',
        forest: '#152824',
        pine: '#1E3A32',
        champagne: '#C9A87A',
        blush: '#E8CFC0',
        ink: '#1F1F1F',
        stonewarm: '#E9E0D4'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(21,40,36,0.25)',
        card: '0 10px 30px -12px rgba(21,40,36,0.18)'
      },
      borderRadius: {
        xl2: '20px'
      }
    }
  },
  plugins: []
};
