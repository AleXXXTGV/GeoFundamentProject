<template>
    <header class="h-90 bg-header-color w-full fixed top-0 z-50 raleway">
        <div class="container min-h-full flex justify-between items-center">
            <div class="logo">
                <nuxt-link :to="localePath('/')"><img src="~/static/imgs/logo.png" alt="logo"></nuxt-link>
            </div>
            <nav class="header__menu w-3/6 flex justify-center">
                <ul class="flex font-bold text-white w-full max-w-md justify-between">
                    <li>
                        <nuxt-link :to="localePath('/')">{{ $t('headerLinks.main') }}</nuxt-link>
                    </li>
                    <li><a href="https://google.com">{{ $t('headerLinks.conference') }}</a></li>
                    <li>
                        <nuxt-link :to="localePath('/about')">{{ $t('headerLinks.about') }}</nuxt-link>
                    </li>
                </ul>
            </nav>

            <div class="languages text-white flex justify-between">
                <nuxt-link :to="switchLocalePath('ru')">{{ $t('languages.ru') }}</nuxt-link>
                <span>|</span>
                <nuxt-link :to="switchLocalePath('en')">{{ $t('languages.en') }}</nuxt-link>
                <span>|</span>
                <nuxt-link :to="switchLocalePath('uz')">{{ $t('languages.uz') }}</nuxt-link>
            </div>
            <div class="toggle md:hidden flex" @click="showMobileMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
</template>
<script>

export default {
    name: 'Navbar',
    methods: {
        showMobileMenu() {
            this.$emit('showMobileMenu')
            let menutoggle = document.querySelector('.toggle');
            menutoggle.onclick = () => {
                menutoggle.classList.toggle('active')
            }
        }
    },
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    }

}
</script>
<style>
.toggle {
    position: relative;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
}

.toggle span {
    position: absolute;
    width: 40px;
    height: 4px;
    background: black;
    border-radius: 4px;
    transition: 0.5s;
}

.toggle span:nth-child(1) {
    transform: translateY(-15px);
    width: 25px;
    left: 15px;
}

.toggle.active span:nth-child(1) {
    width: 40px;
    transform: translateY(0px) rotate(45deg);
    transition-delay: 0.125s;
}

.toggle span:nth-child(2) {
    transform: translateY(15px);
    width: 15px;
    left: 15px;
}

.toggle.active span:nth-child(2) {
    width: 40px;
    transform: translateY(0px) rotate(315deg);
    transition-delay: 0.125s;
}

.toggle.active span:nth-child(3) {
    transform: translateX(60px);
}
</style>