const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './build',
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: './*.html'
		}]),
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
				'eslint-loader'
			]
		},
		{
			test: /\.less$/,
			use: ['style-loader',
				'css-loader',
				'less-loader',
			],
		},
		]
	},
	// resolve: {
	// 	alias: {
	// 		'react': 'preact-compat',
	// 		'react-dom': 'preact-compat',
	// 	}
	// }
};
