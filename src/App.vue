<template>
  <div id="app">
    <router-view></router-view>

    <!-- 导航条 -->
    <tabbar>
      <tabbar-item link="/">
        <i slot="icon" class="icon icon-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/account">
        <i slot="icon" class="icon icon-pen"></i>
        <span slot="label">记账</span>
      </tabbar-item>
      <tabbar-item link="/bill">
        <i slot="icon" class="icon icon-file-text"></i>
        <span slot="label">账单</span>
      </tabbar-item>
      <tabbar-item link="/chart">
        <i slot="icon" class="icon icon-stats-dots"></i>
        <span slot="label">分析</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style lang="scss">
@import "./assets/scss/reset";
@import "./assets/scss/define";

body {
  @extend %oh;
  background-color: #fbf9fe;
}
</style>
