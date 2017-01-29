// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: './365-vue-prototype/',
    productionSourceMap: true,
    assetsSubDirectory: 'static',
	autoOpenBrowser: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
	autoOpenBrowser: false,
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
	module: {
	loaders: [
		// the url-loader uses DataUrls.
		// the file-loader emits files.
		{
			test: /\.(jpg|jpeg|gif|png)$/,
			loader: 'file'
		},
		{ 
			test: /\.scss$/, 
			loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] 
		},
		{ test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=static/fonts/[name].[ext]' },
		{ test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=static/fonts/[name].[ext]' },
		{ test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=static/fonts/[name].[ext]' },
		{ test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=static/fonts/[name].[ext]' },
		{ test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=static/fonts/[name].[ext]' }
	]
	}
}
