/*
 * @description: mutations
 * @Author: Coder
 * @Date: 2019-12-14 15:45:37
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 20:33:22
 * @FilePath: \vuex\src\store\mutations.js
 */
import { TOGGLE } from "@/store/types.js";

export default {
  [TOGGLE](state) {
    state.toggle = !state.toggle;
    console.log(state);
  }
};
