const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const packageJson = require('./package.json');
const projectName = packageJson.name;
const projectVersion = packageJson.version;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: `[hash].${projectName}.${projectVersion}.js`,
        clean: true, // Очиска папка build перед сборкой
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        }
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: isDev ? './public/index.html' : './public/prod.html' }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public/sw.js", to: "sw.js" },
                { from: 'public/manifest.json', to: 'manifest.json' },
                { from: 'public/assets', to: 'assets' },
            ],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            app: path.resolve(__dirname, 'src/app'),
            pages: path.resolve(__dirname, 'src/pages'),
            features: path.resolve(__dirname, 'src/features'),
            entities: path.resolve(__dirname, 'src/entities'),
            shared: path.resolve(__dirname, 'src/shared'),
        }
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 3000,
        hot: true, // Hot Module Replacement (HMR)
        open: true, // Автоматическое открытие браузера
    },
};