<template>
  <div class="hello">
    <h2>account</h2>
  </div>
</template>

<script>
import types from '../store/mutation-types'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.setNavIndex();
  },
  methods: {
    setNavIndex () {
      this.$store.commit(types.SET_NAV_INDEX,'2')
    },
  }
}
</script>

<style>

</style>
