const { resolve } = require('path')

module.exports = function () {
  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'interpolation.js',
    ssr: false
  })
}

// REQUIRED if publishing as an npm package
// module.exports.meta = require('./package.json')
