<template>
  <SearchBox v-if="isShowSearch" @close-search="handleHideSearch" />
  <div id="header-wrap" border-bottom>
    <nav class="secondary-nav">
      <div class="container">
        <div class="contact-wrapper">
          <div class="header-contact">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <p>Hotline: <b>0971935724</b></p>
          </div>
        </div>
        <div class="menu-user">
          <div class="menu-user-wrapper">
            <div class="icon">
              <font-awesome-icon icon="fa-user" />
            </div>
            <div class="icon">
              <font-awesome-icon icon="fa-clipboard" />
            </div>
            <div class="icon">
              <font-awesome-icon icon="fa-heart" />
            </div>
            <div class="icon" @click="handleShowSearch">
              <font-awesome-icon icon="fa-search" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Menu @next-to="nextPageUser" />
  </div>
</template>

<script lang="ts" setup>
import SearchBox from '~~/components/generals/SearchBox.vue'
import Menu from './Menu.vue'
const { init, state } = useHeaderStore()
onMounted(() => {
  init()
})
const isShowSearch = ref(false)

const handleShowSearch = () => {
  isShowSearch.value = true
}
const handleHideSearch = () => {
  isShowSearch.value = false
}

const nextPageUser = ({ router }: { router: string }) => {
  navigateTo(router)
}
</script>

<style lang="scss" scoped>
#header-wrap {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .secondary-nav {
    max-width: 100%;
    .container {
      display: flex;
      align-items: center;
      .contact-wrapper {
        padding-left: 20px;
        width: 100%;
        .header-contact {
          display: flex;
          align-items: center;
          p {
            margin-left: 5px;
          }
          b {
            font-weight: bold;
          }
        }
      }
      .menu-user {
        width: 50%;
        .menu-user-wrapper {
          display: flex;
          justify-content: flex-end;
          .icon {
            cursor: pointer;
            padding-right: 20px;
          }
        }
      }
    }
  }
}
</style>
