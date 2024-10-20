/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Verifique se você tem a pasta app
    './pages/**/*.{js,ts,jsx,tsx}',  // Caso esteja usando pages, mantenha
    './components/**/*.{js,ts,jsx,tsx}',  // Para components
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(at center, var(--tw-gradient-stops))',
      },
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'], // Se você quiser adicionar outras fontes
        spacemono: ['Space Mono', 'sans-serif'], // Se você quiser adicionar outras fontes
      },
      backgroundColor: {
        'transparent': 'transparent',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],

}

