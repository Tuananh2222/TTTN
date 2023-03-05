<template>
  <SearchBox v-if="isShowSearch" @close-search="handleHideSearch" />
  <div id="header-wrap" border-bottom>
    <nav class="secondary-nav">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="header-contact">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <p>Hotline: <b>0971935724</b></p>
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
                    <font-awesome-icon icon="fa-user" />
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <font-awesome-icon icon="fa-clipboard" />
                  </a>
                </li>
                <li>
                  <a href="#like">
                    <font-awesome-icon icon="fa-heart" />
                  </a>
                </li>
                <li class="user-items" @click="handleShowSearch">
                  <font-awesome-icon icon="fa-search" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Menu 
    @next-to="nextPageUser"
    />
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

const nextPageUser = ({ router}: { router: string }) => {
  navigateTo(router)
}
</script>

<style lang="scss" scoped>
#header-wrap{
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
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
.row {
  display: flex;
  align-items: center;
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
.user-items {
  cursor: pointer;
}
</style>
