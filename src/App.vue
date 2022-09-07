<template>
  <HeaderComponent/>
  <RouterView class="pl-5 pr-5 lg:pr-20 lg:pl-20 " />
  <FooterComponent/>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
