const webpack = require("webpack");
const path = require("path");
const webpackConfigBase = require("./webpack.base.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");

const webpackConfigProd = {
    mode: "production",
    plugins:[
        new  CleanWebpackPlugin(["build"],{
        root: path.join(__dirname,"../")
        })
    ]
};
module.exports = merge(webpackConfigBase, webpackConfigProd);
//webpack中用到的一些插件以及转码器需要自己安装