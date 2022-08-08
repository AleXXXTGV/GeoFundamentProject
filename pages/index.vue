<template>
  <div>
    <HeroMain />

    <Occupation />
    
    <Management />

    <Results />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transition: 'home'
}
</script>
<style>
  .companyTitle {
    word-spacing: -.5ch !important;
  }
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>