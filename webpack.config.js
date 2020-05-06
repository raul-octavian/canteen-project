module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "style-resources-loader",
            options: {
              patterns: ["./src/styles/_variables.scss"]
            }
          }
        ]
      }
    ]
  }
  // ...
};
