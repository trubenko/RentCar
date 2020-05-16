const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

// Main const. Feel free to change it
const PATHS = {
    src: path.join(__dirname, "./src"),
    dist: path.join(__dirname, "./public"),
    views: path.join(__dirname, "./views"),
    assets: "assets/"
};

module.exports = {
    mode: 'development',
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
        // module: `${PATHS.src}/your-module.js`,
    },
    devtool: "cheap-module-eval-source-map",
    output: {
        filename: `${PATHS.assets}js/[name].js`,
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

    //todo remove
    resolve: {
        alias: {
            "~": PATHS.src,
            assets: PATHS.assets
        }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
            { from: `${PATHS.src}/static`, to: "" }
        ]),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        }),

        /*
          Automatic creation any html pages (Don't forget to RERUN dev server!)
          See more:
          https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
          Best way to create pages:
          https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
        */

        //todo remove
//            ...PAGES.map(
//              page =>
//                new HtmlWebpackPlugin({
//                  template: `${PAGES_DIR}/${page}`,
//                  filename: `./${page}`
//                })
//            )
    ]
};
