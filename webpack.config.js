const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2, // sass-loader postcss-loader
              localIdentName: '[path][name]__[local]__[hash:base64:5]',
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [],
};
