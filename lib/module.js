const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'interpolation.js'
  })
}
