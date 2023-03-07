<template>
  <nav class="primary-nav">
    <div class="container">
      <div class="img-logo">
        <div class="main-logo"></div>
      </div>
      <div class="navbar-wrapper">
        <div class="navbar">
          <div class="main-menu">
            <ul class="menu-list">
              <li
                v-for="(item, index) in state.headerList"
                :key="index"
                class="menu-item"
                @click="emits('nextTo', { router: item.to })"
              >
                <a>{{ item.text }}</a>
              </li>
            </ul>
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
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    .img-logo {
      padding-left: 20px;
      .main-logo {
        background: url('@/public/image/logo.jpg');
        background-position: center;
        height: 80px;
        width: 80px;
        border-radius: 50%;
      }
    }
  }
  .navbar-wrapper {
    width: 100%;
    height: 80px;
    .navbar {
      position: relative;
      display: flex;
      justify-content: flex-end;
      @include sp {
        .navbar ul {
          position: fixed;
          top: 0;
          left: -100px;
          width: 50%;
          flex-direction: column;
          text-align: center;
          transition: 0.8s;
          z-index: 9;
        }
      }
      .main-menu {
        .menu-list {
          display: flex;
          list-style: none;
          .menu-item {
            cursor: pointer;
            padding: 10px 20px;
          }
        }
      }
    }
  }
}
</style>
