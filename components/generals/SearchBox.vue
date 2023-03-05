<template>
  <div class="search-box">
    <div class="search">SEARCH</div>
    <div class="input-search">
      <TextBox v-model="searchKey" placeholder="Tìm kiếm ..." />
      <div class="search-btn" @click="emits('search')">
        <div class="icon-search"><font-awesome-icon icon="fa-search" /></div>
      </div>
      <div class="close-button" @click="handleHideSearch">
        <font-awesome-icon icon="fa-close" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextBox from '../elements/textBox.vue'

const emits = defineEmits(['closeSearch', 'search'])

const searchKey = ref<string>("");

const handleHideSearch = () => {
  emits('closeSearch')
}

</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: $dark-color;
  width: 100%;
  height: 140px;
  overflow: hidden;
  transition: height 0.3s ease-out;
  .search {
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 1.6px;
    color: white;
    margin-bottom: 2px;
    @include sp {
      margin-bottom: 4px;
      font-size: 12px;
    }
  }
  .input-search {
    width: 100%;
    display: flex;
    margin-bottom: 18px;
    justify-content: center;
    @include sp {
      margin-bottom: 16px;
    }
    .search-btn {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      width: 50px;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      z-index: 100;
      margin-left: -50px;
      margin-top: 7px;
      border: 1px solid white;
      @include sp {
        height: 50px !important;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
</style>
