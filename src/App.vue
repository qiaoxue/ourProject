<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    created () {
      this.updateCurMenu()
    },
    methods: {
      updateCurMenu (route) {
        route = route || this.$route
        if (!route.matched.length) {
          this.$router.push('/404')
        }
      }
    },
    watch: {
      $route (to, from) {
        this.updateCurMenu(to)
      }
    }
  }
</script>

<style>

</style>
