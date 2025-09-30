/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors from your globals.css
        primary: '#ff9933', // saffron
        'footer-orange': '#f97f12', // footer orange
        gold: '#c6a15b',
        'accent-green': '#138808', // Indian green
        'accent-blue': '#4a90e2', // soft blue
        'bg-soft': '#faf7f0', // off-white/beige
        dark: '#111111',
        'gray-50': '#f4f4f5',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        manrope: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        'lg': '0.625rem',
      },
      animation: {
        'shine': 'shine 4s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '200% center' },
        }
      },
      backgroundImage: {
        'watermark': 'radial-gradient(circle at 50% 50%, rgba(198, 161, 91, 0.06) 0 2px, transparent 2px), radial-gradient(circle at 50% 50%, rgba(243, 112, 33, 0.04) 0 1px, transparent 1px)',
        'spiritual': 'linear-gradient(135deg, #ff9933, #4a90e2)',
      },
      backgroundSize: {
        'watermark': '24px 24px, 64px 64px',
      },
      boxShadow: {
        'btn': '0 0 22px rgba(198, 161, 91, 0.25)',
      },
      scrollbar: {
        width: '0.3rem',
        track: '#1e1e24',
        thumb: 'linear-gradient(circle, #b9a8fd 0%, #fd1d83 50%, #fcc545 100%)',
      },
    },
  },
  plugins: [
    // Add any plugins you need here
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#b9a8fd #1e1e24',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '0.3rem',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          background: '#1e1e24',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(45deg, #b9a8fd 0%, #fd1d83 50%, #fcc545 100%)',
          borderRadius: '0.5rem',
        },
        '.bg-watermark': {
          'background-image': 'radial-gradient(circle at 50% 50%, rgba(198, 161, 91, 0.06) 0 2px, transparent 2px), radial-gradient(circle at 50% 50%, rgba(243, 112, 33, 0.04) 0 1px, transparent 1px)',
          'background-size': '24px 24px, 64px 64px',
        },
        '.bg-spiritual': {
          'background': 'linear-gradient(135deg, #ff9933, #4a90e2)',
        },
        '.btn': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'border-radius': '0.375rem',
          'padding': '0.5rem 1rem',
          'font-weight': '500',
          'transition': 'box-shadow 0.2s ease',
          'box-shadow': '0 0 0 rgba(198, 161, 91, 0)',
        },
        '.btn:hover': {
          'box-shadow': '0 0 22px rgba(198, 161, 91, 0.25)',
        },
        '.btn-primary': {
          'background': '#ff9933',
          'color': '#fff',
        },
        '.btn-outline-gold': {
          'border': '1px solid #c6a15b',
          'color': '#111111',
        },
        '.btn-gold': {
          'background': '#c6a15b',
          'color': '#111',
        },
        '.border-gold': {
          'border-color': '#c6a15b',
        },
        '.nav-underline a': {
          'position': 'relative',
        },
        '.nav-underline a::after': {
          'content': '""',
          'position': 'absolute',
          'left': '0',
          'right': '0',
          'bottom': '-2px',
          'height': '2px',
          'background': 'linear-gradient(90deg, #c6a15b, #ff9933)',
          'transform': 'scaleX(0)',
          'transform-origin': 'left',
          'transition': 'transform 0.25s ease',
        },
        '.nav-underline a:hover::after': {
          'transform': 'scaleX(1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
