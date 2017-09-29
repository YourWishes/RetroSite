const webpack = require('webpack');
const path = require('path');

const production = false;

let options = {
    entry: [
        './public/ClientApp.tsx'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    resolve: {
        modules: ['node_modules', './public'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: "jsconfig.json"
                        }                        
                    }
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$|\.css$/i,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                loader: "file-loader?name=./images/[name].[ext]"
            },
			{
				test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
				loader: 'url-loader'
			}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: production ? JSON.stringify('production') : JSON.stringify("")
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

//Define versions here
if(production) {
    options.devtool = 'source-map';
    let x = options.module.rules[1].use;
    for(var i = 0; i < x.length; i++) {
        x[i].options = {
            "minimize": true
        }
    }
    options.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
    options.devtool = 'cheap-module-eval-source-map';
}

// export webpack config
module.exports = options;