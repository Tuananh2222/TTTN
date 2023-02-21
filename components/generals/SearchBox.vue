<template>
  <div class="search-box">
    <div class="search-wrap">
      <div class="close-button" @click="handleHideSearch">
        <font-awesome-icon icon="fa-close" />
      </div>
      <form id="search-form" class="text-center" action="" method="">
        <input type="text" class="search-input" placeholder="Search..." />
        <div class="icon-search" @click="emits('search')">
          <font-awesome-icon icon="fa-search" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['update:modelValue', 'closeSearch', 'search'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  inputValue: {
    type: String,
    default: '',
  },
})

const handleHideSearch = () => {
  emits('update:modelValue', false)
  emits('closeSearch')
}
</script>

<style lang="scss" scoped>
.search-box {
  position: relative;
  background: $dark-color;
  width: 100%;
  height: 140px;
  overflow: hidden;
  transition: height 0.3s ease-out;
}
.search-box #search-form {
  margin: 0;
}
.search-box .icon-search {
  margin-left: -60px;
  cursor: pointer;
}
.search-box input.search-input {
  font-size: 1.2em;
  color: $dark-color;
  width: 40%;
  min-width: 420px;
  padding: 30px;
  margin-top: 35px;
  border-radius: 80px;
  border-color: rgb(255 255 255 / 30%);
}
.close-button {
  position: absolute;
  top: 40px;
  right: 60px;
  cursor: pointer;
}
</style>
