const HtmlWebpackPlugin = require("html-webpack-plugin");
const environment = process.env.NODE_ENV || "development";

module.exports = {
  entry: ["./src/index.js"],
  mode: environment,
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "HN Clone"
    })
  ]
};
