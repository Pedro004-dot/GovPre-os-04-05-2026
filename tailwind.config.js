/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['DM Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        navy: '#001F3E',
        action: {
          DEFAULT: '#006AFF',
          hover: '#007BFF',
        },
        success: '#7CCD48',
        ice: '#E4ECF7',
        surface: '#F7F8F8',
        muted: '#8092AA',
        border: '#BBCADF',
      },
      borderRadius: {
        card: '0.75rem',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(0, 31, 62, 0.08)',
        float: '0 12px 40px -8px rgba(0, 31, 62, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'match-pulse': 'matchPulse 2s ease-in-out infinite',
        'flow-dash': 'flowDash 1.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        matchPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(124, 205, 72, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(124, 205, 72, 0)' },
        },
        flowDash: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
