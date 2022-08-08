<template>
    <div class="bg-footer-color">
        <!-- <MobileMenu v-show="showMobileMenu"/> -->
        <Navbar @showMobileMenu="showMobileMenu = true"/>
        <Nuxt />
        <Footer />
    </div>
</template>
<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
// import MobileMenu from '../components/MobileMenu.vue';
export default {
    
    components: { Navbar, Footer },
    data () {
        return {
            showMobileMenu: false
        }
    }
}
</script>
<style>
    .container {
        width: 95%;
    }
    body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
</style>