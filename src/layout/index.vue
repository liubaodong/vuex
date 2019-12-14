<!--
 * @description: layout入口文件
 * @Author: Coder
 * @Date: 2019-12-14 15:20:56
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 17:34:12
 * @FilePath: \vuex\src\layout\index.vue
 -->
<template>
  <div>
    <a-layout id="components-layout-demo-custom-trigger">
      <!-- 侧边 -->
      <a-aside></a-aside>
      <a-layout>
        <a-header></a-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          Content
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import aAside from "@/layout/aside/aside";
import aHeader from "@/layout/header/header";
export default {
  name: "layout_index",
  components: { aAside, aHeader },
  props: {},
  data() {
    return {
      collapsed: false
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
