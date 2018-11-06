const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@src': path.join(__dirname, '../../src'),
      '@components': path.join(__dirname, '../../src/components'),
      configFile: path.join(__dirname, '../config.json')
    }
  }
};
