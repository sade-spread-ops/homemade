const path = require('path');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'index.jsx'),
  output: {
    filename: 'bundles.js',
    path: path.resolve(__dirname, 'client', 'dist')
  },

  watch: true,
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};