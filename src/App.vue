<template>
  <header-section></header-section>
  <main-section></main-section>
</template>

<script>
import headerSection from './components/header';
import mainSection from './components/main';

export default {
  name: 'App',
  components: {
    headerSection,
    mainSection
  }
}
</script>

<style>
</style>
