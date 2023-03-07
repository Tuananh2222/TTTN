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
            <img class="img-slide" src="~/public/image/no-image.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/no-image.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="img-banner">
            <img class="img-slide" src="~/public/image/no-image.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="banner-item">
      <div class="box-banner-text">
        <h1 class="banner-text">Cosmetic NyLy</h1>
        <div class="btn-wrapper-banner">
          <CButton text-btn="Get started" @click="navigateTo('/login')">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </CButton>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="hero"></div> -->
  <div class="services">
    <div class="services__container">
      <div>
        <p class="topline animate-services">Features</p>
        <h1 class="services__heading animate-services">What we offer</h1>
        <div class="services__features">
          <p class="services__features animate-services"><i class="fas fa-check-circle"></i>Group Fitness Classes</p>
          <p class="services__features animate-services">
            <i class="fas fa-check-circle"></i>Personal Trainer Sessions
          </p>
          <p class="services__features animate-services"><i class="fas fa-check-circle"></i>Indoor Pool</p>
          <p class="services__features animate-services"><i class="fas fa-check-circle"></i>Steam Room And Sauna</p>
          <p class="services__features animate-services"><i class="fas fa-check-circle"></i>Basketball Court</p>
          <p class="services__features animate-services"><i class="fas fa-check-circle"></i>Open 24/7</p>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="gym2"
          class="services__img"
        />
      </div>
    </div>
  </div>

  <!-- Membership Section -->
  <div class="memberships">
    <h1>View Our Plans</h1>
    <p class="membership__desc">Get Started today and get 50% off on this month membership</p>
    <div class="membership__wrapper">
      <div class="membership__card animate-membership">
        <div class="membership__title">
          <i class="fas fa-dumbbell card-icon"></i>
          <h3>Standard</h3>
        </div>
        <div class="membership__perks">
          <p>Get access to the entire gym</p>
          <p>Group Fitness Classes</p>
          <p>Private Trainer</p>
          <p>4500rs per month</p>
        </div>
        <a href="/" class="button">Sign Up</a>
      </div>
      <div class="membership__card animate-membership">
        <div class="membership__title">
          <i class="fas fa-bicycle card-icon"></i>
          <h3>Silver</h3>
        </div>
        <div class="membership__perks">
          <p>Get access to the entire gym</p>
          <p>Group Fitness Classes</p>
          <p>2500rs per month</p>
        </div>
        <a href="/" class="button">Sign Up</a>
      </div>
      <div class="membership__card animate-membership">
        <div class="membership__title">
          <i class="fas fa-dumbbell card-icon"></i>
          <h3>Gold</h3>
        </div>
        <div class="membership__perks">
          <p>Get access to the entire gym</p>
          <p>Group Fitness Classes</p>
          <p>Private Trainer</p>
          <p>4500rs per month</p>
        </div>
        <a href="/" class="button">Sign Up</a>
      </div>
    </div>
  </div>

  <!-- Team Section -->
  <div class="team">
    <div class="team__wrapper">
      <div class="team__text">
        <p class="topline">Private Coaching</p>
        <h1>Meet Out Trainers</h1>
        <p class="team__desc">
          All our personal trainers have over 20 years experience combined. Each trainer specialization and bobility
          workouts.
        </p>
      </div>
      <div class="team__text">
        <p class="topline">Free Trial</p>
        <h1>7 Day Trial</h1>
        <p class="team__desc">
          You can work with our each trainer free in order to see our facility.All our personal trainers have over 20
          years experience combined. Each trainer specialization and bobility workouts.
        </p>
      </div>
      <div class="team__card animate-membership">
        <p>Fitness</p>
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="fitness1"
          class="team__img"
        />
      </div>
      <div class="team__card animate-membership">
        <p>Fitness</p>
        <img
          src="https://media.istockphoto.com/photos/exercise-with-kettle-bells-picture-id504220360?k=6&m=504220360&s=612x612&w=0&h=pABMKQ1o-Y8BGDJMFvXrSpywjkEar4pWHwY-8vFCsNE="
          alt="fitness2"
          class="team__img"
        />
      </div>
      <div class="team__card animate-membership">
        <p>Fitness</p>
        <img
          src="https://media.istockphoto.com/photos/exercise-with-kettle-bells-picture-id504220360?k=6&m=504220360&s=612x612&w=0&h=pABMKQ1o-Y8BGDJMFvXrSpywjkEar4pWHwY-8vFCsNE="
          alt="fitness3"
          class="team__img"
        />
      </div>
      <div class="team__card animate-membership">
        <p>Fitness</p>
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80="
          alt="fitness4"
          class="team__img"
        />
      </div>
    </div>
  </div>
  <!-- Email Section -->
  <div class="email">
    <div class="email__content animate-services">
      <h1>Get access for members only perks</h1>
      <p>sign up for our newslater and get 10% discount on out first trainning sessions</p>
      <form action="/">
        <div class="form__wrap">
          <label for="email">
            <input type="email" placeholder="Enter Your Email" id="email" />
          </label>
          <a href="/"> <button class="button" type="submit">Sign Up</button></a>
        </div>
      </form>
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
.banner-wrapper {
  position: relative;
  width: 100%;
  height: 670px;
  top: 0;

  @include sp {
    margin-top: -79px;
    width: 100%;
  }

  .banner-slide {
    width: 100%;
    padding: 0.5rem calc((100vw - 1200px) / 2);
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

.hero {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  height: 100vh;
  background-position: center;
  background-size: cover;
}

.hero__content {
  color: white;
  padding: 3rem 1rem;
  line-height: 1;
}

.hero__content h1 {
  font-size: clamp(3rem, 8vw, 7rem);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.hero__content p {
  font-size: clamp(1rem, 4vw, 2.5rem);
  margin-bottom: 3rem;
}

.button {
  padding: 1rem 3rem;
  border: none;
  background: #02d8ff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease;
  text-decoration: none;
  border-radius: 4px;
}

.button:hover {
  background: black;
}

/*Services Section */

.services {
  padding: 0 calc((100vw - 1200px) / 2);
}

.services__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  @include sp {
    grid-template-columns: 1fr;
  }
}

.services__img {
  width: 100%;
  height: 100%;
}

.topline {
  color: #02d8ff;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.services__heading {
  margin-bottom: 1rem;
  font-size: clamp(2rem, 6vw, 3rem);
}

.services__features {
  list-style: none;
}

.services__features {
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 5vw, 1.2rem);
}

.fa-check-circle {
  margin-right: 0.5rem;
  color: #02d8ff;
}

/* Membership Section */
.memberships {
  background: black;
  color: white;
  padding: 6rem calc((100vw - 1100px) / 2);
  text-align: center;
}

.memberships h1 {
  margin-bottom: 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
  padding: 0 1rem;
}

.membership__desc {
  margin-bottom: 3rem;
  font-size: clamp(1rem, 3vw, 1.5rem);
  padding: 1rem;
}

.membership__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  @include sp {
    flex-direction: column;
    align-items: center;
  }
}

.membership__card {
  padding: 2rem;
  min-height: 450px;
  width: 325px;
  background: white;
  color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include sp {
    width: 90%;
    margin-bottom: 2rem;
  }
}

.membership__perks {
  min-height: 135px;
}

.membership__card p {
  margin-bottom: 1rem;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #02d8ff;
}

.membership__card h3 {
  font-size: clamp(1rem, 5vw, 2rem);
  margin-bottom: 2rem;
}

/* Team Sectiom */

.team {
  padding: 8rem calc((100vw - 1100px) / 2);
}
.team__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto, 350px);
  @include sp {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
.team__card {
  margin: 1rem;
  border-radius: 10px;
  position: relative;
}

.team__text {
  padding: 1rem;
}

.team__text h1 {
  margin-bottom: 1rem;
  font-size: 3rem;
}

.team__desc {
  font-size: clamp(1rem, 3vw, 1.3rem);
  line-height: 1.4;
}

.team__card p {
  position: absolute;
  bottom: 30px;
  color: white;
  left: 25px;
  font-size: 3rem;
}

.team__img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.team__text:nth-child(1) {
  grid-row: 1 /3;
  grid-column: 2 /3;
  @include sp {
    grid-row: 1 /2;
    grid-column: 1 /2;
  }
}

.team__text:nth-child(2) {
  grid-row: 5 /6;
  grid-column: 1 /2;
  @include sp {
    grid-row: 6 /7;
    grid-column: 1 /2;
  }
}

.team__card:nth-child(3) {
  grid-row: 1 /3;
  grid-column: 1 /2;
  @include sp {
    grid-row: 3 /4;
    grid-column: 1 /2;
  }
}

.team__card:nth-child(4) {
  grid-row: 2 /4;
  grid-column: 2 /3;
  @include sp {
    grid-row: 4 /5;
    grid-column: 1 /2;
  }
}

.team__card:nth-child(5) {
  grid-row: 3 /5;
  grid-column: 1 /2;
  @include sp {
    grid-row: 5 /6;
    grid-column: 1 /2;
  }
}

.team__card:nth-child(6) {
  grid-row: 4 /6;
  grid-column: 2 /3;
  @include sp {
    grid-row: 2 /3;
    grid-column: 1 /2;
  }
}

/* Form Section */
.email {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 35%, rgba(0, 0, 0, 0.1) 100%);
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.email__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.email__content h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: clamp(1rem, 5vw, 3rem);
  padding: 0 1rem;
}

.email__content p {
  text-align: center;
  margin-bottom: 2rem;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  padding: 0 1rem;
}

form {
  z-index: 10;
}

.form__wrap {
  @include sp {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
  button {
    @include sp {
      width: 100%;
      min-width: 350px;
    }
  }
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 50px;
    border: none;
    margin-right: 1rem;
    border-radius: 4px;
    @include sp {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
}
</style>
