const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

// Main const. Feel free to change it
const PATHS = {
    src: path.join(__dirname, "./src"),
    dist: path.join(__dirname, "./public"),
    views: path.join(__dirname, "./views")
};

module.exports = {
    mode: 'development',
    externals: {
        paths: PATHS
    },
    watch: true,
    entry: {
        app: PATHS.src
    },
    devtool: "cheap-module-eval-source-map",
    output: {
        filename: `js/[name].js`,
        path: PATHS.dist,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                // JavaScript
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                // Handlebars
                test: /\.handlebars$/,
                loader: "handlebars-loader" },
            {
                // Fonts
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                // images / icons
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                // scss
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: { path: `./postcss.config.js` }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                // css
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: { path: `./postcss.config.js` }
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            "~": PATHS.src
        }
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name].css`
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/img`, to: `img` },
            { from: `${PATHS.src}/fonts`, to: `fonts` },
//            { from: `${PATHS.src}/static`, to: "" }
        ]),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
};
