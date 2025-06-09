const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

const mode = 'development';

const packageJson = require('./package.json');
const projectName = packageJson.name;
const projectVersion = packageJson.version;

module.exports = {
    mode,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
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
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public/sw.js", to: "sw.js" },
                { from: 'public/manifest.json', to: 'manifest.json' },
                { from: 'public/assets', to: 'assets' },
            ],
        }),
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