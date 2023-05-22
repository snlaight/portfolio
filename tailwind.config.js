/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      SourceCode: ['Source Code Pro', 'monospace'],
    },
    extend: {
      colors: {
        background_primary: '#101630',
        background_secondary: '#16204c',
        button: '#3b82f6',
        primary: '#353B41',
        secondary: '#007bff',
        eucalyptus: '#29a847',
        'pale-sky': '#6d767e',
        amber: '#ffc105',
      },
      boxShadow: {
        'icons-project': '0px 0px 0px 2px white',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInTab: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        glowingButton: {
          '0%': { 'background-position': '0 0' },
          '50%': { 'background-position': '400% 0' },
          '100%': { 'background-position': '0 0' },
        },
        fadeInOutPicture: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeTextFromSide: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-tab': 'fadeInTab 0.5s ease-in-out',
        'glowing-button': 'glowingButton 50s ease-in-out infinite',
        'fade-in-out-picture': 'fadeInOutPicture 5s ease-in-out infinite',
        'fade-text-from-side': 'fadeTextFromSide 8s ease-in-out',
      },
    },
  },
  plugins: [],
};
