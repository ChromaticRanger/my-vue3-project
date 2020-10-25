
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      return { resolve: { mainFields: ['main', 'module'] } }
    }
  }
}
