var path = require('path');

var file = 'reactTree'

module.exports = {
  mode: "development",
  entry: ['./src/'+file+'.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: file+'.js',
    library: {
      name: file,
      type: 'var',
    },
    globalObject:'this'
  },
  externals: {
    react: 'React',
  },
};