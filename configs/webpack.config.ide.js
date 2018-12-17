// var getRootRelativePath = require('./utils');
var path = require('path');

module.exports = {
  app: path.join(__dirname, '../src/app'),
  src: path.join(__dirname, '../src/'),
  '@components': path.join(__dirname, '../src/app/components'),
  '@models': path.join(__dirname, '../src/app/models'),
  '@redux': path.join(__dirname, '../src/app/redux')
};
