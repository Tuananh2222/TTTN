<template>
  <div class="btn">{{ textBtn }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  textBtn: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  transition: all 0.5s;
  justify-content: center;
  font-weight: bold;
  border: none;
  background-color: $primary;
  border-radius: 8px;
  margin: auto;
  cursor: pointer;
  color: white;
  width: 100px;
  height: 40px;
  padding: 0;
  align-items: center;
}
.btn:hover {
  background-color: $primary-color;
  opacity: 0.9;
}
</style>
