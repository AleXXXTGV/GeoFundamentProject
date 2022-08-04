<template>
    <div>
        <header class="h-90 bg-header-color w-full">
        <div class="container min-h-full flex justify-between items-center">
            <div class="logo">
                <img src="~/static/imgs/logo.png" alt="logo">
            </div>
            <nav class="header__menu w-3/6 flex justify-center">
                <ul class="flex font-bold text-white w-full max-w-md justify-between">
                    <li><nuxt-link to="/">Главная</nuxt-link></li>
                    <li><nuxt-link to="/">Конференция</nuxt-link></li>
                    <li><nuxt-link to="/about">О нас</nuxt-link></li>
                </ul>
            </nav>
            <div class="languages text-white">
                <span>РУ</span>
                |
                <span>EN</span>
            </div>
        </div>
    </header>
        <Nuxt />
        <footer class="py-53px pl-40px pr-143px bg-footer-color w-full">
            <div class="container flex justify-between">
                <div class="map w-1/2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.3794930518904!2d66.94129797499326!3d39.63263021146373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1ed1bc071c3f%3A0xb116f048376cb623!2sSamarqand%20Davlat%20Arxitektura-qurilish%20Instituti!5e0!3m2!1sru!2s!4v1659639435155!5m2!1sru!2s" width="100%" height="322px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
            </div>
            <div class="contacts w-1/3 flex flex-col justify-between">
                <div><span>Наши контакты</span></div>
                <div class="flex justify-between w-full">
                    <div class="">
                        <span class="block">+99897 923 33 73</span>
                        <span class="block">+99897 927 37 33</span>
                        <span class="block">+99897 399 89 89</span>
                    </div>
                    <div class="flex max-w-110 flex-wrap">
                        <div><img src="~/static/imgs/facebook.svg" alt=""></div>
                        <div><img src="~/static/imgs/telegram.svg" alt=""></div>
                        <div><img src="~/static/imgs/instagram.svg" alt=""></div>
                        <div><img src="~/static/imgs/youtube.svg" alt=""></div>
                    </div>
                </div>
                <div><span>uzssmge@gmail.com</span><img src="" alt=""></div>
            </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style> 
</style>