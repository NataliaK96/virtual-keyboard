const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin ({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({

      template: './src/style.css',
      filename: 'style.css',
      chunkFilename: '[id].css',
      ignoreOrder: false, 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
          },
        ],
      },
     
      {
        test: /\.s[ac]ss$/i,
        use: [
          
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' 
        ],
      },
     
    ]
  },
  
  
  devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname,'dist'),
      compress: true,
      port: 3000
    }
  };