<template>
  <div id="header-wrap">
    <nav class="secondary-nav border-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="header-contact">
              <p>Call me! <strong>0971 935 724</strong></p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="shipping-purchase text-center">
              <p>Free shipping on a purchase value of $200</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="user-items">
              <ul class="d-flex justify-content-end list-unstyled">
                <li>
                  <a href="#">
                    <font-awesome-icon icon="fa-user"/>
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <font-awesome-icon icon="fa-clipboard"/>
                  </a>
                </li>
                <li>
                  <a href="#like">
                    <font-awesome-icon icon="fa-heart"/>
                  </a>
                </li>
                <li class="user-items">
                  <font-awesome-icon icon="fa-search"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="primary-nav padding-small">
      <div class="container">
        <div class="row d-flex">
          <div class="col-lg-2 col-md-2">
            <div class="main-logo">
              <a href="index.html">
                <img src="images/main-logo.png" alt="logo" />
              </a>
            </div>
          </div>
          <div class="col-lg-10 col-md-10">
            <div class="navbar">
              <div class="main-menu stellarnav">
                <ul class="menu-list list-unstyled">
                  <li class="menu-item active">
                    <a href="#women" data-effect="Women">Women</a>
                  </li>
                  <li class="menu-item">
                    <a href="#men" class="item-anchor" data-effect="Men">Men</a>
                  </li>
                  <li class="menu-item">
                    <a href="#kids" class="item-anchor" data-effect="Kids">Kids</a>
                  </li>
                  <li class="menu-item">
                    <a href="#accessories" class="item-anchor" data-effect="Accessories">Accessories</a>
                  </li>
                  <li class="menu-item">
                    <a href="#collections" class="item-anchor" data-effect="Collections">Collections</a>
                  </li>
                  <li class="menu-item">
                    <a href="#brand" class="item-anchor" data-effect="Brand">Brand</a>
                  </li>
                  <li class="menu-item">
                    <a href="#sale" class="item-anchor" data-effect="Sale">Sale</a>
                  </li>
                  <li class="menu-item">
                    <a href="#blog" class="item-anchor" data-effect="Blog">Blog</a>
                  </li>
                </ul>
                <div class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.secondary-nav,
.secondary-nav p {
  line-height: 2.5em;
}
.secondary-nav li {
  padding-right: 10px;
}
.secondary-nav li:last-child {
  padding-right: 0;
}
.secondary-nav a {
  color: $accent-color;
}
.secondary-nav ul,
.secondary-nav p {
  margin-bottom: 0;
}
</style>
