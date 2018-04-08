<template>
  <div class="hello">
    <h1>shouye</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

<style>

</style>
