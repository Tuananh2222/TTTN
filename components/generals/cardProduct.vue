<template>
  <article class="card">
    <div class="card-img">
      <img :src="imgUrl" />
    </div>
    <div class="card-name">
      <p>{{ nameProduct }}</p>
    </div>
    <div class="card-precis">
      <div href="" class="card-icon"><font-awesome-icon icon="fa-regular fa-heart" /></div>
      <div class="box-price">
        <span class="card-preci card-precis-before">$98.00</span>
        <span class="card-preci card-precis-now">$64.00</span>
      </div>
      <div href="" class="card-icon"><font-awesome-icon icon="fa-solid fa-basket-shopping" /></div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    default: '',
  },
  nameProduct: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  overflow: hidden;
  background: #e3f8ff;
  .card-img {
    padding: 3rem 0;
    transition: 0.5s;
    img {
      height: auto;
    }
  }
  .card-name {
    position: absolute;
    top: 0;
    width: 3.5rem;
    height: 100%;
    writing-mode: vertical-rl;
    font-weight: bold;
    color: #000;
    transition: 0.5s;
    text-align: center;
    transform: rotate(180deg);
    background: #fff;
    left: -25%;
  }
  .card-precis {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    .card-icon {
      font-size: 1.5rem;
      color: #161616;
    }
    .card-icon:hover {
      color: #ff5151;
    }
    .card-preci {
      display: block;
      text-align: center;
    }
    .card-precis-before {
      font-size: 0.75rem;
      color: #ff5151;
      margin-bottom: 0.25rem;
    }
    .card-precis-now {
      font-size: 1rem;
      font-weight: bold;
    }
    .box-price {
      margin: 0 10px;
    }
  }
}
/* Hover Move Cards */
.card:hover {
  box-shadow: 0 0.5rem 1rem #d1d9e6;
}
.card:hover .card-name {
  left: 0;
}

.card:hover .card-img {
  transform: rotate(20deg);
  margin-left: 1rem;
}
</style>
