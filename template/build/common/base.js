/* webpack基础配置 */
var webpack = require('webpack')
var path = require('path')
var config = require("../config")


module.exports = function (isProd) {
    var codeBase = path.join(__dirname, '../../src'),
        _dir = isProd ? './static' : 'static';
    return {
        entry: config.entry,
        resolve: {
            extensions: ['.js', '.json'],
            alias: {
                '@': codeBase,
                'C': path.join(__dirname, '../../src/components'),
                'san': isProd ? 'san/dist/san.js' : 'san/dist/san.dev.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: path.posix.join(_dir, 'image/[name].[hash:5].[ext]') //image 文件夹
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: path.posix.join(_dir, 'media/[name].[hash:5].[ext]') //media 文件夹
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: path.posix.join(_dir, 'fonts/[name].[hash:5].[ext]') //fonts 文件夹
                    }
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                "san": "san"
            })
        ]
    }
}