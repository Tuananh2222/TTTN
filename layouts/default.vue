<template>
  <CLoading v-if="state.isLoading" />
  <DefaultHeader :is-login="true" />
  <div class="body-container">
    <slot />
  </div>
  <DefaultFooter />
</template>

<script lang="ts" setup>
import { DefaultFooter, DefaultHeader } from '~/components/layout'

const { state } = useGeneralStore()

const handleConfirm = () => {
  navigateTo('/login')
}
</script>
<style lang="scss" scoped>
.body-container {
  min-height: calc(100vh - 252px);
  @include sp {
    min-height: calc(100vh - 350px);
  }
}
</style>
