<template>
  <div class="swiper-slide">
    <div class="product-item">
      <div class="image-holder">
        <img src="~/public/image/no-image.png" alt="Books" class="product-image" />
      </div>
      <div class="box-cotainer">
        <div class="cart-concern">
          <div class="cart-button d-flex justify-content-between align-items-center">
            <button type="button" class="btn-wrap cart-link d-flex align-items-center tooltip">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              <span class="tooltip-text">add to cart</span>
            </button>
            <button type="button" class="view-btn tooltip d-flex">
              <font-awesome-icon icon="fa-solid fa-eye" />
              <span class="tooltip-text">Quick view</span>
            </button>
            <button type="button" class="wishlist-btn">
              <font-awesome-icon icon="heart" class="icon-heart"></font-awesome-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="product-detail">
        <h3 class="product-title">
          <a href="#">{{ nameProduct }}</a>
        </h3>
        <span class="item-price text-primary">{{ price }}$</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    default: false,
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
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-item img.product-image {
  background: $light-color;
  border: 1px solid $grey-color;
  padding: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
}
.product-item {
  .box-cotainer {
    width: 100%;
    display: flex;
    justify-content: center;
    .cart-concern {
      background: $light-color;
      width: 80%;
      position: absolute;
      bottom: 300px;
      z-index: 9;
      transition: 0.5s ease-out;
      padding: 20px 30px;
      opacity: 0;
    }
  }
}
.product-item:hover .cart-concern {
  bottom: 280px;
  opacity: 1;
}
.cart-concern .cart-button button {
  background: none;
  color: $dark-color;
  height: auto;
  padding: 0;
  margin: 0;
}
.product-item .wishlist-btn .icon-heart {
  font-size: 20px;
  padding-left: 25px;
}
.product-item h3.product-title {
  font-size: 1.4em;
  margin: 0;
}

.tooltip .tooltip-text {
  width: 120px;
  background-color: $primary-color;
  color: $light-color;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: -49px;
  left: -49px;
  z-index: 1;
  padding: 10px 0;
  visibility: hidden;
  border-radius: 20px;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
}
.product-item .item-price {
  font-size: 1.8em;
}
</style>
