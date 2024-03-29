const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const BASE_JS = "./src/client/js/"
module.exports = {
  entry:{
    main :BASE_JS+ "main.js",
    videoPlayer:BASE_JS+"videoPlayer.js",
    commentSection:BASE_JS+"commentSection.js"
  },
  mode:"development",
  watch:true, //2개의 console 실행해야 함(one for client, one for backend)
  plugins:[new MiniCssExtractPlugin({ //css 파일을 css/styles.css에 입력해줌
    filename : "css/style.css"
  })],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader", //js코드를 babel-loader라는 loader로 가공
          options: { //그 babel loader에 몇몇 option 추가
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },{
        test : /\.scss$/,
        use:[MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],
      }
    ],
  },
};
