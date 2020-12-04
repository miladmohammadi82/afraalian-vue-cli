<template>
  <header-section></header-section>
  <slider-vue></slider-vue>
</template>

<script>
import headerSection from './components/header'
import sliderVue from './components/slider.vue'


export default {
  name: 'App',
  components: {
    headerSection,
    sliderVue
  }
}
</script>

<style>
</style>
