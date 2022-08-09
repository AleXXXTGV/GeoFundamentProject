<template>
    <div class="whatAreWeDoing bg-body-color py-60px h-1200 flex">
      <div class="container flex justify-between content-between flex-wrap">
        <div class="item relative overflow-hidden w-47.5 h-307 rounded bg-black">
          <img src="~/static/imgs/item1.png" alt="itemBg" class="absolute object-cover object-center w-full">
          <div class="container relative h-full">
            <transition name="itemText">
            <div class="item__text absolute -top-161px">
              <span class="text-24 text-white font-bold">Отдел топграфии укомплетованный современными приборами, может выполнять тографические, разбивочные услуги, а также моделирование рельефа 
площадки  </span>
            </div>
            </transition>
            <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2 hidden">
              <span class="font-bold text-white">Геодезия и топография</span>
            </div>
          </div>
        </div>
        <div class="item overflow-hidden bg-item2 bg-cover bg-no-repeat bg-center w-47.5 h-307 rounded bg-black">
          <div class="container relative h-full">
            <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2">
              <span class="font-bold text-white">Геотехнические исследование</span>
            </div>
          </div>
        </div>
        <div class="item overflow-hidden bg-item3 bg-cover bg-no-repeat bg-center w-47.5 h-307 rounded bg-black">
          <div class="container relative h-full">
            <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2">
              <span class="font-bold text-white">Комлексное проектирование</span>
            </div>
          </div>
        </div>
        <div class="item overflow-hidden bg-item4 bg-cover bg-no-repeat bg-center w-47.5 h-307 rounded bg-black">
          <div class="container relative h-full">
            <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2">
              <span class="font-bold text-white">Буравые работы</span>
            </div>
          </div>
        </div>
        <div class="item overflow-hidden bg-item5 bg-cover bg-no-repeat bg-center h-411 rounded w-full bg-black">
          <div class="container relative h-full">
            <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-4">
              <span class="font-bold text-white">Строительство зданий и сооружений</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    transitions: 'itemText'
}
</script>
<style>
    .itemText-enter-active, .itemText-leave-active { 
        transition: 300ms ease;
        top: 53px;
        }
    .itemText-enter, .itemText-leave-active { top: -161px; }
</style>
