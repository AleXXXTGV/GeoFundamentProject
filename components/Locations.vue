<template>
    <div>
        <div class="container mb-90px raleway">
            <span class="text-40 text-white md:mt-60px mb-120px">Наши филиалы в Узбекистане</span>
            <div class="flex flex-col">
                <div class="flex flex-col md:flex-row justify-between max-w-580 my-60px">
  <label class="text-white text-32 block w-230px cursor-pointer" :class="{'border-solid border-b': activeComponent == 'LocationOne'}">
    <input type="radio" v-model="activeComponent" value="LocationOne" class="hidden">г.Самарканд
  </label>
  <label class="text-white text-32 block w-230px cursor-pointer" :class="{'border-solid border-b': activeComponent == 'LocationTwo'}">
    <input type="radio" v-model="activeComponent" value="LocationTwo" class="hidden">г.Ташкент
  </label>
                </div>
                
                <div class="relative">
                    <transition name="location" mode="out-in">
                            <component :is="activeComponent"></component>
                    </transition>
                </div>

               
            </div>
        </div>
    </div>
</template>
<script>
import LocationOne from './LocationOne.vue';
import LocationTwo from './LocationTwo.vue';
export default {
    name: 'Locations',
    components: { LocationOne,  LocationTwo},
    data() {
        return {
        activeComponent: 'LocationOne'
        }
    },
    transitions: 'location'
}
</script>
<style>
    .itemShadow {
        filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.25));
    }
    /*
  Enter and leave animations can use different
  durations and timing functions.
*/
.location-enter-active,
.location-leave-active {
  transition: opacity 0.5s ease;
}

.location-enter-from,
.location-leave-to {
  opacity: 0;
}
</style>