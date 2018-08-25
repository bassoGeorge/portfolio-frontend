let HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
let path                           = require('path');

const appRoot   = './src',
      styleRoot = `${appRoot}/styles`
module.exports  = {
	configureWebpack: {
		entry  : {
			dark_theme : `${styleRoot}/dark.theme.styl`,
			light_theme: `${styleRoot}/light.theme.styl`
		},
		resolve: {
			alias: {
				'styles': path.resolve(styleRoot, 'partials')
			}
		},
		plugins: [
			new HtmlWebpackExcludeAssetsPlugin()
		]
	},
	chainWebpack    : config => {
		config.plugin('html')
		.tap(args => {
				args[0].excludeAssets = [/.*light_theme\.js/]
				return args;
			}
		)
	}
}