/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      flex: {
        '2': '2 2 0%'
    },
    backgroundImage: {
      'hero-pattern': "url('images/image-header.jpg')",
      'hero-pattern': "url('images/image-graphic-design.jpg')",
      'hero-pattern': "url('images/image-photography.jpg')",
    }
    },
  },
  plugins: [],
}
