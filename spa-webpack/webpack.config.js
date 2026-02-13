import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

/* Fix __dirname for ESM */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/app.ts",

  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js"]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
