const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "server",
    entry: [ "babel-polyfill", path.join(CURRENT_WORKING_DIR , './index.js') ],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/public/'),
        filename: "server.bundle.js",
        publicPath: '/public/',
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                loader: "style-loader!css-loader!sass-loader",
            },
            {
                test: /\.css$/i,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                loader: 'file-loader'
            }
        ]
    }
}

module.exports = config
