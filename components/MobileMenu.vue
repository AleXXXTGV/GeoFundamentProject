<template>
  <div>
    <nav class="header__menu bg-header-color flex justify-center z-20 w-full fixed pb-5 flex-col items-center ">
      <ul
        class="
          flex flex-col
          font-bold
          text-white
          w-full
          max-w-md
          text-center
          sm:text-24
        "
      >
        <li class="mt-2"><nuxt-link to="/">Главная</nuxt-link></li>
        <li class="mt-2"><a href="https://google.com">Конференция</a></li>
        <li class="mt-2"><nuxt-link to="/about">О нас</nuxt-link></li>
      </ul>
      <div
            class="
              mt-4
              languages
              text-white
              md:flex
              justify-center
              2xl:text-2xl
              text-center
              text-24
            "
          >
            <nuxt-link :to="switchLocalePath('ru')">{{
              $t('languages.ru')
            }}</nuxt-link>
            <span>|</span>
            <nuxt-link :to="switchLocalePath('en')">{{
              $t('languages.en')
            }}</nuxt-link>
            <span>|</span>
            <nuxt-link :to="switchLocalePath('uz')">{{
              $t('languages.uz')
            }}</nuxt-link>
          </div>
    </nav>
  </div>
</template>
<script>
export default {}
</script>
<style>
</style>