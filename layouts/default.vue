<template>
    <div>
        <header class="h-90 bg-rgba(155, 152, 138, 1) w-full">
        <div class="container min-h-full flex justify-between items-center">
            <div class="logo">
                <!-- <img src="./imgs/logo.png" alt="logo"> -->
            </div>
            <nav class="header__menu w-3/6">
                <ul class="flex font-bold text-white w-full justify-between">
                    <li><a href="#hero" class=" scroll-to">Главная</a></li>
                    <li><a href="#whatWeDo" class=" scroll-to">Что делаем</a></li>
                    <li><a href="#conference" class=" scroll-to">Конференция</a></li>
                    <li><a href="#about" class=" scroll-to">О нас</a></li>
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
        <footer>Footer</footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    footer {
        background-color: green;
        height: 90px;
    }
</style>