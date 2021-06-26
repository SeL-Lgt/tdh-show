const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "tdg-show";

const port = process.env.port || 8080;

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: true,
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: {
    name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack: (config) => {
    const fileRule = config.module.rule("file");
    fileRule.uses.clear();
    fileRule
      .test(/\.pdf|ico$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        limit: 10000,
      });

    // config.module
    //   .rule("worker")
    //   .test(/\.worker\.js$/)
    //   .use("worker-loader")
    //   .loader("worker-loader")
    //   .options({
    //     inline: true,
    //     fallback: false,
    //   })
    //   .end();
  },
};
