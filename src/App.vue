<template>
  <header-section></header-section>
</template>

<script>
import headerSection from './components/header'

export default {
  name: 'App',
  components: {
    headerSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
