module.exports = {
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: '8080',
      publicPath: '/',
      contentBase: './public/',
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/,
      },
      // enable HMR
      hot: true,
      hotOnly: true,
      disableHostCheck: true
    },
    
  }