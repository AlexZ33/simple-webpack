module.exports = function (env, argv) {
  return argv.mode === 'production' ? 
    require('./config/webpack.prod.js') :
    require('./config/webpack.dev.js')
}