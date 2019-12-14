<!--
 * @description: layout_aside
 * @Author: Coder
 * @Date: 2019-12-14 15:20:40
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 20:25:39
 * @FilePath: \vuex\src\layout\aside\aside.vue
 -->
<template>
  <div>
    <a-layout-sider :trigger="null" collapsible v-model="toggle">
      <div class="logo"></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "layout_aside",
  components: {},
  props: {},
  data() {
    return { collapsed: false };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {
    ...mapGetters(["toggle"])
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
