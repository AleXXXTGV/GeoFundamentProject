<template>
  <div class="bg-body-color">
    <Navbar/>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
import MobileMenu from '~/components/MobileMenu.vue'
export default {
  components: { MobileMenu, Navbar, Footer },
  data() {
    return {
      showMobileMenu: false,
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.raleway {
  font-family: 'raleway', sans-serif;
}
.container {
  width: 95%;
  max-width: none;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  caret-color: transparent;
}
.nuxt-link-exact-active {
  color: #D7C0AA;
}
.nuxt-link-prefetched {
  color: yellow;
}
</style>