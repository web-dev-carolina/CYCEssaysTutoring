module.exports = {
    entry:  './src/App.js',
    output: {
      // path:__dirname+ '/dist/',
      filename: "bundle.js",
      // publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          // query: {
          //   presets: ['@babel/es2015']
          // }
        }
      ]
    }
  }