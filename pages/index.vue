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
  margin-top: -70px;

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
  .banner-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    bottom: 63px;
    z-index: 10;
    @include sp {
      bottom: 25px;
    }
    .box-banner-text {
      display: flex;
      flex-direction: column;
      width: 90%;
      @include sp {
        width: 94.6%;
      }
      :deep(.headingLevel1) {
        color: white;
      }
    }

    .banner-text {
      font-size: 21px;
      color: white;
      font-weight: 900;
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
      @include sp {
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
        font-size: 16px;
      }
    }
    .banner-text:nth-child(3) {
      font-size: 48px;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
      @include sp {
        font-size: 35px;
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
      }
    }

    .text-link {
      display: flex;
      margin-top: 15px;
      margin-left: 12px;
      cursor: pointer;
      span {
        font-size: 14px;
        font-weight: 700;
        color: white;
        @include sp {
          font-size: 12px;
        }
      }
      .icon-arrow {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 6px;
      }
    }
    .btn-wrapper-banner {
      width: 220px;
    }
  }
}
</style>
