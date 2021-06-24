

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cone': "url('assets/img/pexels-redrecords-©️-2743739.jpg')",
      })
    },
    fontFamily: {
      'other': ["NebulousRegular", 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
