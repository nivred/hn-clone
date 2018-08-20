const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  mode: "development", // TODO: figure this out from an environment variable.
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
