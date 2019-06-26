const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      containers: path.resolve(__dirname, 'src/containers'),
      utils: path.resolve(__dirname, 'src/utils'),
      routes: path.resolve(__dirname, 'src/routes'),
      views: path.resolve(__dirname, 'src/views'),
      src: path.resolve(__dirname, 'src')
    }
  }
}
