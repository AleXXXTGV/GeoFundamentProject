<template lang="">
    <footer class="py-53px bg-footer-color w-full text-white">
        <div class="container flex flex-col-reverse md:flex-row justify-between">
            <div class="map w-full md:w-1/2 mt-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.3794930518904!2d66.94129797499326!3d39.63263021146373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1ed1bc071c3f%3A0xb116f048376cb623!2sSamarqand%20Davlat%20Arxitektura-qurilish%20Instituti!5e0!3m2!1sru!2s!4v1659639435155!5m2!1sru!2s" width="100%" height="322px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
            </div>
            <div class="contacts w-full md:w-1/3 flex flex-col justify-between">
                <div class="text-center"><span class="font-bold text-2xl md:text-5xl raleway">Наши контакты</span></div>
                <div class="flex flex-col md:flex-row justify-between w-full mt-5 md:mt-0">
                    <div class="justify-between flex flex-col text-center md:text-left">
                        <a href="tel:+99897 923 33 73" class="block font-bold mb-5 md:mb-0">+99897 923 33 73</a>
                        <a href="tel:+99897 927 37 33" class="block font-bold mb-5 md:mb-0">+99897 927 37 33</a>
                        <a href="tel:+99897 399 89 89" class="block font-bold mb-5 md:mb-0">+99897 399 89 89</a>
                    </div>
                    <div class="flex w-full content-center md:max-w-110 flex-wrap justify-between h-90 md:content-between mb-5 md:mb-0">
                        <div>
                            <a href="#">
                                <img src="~/static/img/facebook.svg" alt="facebook">
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="~/static/img/telegram.svg" alt="telegram"></a>
                            </div>
                        <div>
                            <a href="#">
                                <img src="~/static/img/instagram.svg" alt="instagram"></a>
                            </div>
                        <div>
                            <a href="#">
                                <img src="~/static/img/youtube.svg" alt="youtube"></a>
                            </div>
                    </div>
                </div>
                <div class="flex flex-wrap content-end h-min font-bold justify-between items-end">
                    <a href="#" class="raleway h-min block">uzssmge@gmail.com
                    </a>
                    <a href="#" class="block">
                        <img src="~/static/img/mail.svg" alt="mail">
                    </a>
                </div>
            </div>
            </div>
        </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="">
    
</style>