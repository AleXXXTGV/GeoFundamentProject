<template>
    <div>
        <div class="container mb-90px raleway">
            <span class="text-40 text-white mt-60px mb-120px">Наши филиалы в Узбекистане</span>
            <div class="flex flex-col">
                <div class="flex justify-between max-w-580 my-60px">
                    <span class="text-white text-32 block w-230px cursor-pointer" :class="{'border-solid border-b': location}" @click="location = true">г.Самарканд</span>
                    <span class="text-white text-32 block w-230px cursor-pointer" :class="{'border-solid border-b': !location}" @click="location = false">г.Ташкент</span>
                </div>
                
                <div class="relative h-456">
                    <transition name="location">
                        <Location v-show="location">
                                <div class="w-47.5 h-456 itemShadow relative bg-body-color flex justify-center">
                                    <span class="text-white text-32 block w-min absolute top-20px left-20px">г.Самарканд</span>
                                <img src="~/static/imgs/samarkand.svg" alt="city" class="max-w-370">
                            </div>
                            <div class="w-47.5 h-456 itemShadow">
                                <video src="~/static/videos/samarqand.mp4" autoplay muted class="object-cover object-center h-full"></video>
                            </div>
                        </Location>
                    </transition>
                    <transition name="location">
                        <Location v-show="!location">
                            <div class="w-47.5 h-456 itemShadow relative bg-body-color flex justify-center">
                                <span class="text-white text-32 block w-min absolute top-20px left-20px">г.Ташкент</span>
                                <img src="~/static/imgs/tashkent.svg" alt="city" class="max-w-370">
                            </div>
                            <div class="w-47.5 h-456 itemShadow">
                                <video src="~/static/videos/tashkent.mp4" autoplay muted class="object-cover object-center h-full"></video>
                            </div>
                        </Location>
                    </transition>
                </div>

               
            </div>
        </div>
    </div>
</template>
<script>
import Location from './Location.vue';
export default {
    name: 'Locations',
    components: { Location },
    data() {
        return {
            location: {
            type: Boolean,
            default: true
        }
        }
    },
    transitions: 'location'
}
</script>
<style>
    .itemShadow {
        filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.25));
    }
    .location-enter-active, .location-leave-active { 
        transition: opacity .3s; 
        }
    .location-enter, .location-leave-active { opacity: 0; }
</style>