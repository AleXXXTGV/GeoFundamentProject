<template>
    <div class="results bg-body-color flex flex-col text-white pt-60px">
        <span class="font-bold text-4xl self-center raleway">Наши результаты </span>
        <div ref="observer"
            class="bg-resultsMobile md:bg-results bg-cover bg-no-repeat bg-center h-auto lg:h-800 xl:h-540 mt-60px flex justify-center items-center py-9">
            <div class="container h-full md:p-5 p-7 flex-col xl:flex-row justify-around xl:justify-between flex bg-results-container items-center">
                <div class="w-26.5 flex flex-col text-center">
                    <span class="font-bold flex justify-center text-6xl lg:text-140 xl:text-220 w-313px"><span class="count_number">33</span></span>
                    <span class="block font-bold text-2xl lg:text-3xl xl:text-40 raleway">года на рынке</span>
                </div>
                <div class="flex flex-wrap xl:justify-end h-1/2 xl:h-full content-around justify-center">
                    <div class="flex md:justify-between w-full xl:w-90p h-1/3 justify-center text-center md:text-left flex-col md:flex-row items-center md:items-start">
                        <div class="flex flex-col w-min max-w-268">
                            <span class="flex items-center text-3xl lg:text-3xl font-bold xl:text-40 justify-center md:justify-start mt-3"><span class="count_number">1000</span>+</span>
                            <span class="block lg:text-2xl  mt-5 xl:text-24  raleway md:w-max lg:w-auto">Телекомуникационных компании</span>
                        </div>   
                        <div class="flex flex-col w-min max-w-268">
                            <span class="flex items-center text-3xl lg:text-3xl font-bold xl:text-40 justify-center md:justify-start mt-3"><span class="count_number">500</span>+</span>
                            <span class="block lg:text-2xl mt-5 xl:text-24  raleway">Министерства обороны РУ</span>
                        </div>
                        <div class="flex flex-col max-w-268">
                            <span class="flex items-center text-3xl lg:text-3xl font-bold xl:text-40 justify-center md:justify-start mt-3"><span class="count_number">7000</span>+</span>
                            <span class="block lg:text-2xl mt-5 xl:text-24  raleway">Министерство образования РУ</span>
                        </div>
                    </div>
                    <div class="flex md:justify-between w-full xl:w-90p h-1/3 justify-center text-center md:text-left flex-col md:flex-row items-center md:items-start">
                        <div class="flex flex-col max-w-268">
                            <span class="flex items-center text-3xl lg:text-3xl font-bold xl:text-40 justify-center md:justify-start mt-3"><span class="count_number">20</span>+</span>
                            <span class="block lg:text-2xl mt-5 xl:text-24  raleway">Нефтегазовые, горно-металлкургические
                                компании</span>
                        </div>
                        <div class="flex flex-col max-w-268">
                            <span class="flex items-center text-3xl lg:text-3xl font-bold xl:text-40 justify-center md:justify-start mt-3"><span class="count_number">40</span>+</span>
                            <span class="block lg:text-2xl mt-5 xl:text-24  raleway">Количество <br> Спец. техники</span>
                        </div>
                        <div class="flex flex-col max-w-268">
                            <span class="flex items-center text-3xl lg:text-3xl font-bold xl:text-40 justify-center md:justify-start mt-3"><span class="count_number">10000</span>+</span>
                            <span class="block lg:text-2xl mt-5 xl:text-24  raleway">Инжинеринговые компании областных мэрий РУ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import $ from 'jquery'

export default {
    mounted() {
        let flag = 0
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                if (flag === 0) {
                    flag = 1
                    $('.count_number').each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        },
                            {
                                duration: 6000,
                                easing: 'swing',
                                step: function (now) { $(this).text(Math.ceil(now)); }
                            });
                    });
                }
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
    },
}
</script>
<style>

</style>