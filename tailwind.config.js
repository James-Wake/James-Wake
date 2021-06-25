

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'stairs': "url('assets/img/pexels-bence-lengyel-3280178.jpg')",
        'cone': "url('assets/img/pexels-redrecords-©️-2743739.jpg')",
        'chair': "url('assets/img/pexels-pixabay-158229.jpg')",
        'path': "url('assets/img/pexels-alessandro-oliverio-1472234.jpg')"
      })
    },
    fontFamily: {
      'NebulousRegular': ["NebulousRegular", 'sans-serif'],
      'Beon': ["Beon", 'sans-serif'],
      'Neoneon': ["Neoneon", 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
