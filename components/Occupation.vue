<template>
  <div class="whatAreWeDoing bg-body-color pb-60px pt-30px flex">
    <div class="container flex justify-between content-between flex-wrap">
      <div class="item raleway relative overflow-hidden w-full lg:w-47.5 h-307 rounded bg-black">
        <img src="~/static/imgs/item1.png" alt="itemBg" class="absolute object-cover object-center w-full h-full">
        <div class="container relative h-full">
          <div class="item__text absolute -top-161px">
            <span class="text-24 text-white font-bold">Отдел топграфии укомплетованный современными приборами, может
              выполнять тографические, разбивочные услуги, а также моделирование рельефа
              площадки </span>
          </div>
          <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2">
            <span class="font-bold text-white">Геодезия и топография</span>
          </div>
        </div>
      </div>
      <div class="item raleway relative overflow-hidden w-full lg:w-47.5 h-307 rounded bg-black">
        <img src="~/static/imgs/item2.png" alt="itemBg" class="absolute object-cover object-center w-full h-full">
        <div class="container relative h-full">
          <div class="item__text absolute -top-161px">
            <span class="text-24 text-white font-bold">Мы способны проводить инженерно- геологические,геотехнический а также гидрогеологические исследования  в любых условиях и в любой сложности</span>
          </div>
          <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2">
            <span class="font-bold text-white">Геотехнические исследование</span>
          </div>
        </div>
      </div>
      <div class="item raleway relative overflow-hidden w-full lg:w-47.5 h-307 rounded bg-black">
        <img src="~/static/imgs/item3.png" alt="itemBg" class="absolute object-cover object-center w-full h-full">
        <div class="container relative h-full">
          <div class="item__text absolute -top-161px">
            <span class="text-24 text-white font-bold">Что такое комплексное проектирование?
В комплексное проектирование входят все виды работ по проектированию, начиная от конструкций до ландшафтного дизайна</span>
          </div>
          <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2">
            <span class="font-bold text-white">Комлексное проектирование</span>
          </div>
        </div>
      </div>
      <div class="item raleway relative overflow-hidden w-full lg:w-47.5 h-307 rounded bg-black">
        <img src="~/static/imgs/item4.png" alt="itemBg" class="absolute object-cover object-center w-full h-full">
        <div class="container relative h-full">
          <div class="item__text absolute -top-161px">
            <span class="text-24 text-white font-bold">Наша спец.техника которая в основном специализированна на бурении, может выполнять роботы по бурению скважин, горизонтальное бурение а также свайных фундаментов разного типа</span>
          </div>
          <div class="item__title absolute bottom-14.5 w-full border-solid border-item-line border-b pb-2">
            <span class="font-bold text-white">Буравые работы</span>
          </div>
        </div>
      </div>
      <div class="item raleway overflow-hidden relative h-411 rounded w-full bg-black">
        <img src="~/static/imgs/item5.png" alt="itemBg" class="absolute object-cover object-center w-full h-full">
        <div class="container relative h-full">
          <div class="item__text absolute -top-161px">
            <span class="text-24 text-white font-bold">Комплексный подход, взгляд ко всему с разных ракурсов а также технические возможности, дают нам возможность строить здания и сооружения любой сложности.</span>
          </div>
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
.item {
  margin-top:30px;
}
.item__text {
  transition: 300ms ease;
}

.item__title {
  transition: 300ms ease;
}

.item:hover .item__text {
  top: 10px;
}

.item:hover .item__title {
  opacity: 0;
}
</style>
