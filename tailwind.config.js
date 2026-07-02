/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070d',
        surface: '#0a0f1c',
        'surface-2': '#0f1729',
        'blue-deep': '#12379e',
        blue: '#3d7bfa',
        'blue-light': '#8fb6ff',
        cyan: '#37cdfa',
        ice: '#d6e6ff',
        text: '#e9eef9',
        'text-dim': '#8b9ac0',
        'text-faint': '#4d5a80',
        border: 'rgba(140,170,255,0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #12379e 0%, #3d7bfa 55%, #37cdfa 100%)',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.16,.8,.24,1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.35' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        'scroll-cue-move': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        blink: 'blink 1s steps(2) infinite',
        'scroll-cue': 'scroll-cue-move 1.8s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
