module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  safelist: ["lg:col-span-2", "lg:col-span-3", "lg:col-span-4", "xl:grid-cols-4", "xl:col-span-4"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F9FF',  // backgrounds muted light
          100: '#eff0ff', // labels background light
          200: '#ECEFF8', // borders light
          500: '#575dff', // primary ascent color text and backgrounds
          600: '#642EFF',
          700: '#2b33ff', // label text light
          800: '#211F49', // borders dark
          900: '#151332', // backgrounds muted dark
          950: '#080627', // backgrounds dark
        },
      },
      fontFamily: {
        sans: "'Wix Madefor Display',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.6875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.875rem' }],
        '5xl': ['2.75rem', { lineHeight: '1.2' }],
        '6xl': ['3.5rem', { lineHeight: '1.2' }],
        '7xl': ['4.25rem', { lineHeight: '1.1872' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      letterSpacing: {
        'widest': '0.15em',
      },
      lineHeight: {
        loose: '1.875',
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
