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
            <img class="img-slide" src="~/public/image/banner_2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/banner.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/banner_3.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="banner-item">
      <div class="box-banner-text">
        <div class="btn-wrapper-banner">
          <div class="btn-normal-gradient">Shop now</div>
        </div>
      </div>
    </div>
  </div>
  <div id="infoar">
    <div class="indis">
      <div class="box-text">
        <h2>Siêu sale Tri ân khách hàng</h2>
        <h1 class="typewriter"><b class="strong">70%</b> Discount</h1>
      </div>
    </div>
  </div>
  <!-- Collection Section -->
  <div id="collections">
    <h1 class="title-shop">Collections</h1>

    <div class="wrapper">
      <a class="box box1" href="#">
        <h4>Moisturizers</h4>
        <div class="box-overlay"></div>
      </a>
      <a class="box box2" href="#">
        <h4>Eye & Lip Care</h4>
        <div class="box-overlay"></div>
      </a>
      <a class="box box3" href="#">
        <h4>Cleansers & Toners</h4>
        <div class="box-overlay"></div>
      </a>
    </div>
  </div>
  <div class="content-shop">
    <h1 class="title-shop">BEAUTY SHOP</h1>
    <div class="stall-wrapper">
      <CardProduct :img-url="'_nuxt/public/image/product.png'" :name-product="'Overnight Glow Serum'" />
      <CardProduct :img-url="'_nuxt/public/image/product.png'" :name-product="'Overnight Glow Serum'" />
      <CardProduct :img-url="'_nuxt/public/image/product.png'" :name-product="'Overnight Glow Serum'" />
    </div>
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
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
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
    .img-banner {
      box-sizing: border-box;
      @include sp {
        width: 100%;
      }
      .img-slide {
        width: 100%;
        height: 550px;
        background-size: cover;
        object-fit: cover;
      }
    }
  }
  .banner-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    bottom: 163px;
    z-index: 10;
    @include sp {
      bottom: 125px;
    }
    .box-banner-text {
      display: flex;
      flex-direction: column;
      width: 90%;
      @include sp {
        width: 94.6%;
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
    .btn-wrapper-banner {
      display: flex;
      justify-content: flex-start;
      width: 10%;
      :deep(.btn) {
        width: 220px;
      }
    }
  }
}
#infoar {
  display: flex;
  width: 1200px;
  height: 400px;
  margin: auto;
  background: url('~/public/image/banner_4.jpg');
  position: relative;

  .indis {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    .box-text {
      display: flex;
      flex-direction: column;
      width: 600px;
      height: fit-content;
      .typewriter {
        overflow: hidden;
        white-space: nowrap;
        letter-spacing: 0.15em;
        animation: typing 3.5s steps(30, end);
      }
    }
    h2 {
      font-family: 'Shantell Sans', cursive;

      color: #b89379;
      font-weight: 700;
    }
    h1 {
      color: #b89379;
      font-family: 'Shantell Sans', cursive;
      .strong {
        font-family: 'Shantell Sans', cursive;

        font-weight: 900;
        font-size: 70px;
      }
    }
  }
}
.content-shop {
  color: #161616;
  margin: 2rem 0 0 0;
  .title-shop {
    position: relative;
    margin: 0 2.5rem;
  }
  .title-shop::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 72px;
    height: 2px;
    background: #161616;
    margin-left: 0.25rem;
  }
  .stall-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    gap: 2rem;
  }
}
#collections {
  margin: 2rem 0 0 0;
  color: #161616;

  .title-shop {
    position: relative;
    margin: 0 2.5rem;
  }
  .title-shop::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 72px;
    height: 2px;
    background: #161616;
    margin-left: 0.25rem;
  }
  .line {
    width: 3em;
    height: 1px;
    background-color: #000;
    margin-right: 1em;
  }
  .line.line-right {
    order: 2;
    margin-right: 0;
    margin-left: 1em;
  }
  h4 {
    font-size: 0.8em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 0 11em 0;
    .box {
      display: block;
      position: relative;
      padding: 1.3em;
      background-color: $dark-color;
      text-align: center;
      margin-bottom: 2em;
      padding: 3.2em;
    }
    .box-overlay {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: solid 3px #fff;
      transform: translate(8px, 8px);
      transition: all 1s ease;
    }
    .box1 {
      flex: 1 0 47%;
      margin-right: 1em;
    }
    .box2 {
      flex: 1 0 47%;
    }
    .box3 {
      flex: 2 0 100%;
    }
    .box:hover .box-overlay,
    .box:focus .box-overlay {
      transform: translate(0px, 0px) scale(0.92, 0.8);
    }
    a {
      text-decoration: none;
      color: $white;
    }
  }
}
</style>
