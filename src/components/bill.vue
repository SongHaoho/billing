<template>
  <div class="hello">
    <h1>bill</h1>
  </div>
</template>

<script>
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
      this.$store.commit(types.SET_NAV_INDEX,'3')
    },
  }
}
</script>

<style>

</style>
