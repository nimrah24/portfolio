/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#05050a', 900: '#09090f', 800: '#101019', 700: '#181826', 600: '#232336' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 28px -8px rgba(139, 92, 246, 0.65)',
        'glow-lg': '0 0 44px -6px rgba(139, 92, 246, 0.75)',
        'glow-blue': '0 0 36px -8px rgba(59, 130, 246, 0.6)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'gradient-x': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        shine: {
          '0%': { transform: 'translateX(-140%) skewX(-20deg)' },
          '55%,100%': { transform: 'translateX(260%) skewX(-20deg)' },
        },
        twinkle: { '0%,100%': { opacity: '0.15', transform: 'scale(0.5)' }, '50%': { opacity: '1', transform: 'scale(1)' } },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.08)' },
          '66%': { transform: 'translate(-25px,20px) scale(0.94)' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        shine: 'shine 3.5s ease-in-out infinite',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
