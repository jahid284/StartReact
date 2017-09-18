module.exports = {
  entry: './app/components/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['*','.js','.jsx'],
    modules: [__dirname, 'node_modules'],
    alias: {
      
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react','es2015','stage-0']
        }
      }
    ]
  }
};