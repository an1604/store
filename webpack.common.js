const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
    }, module: {
        rules: [{
            test: /\.html$/, use: ["html-loader"]
        }, {
            test: /\.(svg|png|jpg|gif)$/i, type: 'asset',
        }, {
            test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader",],
        }, {
            test: /\.css$/, sideEffects: true, use: [MiniCssExtractPlugin.loader, "css-loader",],
        }]
    }, plugins: [new MiniCssExtractPlugin({filename: "[name]-[hash].css"}),],
};
