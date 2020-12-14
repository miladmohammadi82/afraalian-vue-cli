<template>
  <header-section></header-section>
  
   <router-view />

  <footer-section></footer-section>
  
</template>

<script>
import headerSection from './components/header';
import footerSection from './components/footer';

export default {
  name: 'App',
  components: {
    headerSection,
    footerSection
  }
}
</script>
