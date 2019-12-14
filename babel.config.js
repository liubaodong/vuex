/*
 * @description: 修改babel.config.js文件，配置 babel-plugin-import
 * @Author: Coder
 * @Date: 2019-12-11 20:21:40
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 17:06:03
 * @FilePath: \vuex\babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }]
  ]
};
