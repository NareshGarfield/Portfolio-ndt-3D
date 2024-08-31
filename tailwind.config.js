/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      boxShadow:{
        'glass-inset': 'inset 0 10px 5px -9px rgba(255, 212, 143, 0.8)',
        'glass-sm': '2px 2px 40px 0px rgba(0, 0, 0, 0.8)',
      },
      keyframes:{
        'spin-reverse': {
          '0%' : {transform: 'rotate(0deg)'},
          '100%' : {transform: 'rotate(-360deg)'},
        }
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(100% 100% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },
      animation:{
        'spin-slow':'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite'
      },
      screens: {
        xs: '480px'
      },
    },
  },
  plugins: [],
};
