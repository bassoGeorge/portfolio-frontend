let HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
let MiniCssExtractPlugin           = require('mini-css-extract-plugin')
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
			args[0].excludeAssets = [
				/.*light_theme.*?\.js/,
				/.*light_theme.*?\.css/
			]
				return args;
			}
		)

		config.module.rules.delete('less')
		config.module.rules.delete('pug')
		config.module.rules.delete('svg')
		config.module.rules.delete('sass')
		config.module.rules.delete('scss')

		config.module
		.rule('svg')
		.test(/\.svg$/)
		.oneOf('inline')
		.resourceQuery(/inline/)
		.use('svg-inline-loader')
		.loader('svg-inline-loader')
		.end()
		.end()
		.oneOf('external')
		.use('file-loader')
		.loader('file-loader')
		.options({
			name: 'img/[name].[has:8].ext'
		})
		.end()
		.end()

		config.plugin('mini-css-extract')
		.use(MiniCssExtractPlugin, [{
			filename     : "[name].css",
			chunkFilename: "[id].css"
		}])

		const normal = config.module.rule('stylus').oneOfs.get('normal')
		config.module.rule('stylus').oneOfs.delete('normal')

		const
			cssLoader     = normal.uses.get('css-loader'),
			postCssLoader = normal.uses.get('postcss-loader'),
			sassLoader    = normal.uses.get('stylus-loader')

		normal.uses.clear()

		normal.use('mini-css-extract')
		.loader(MiniCssExtractPlugin.loader)

		normal.uses.set('css-loader', cssLoader)
		normal.uses.set('postcss-loader', postCssLoader)
		normal.uses.set('stylus-loader', sassLoader)

		config.module.rule('stylus').oneOfs.set('normal', normal)

	}
}