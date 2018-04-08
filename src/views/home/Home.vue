<template>
  <div class="billing-home-home">
    <group-title> nihao </group-title>
    <grid :show-lr-borders="false">
      <grid-item>
        <span class="grid-center">22</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
import types from '../../store/mutation-types'
export default {
  name: 'Home',
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  created () {
    this.setNavIndex();
  },
  methods: {
    setNavIndex () {
      this.$store.commit(types.SET_NAV_INDEX,'1')
    },
  }
}
</script>

<style lang="scss">
  .billing-home-home {
    .grid-center {
      display: block;
      text-align: center;
      color: #666;
    }
  }
</style>
