<template>
    <div>
        <HeroAbout />
        <AboutText />
        <Locations />
    </div>
</template>
<script>
import AboutText from "../components/AboutText.vue";
import Locations from "../components/Locations.vue";
export default {
    name: "AboutPage",
    components: { AboutText, Locations }
}
</script>
<style lang="">
    
</style>