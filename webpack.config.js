const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    application: './app/javascript/application.js',
    react_app: './app/ts/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/assets/builds'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'app/ts/src/'),
      '@actions': path.resolve(__dirname, 'app/ts/src/actions'),
      '@api': path.resolve(__dirname, 'app/ts/src/api'),
      '@comp': path.resolve(__dirname, 'app/ts/src/components'),
      '@containers': path.resolve(__dirname, 'app/ts/src/containers'),
      '@utils': path.resolve(__dirname, 'app/ts/src/utils'),
    },
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
}
