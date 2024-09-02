import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineScriptPlugin from 'html-inline-script-webpack-plugin';
import HtmlMinimizerPlugin from "html-minimizer-webpack-plugin";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default {
    context: path.resolve(__dirname),
    devtool: 'inline-source-map',
    entry: './index.ts',
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: "../tsconfig.webport.json"
                }
            }],
            exclude: /\.\.\/node_modules/,
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/webport')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'melon webport',
            inject: 'head'
        }),
        new HtmlInlineScriptPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new HtmlMinimizerPlugin(),
        ],
      },
};