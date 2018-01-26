const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const DEBUG = process.env.NODE_ENV !== 'production'

const options = {
    output: {
        publicPath: '/js/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    cacheDirectory: DEBUG,
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: [
                        'transform-runtime',
                        'transform-decorators-legacy'
                    ]
                }
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

module.exports = merge(options, require('./webpack.dev'))
