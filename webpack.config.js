const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const mode = 'development';



module.exports = {
    mode,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
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