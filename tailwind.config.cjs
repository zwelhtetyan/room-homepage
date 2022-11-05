/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            'dark-gray': 'hsl(0, 0%, 63%)',
            black: 'hsl(0, 0%, 0%)',
            white: 'hsl(0, 0%, 100%)',
            'very-dark-gray': 'hsl(0, 0%, 27%)',
         },

         screens: {
            mobile: '480px',
         },

         animation: {
            'fade-in': 'fade-in 1s ease-in-out',

            'fade-up-1': 'fade-up .4s ease-in-out',
            'fade-up-2': 'fade-up .6s ease-in-out',
            'fade-up-3': 'fade-up .8s ease-in-out',
            'fade-up-4': 'fade-up 1s ease-in-out',
         },

         keyframes: {
            'fade-in': {
               '0%': { opacity: 0.3 },
               '100%': { opacity: 1 },
            },

            'fade-up': {
               '0%': { opacity: 0, transform: 'translateY(20px)' },
               '100%': { opacity: 1, transform: 'translateY(0)' },
            },
         },
      },
   },
   plugins: [],
};
