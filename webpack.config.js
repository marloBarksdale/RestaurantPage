const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
       index: './src/index.js',
       menu:'./src/menu.js',
       home:'./src/home.js',
       contact:'./src/contact.js'
    },

    plugins: [
           new HtmlWebpackPlugin({
              title: 'Pfizer Eats: For the Micro-Chipped',
            }),
          ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude: path.resolve(__dirname, '/node_modules'),
            },
        ],
    },
};