module.exports = {
  mode: 'jit',
  purge:{
    enabled: true,
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './nuxt.config.{js,ts}',
    ],
  },
}