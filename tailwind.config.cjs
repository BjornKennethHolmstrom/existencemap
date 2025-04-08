const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      keyframes: {
        'gradient-slow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        }
      },
      animation: {
        'gradient-slow': 'gradient-slow 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      colors: {
        // 🌌 Core Theme
        primary: colors.indigo,
        secondary: colors.purple,
        backgroundLight: '#f9f7ff',
        backgroundDark: '#0f0e17',

        'cosmic-dark': '#0a0a12',
        'cosmic-darker': '#0c0c18',
        'cosmic-black': '#000000',

        // 🌀 Consciousness Domains
        spiral: '#f97316',     // orange
        spiralLight: '#fbbf24',
        void: '#0d0d0d',
        voidGlow: '#4b5563',
        feminine: '#f472b6',
        feminineSoft: '#fbcfe8',
        alien: '#7dd3fc',
        alienNeon: '#06b6d4',
        symbolic: '#c084fc',
        being: '#34d399',
        unknown: '#64748b',
        unknownShimmer: '#e2e8f0',

        // UI Accents
        accent: '#9333ea',
        light: '#fdfdfd',
        dark: '#111827'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mystic: ['"Cinzel Decorative"', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        mystic: '0 0 40px rgba(147, 51, 234, 0.4)',
        aura: '0 0 20px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  darkMode: 'class',
};

