const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./src/js/app.js"], // Entry point for our application
  output: {
    path: path.resolve(__dirname, "dist"),// __dirname is the current directory. Our app will run from the dist folder.
    filename: "js/[name].js"
  },
  module: { // module section tells webpack what file types it should handle.
    rules: [ // this rule tells webpack to handle javascript files and use babel to transpile the code.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader"
            }
        ]
    }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename:"./index.html"
    })
]
};
