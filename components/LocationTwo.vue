<template>
  <div class="location">
    <div
      class="
        location__content
        flex
        md:justify-between
        flex-wrap
        md:flex-nowrap
        justify-center
        py-5
      "
    >
      <div class="w-full mb-4 md:mb-0 md:w-47.5 itemShadow bg-body-color h-456">
        <span class="text-white text-32 block w-min ml-20px mt-20px mb-53px"
          >г.Ташкент</span
        >
        <img
          src="~/static/img/tashkent.svg"
          alt="city"
          class="max-w-268 lg:max-w-370 lg:max-h-240px mx-auto my-0"
        />
      </div>
      <div class="w-full md:w-47.5 itemShadow h-456">
        <video
          src="~/static/video/tashkent.mp4"
          autoplay
          muted
          class="object-cover object-center h-full w-full"
        ></video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Location',
}
</script>
<style lang="">
</style>