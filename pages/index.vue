<template>
  <div class="banner-wrapper">
    <div class="banner-slide">
      <Swiper
        class="container-swipper"
        :slides-per-view="1"
        :modules="[Autoplay, EffectFade]"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :effect="'fade'"
        :fade="true"
        :fade-effect="{
          crossFade: false,
        }"
        :speed="1000"
      >
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/no-image.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/banner.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/no-image.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/banner.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <div class="swiper-wrapper">
    <CardProduct :name-product="'Product 1'" :price="20" />
  </div>
</template>
<script lang="ts" setup>
import CardProduct from '~~/components/generals/cardProduct.vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper'
definePageMeta({
  layout: 'default',
})
</script>

<style lang="scss" scoped>
.banner-wrapper {
  position: relative;
  width: 100%;
  height: fit-content;
  top: 0;

  @include sp {
    margin-top: -79px;
    width: 100%;
  }

  .banner-slide {
    width: 100%;
    .img-banner {
      box-sizing: border-box;
      width: 100%;
      @include sp {
        width: 100%;
      }
      .img-slide {
        width: 100%;
        background-size: cover;
        object-fit: cover;
        background-position: center;
      }
    }
  }
}
</style>
