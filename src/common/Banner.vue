<template>
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(banner,key) in banners" :key="key">
        <img :src="banner" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        autoplay: 3500,
        loop: true,          
        setWrapperSize :true,
        observeParents:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  props:['banners'],
  methods: {},
  computed: {},
  components: {}
};
</script>
<style scoped>
img{
    width:100%;
}
</style>