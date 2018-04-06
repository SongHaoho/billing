<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <!-- 导航条 -->
    <tabbar>
      <tabbar-item :selected="navIndex == 1" link="/">
        <i slot="icon" class="icon icon-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="navIndex == 2" link="/account">
        <i slot="icon" class="icon icon-pen"></i>
        <span slot="label">记账</span>
      </tabbar-item>
      <tabbar-item :selected="navIndex == 3" link="/bill">
        <i slot="icon" class="icon icon-file-text"></i>
        <span slot="label">账单</span>
      </tabbar-item>
      <tabbar-item :selected="navIndex == 4" link="/chart">
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
    computed: {
      navIndex () {
          return this.$store.state.nav_index;
      },
    },
    data(){
      return{
        transitionName:'',
      }
    },
    components: {
      Tabbar,
      TabbarItem
    },
    watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态(往左),反之则为后退状态(往右)
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
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

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all .5s;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
