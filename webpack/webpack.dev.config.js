const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");//文件合并
const webpackConfigBase = require("./webpack.base.config");
const openBrowserPlugin = require('open-browser-webpack-plugin');//在浏览器中打开程序

const webpackConfigDev = {
    mode:'development',
    plugins:[
        new openBrowserPlugin({url:"http://localhost:8080"})
    ],
    devServer:{
        contentBase: path.join(__dirname,"../public"),
        hot: true,
        host:'0.0.0.0',
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
        ],
    }
}
module.exports = merge(webpackConfigBase, webpackConfigDev);
