<template>
  <NavbarVue/>
  <!-- <Home /> -->
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
// import Home from './views/Home.vue'
import NavbarVue from './components/Navbar.vue'
export default {
  components: { NavbarVue  }
}
</script>
<style scoped>
body {
  background: #f2f2f2;
}
</style>
