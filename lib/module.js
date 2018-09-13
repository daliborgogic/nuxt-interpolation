const { resolve } = require('path')

module.exports = function interpolation () {
  this.addPlugin(path.resolve(__dirname, 'templates/plugin.js'))
}

// REQUIRED if publishing as an npm package
module.exports.meta = require('./package.json')
