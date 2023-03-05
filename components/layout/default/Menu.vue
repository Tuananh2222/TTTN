<template>
  <nav class="primary-nav">
    <div class="container">
      <div class="row d-flex">
        <div class="col-lg-2 col-md-2">
          <div class="main-logo"></div>
        </div>
        <div class="col-lg-10 col-md-10">
          <div class="navbar">
            <div class="main-menu stellarnav">
              <ul :class="['list-unstyled menu-list ', isShowMenu ? 'menu-list ' : 'responsive']">
                <li
                  v-for="(item, index) in state.headerList"
                  :key="index"
                  class="menu-item"
                  @click="emits('nextTo', { router: item.to })"
                >
                  <a>{{ item.text }}</a>
                </li>
              </ul>
              <div class="hamburger" @click="handleMenu">
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
</template>

<script setup>
const isShowMenu = ref(true)
const { state, init } = useHeaderStore()
const props = defineProps({})
const handleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const emits = defineEmits(['nextTo'])

onMounted(() => {
  init()
})
console.log(state)
</script>

<style lang="scss" scoped>
.primary-nav {
  .row {
    align-items: center;
  }
}
.main-logo {
  background: url('@/public/image/logo.jpg');
  background-position: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.stellarnav li {
  cursor: pointer;

}
.main-menu .hamburger {
  display: none;
}
@include sp {
  .main-menu .hamburger {
    display: block;
  }
  .main-menu .hamburger .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: $dark-color;
  }
  .navbar ul.menu-list {
    position: fixed;
    top: 0;
    left: -100px;
    width: 50%;
    flex-direction: column;
    text-align: center;
    transition: 0.8s;
    z-index: 9;
  }
  .navbar ul.menu-list li {
    opacity: 0;
  }
  .navbar ul.menu-list.responsive {
    top: 0;
    left: 0;
    padding-top: 100px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 99;
    display: flex;
    padding: 100px 40px;
    width: 50%;
  }
  .navbar ul.menu-list.responsive li.menu-item {
    margin-bottom: 30px;
    text-align: left;
    opacity: 1;
  }
  .navbar ul.menu-list.responsive a {
    font-size: 1.8em;
    color: $light-color;
    border-bottom: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .navbar ul.menu-list.responsive a:after {
    font-size: 25px;
    font-family: 'icomoon';
  }
  .navbar .hamburger {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    transform: translate(-50%, -50%);
    cursor: pointer;
    background: $light-grey-color;
    padding: 10px;
  }
  .main-menu.stellarnav > ul > li > a {
    padding: 10px 30px;
    font-weight: 500;
    font-size: 17px;
    color: #191919;
    text-transform: uppercase;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
