const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: './index.ts',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};