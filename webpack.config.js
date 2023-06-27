const path = require('path');

module.exports = {
  entry: './processor.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};