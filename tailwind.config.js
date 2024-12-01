/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            spotify: {
              green: '#1DB954',
              dark: '#121212',
              darker: '#0A0A0A',
              light: '#282828',
              lighter: '#404040',
            },
          },
          animation: {
            'gradient': 'gradient 8s linear infinite',
            'waveform': 'waveform 1.2s ease-in-out infinite',
            'glow': 'glow 2s ease-in-out infinite',
          },
          keyframes: {
            gradient: {
              '0%, 100%': {
                'background-size': '200% 200%',
                'background-position': 'left center'
              },
              '50%': {
                'background-size': '200% 200%',
                'background-position': 'right center'
              },
            },
            waveform: {
              '0%, 100%': { transform: 'scaleY(0.5)' },
              '50%': { transform: 'scaleY(1)' },
            },
            glow: {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.5 },
            },
          },
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          },
          fontFamily: {
            'consolas': ['Consolas', 'Courier New', 'monospace'],
          },
        },
      },
      plugins: [],
    }
