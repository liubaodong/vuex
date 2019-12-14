/*
 * @description: store主文件
 * @Author: Coder
 * @Date: 2019-12-11 20:21:40
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 17:44:54
 * @FilePath: \vuex\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
/* vue持久化 */
import createPersistedState from "vuex-persistedstate";
/* 引入vuex碎片文件 */
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

/* vue 全局状态 */
const state = {
  toggle: false
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
  plugins: [createPersistedState()]
});
