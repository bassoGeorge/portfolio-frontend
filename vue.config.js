let HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = {
	configureWebpack: {
		entry  : {
			dark_theme : './src/styles/dark.theme.styl',
			light_theme: './src/styles/light.theme.styl'
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