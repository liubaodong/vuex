<!--
 * @description: App入口
 * @Author: Coder
 * @Date: 2019-12-11 20:21:39
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 15:17:22
 * @FilePath: \vuex\src\App.vue
 -->
<template>
  <div id="app">
    <router-view v-if="reload" />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      reload() {
        this.reload = false;
        setTimeout(() => (this.reload = true));
      }
    };
  },
  data() {
    return {
      reload: true
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss"></style>
