<template>
  <div class="container-wrapper">
    <div class="img-banner"></div>
    <div class="box-container">
      <div class="header-container">Đăng ký nhận Voucher khuyến mãi</div>
      <TextBox
        v-model.trim="state.username"
        :err-msg="state.hasErrors.username"
        placeholder="Họ tên *"
        :required="false"
        @focusOut="voucherStore.checkField('username')"
      />
      <TextBox
        v-model.trim="state.tel"
        :err-msg="state.hasErrors.tel"
        placeholder="Số điện thoai *"
        :required="false"
        @focusOut="voucherStore.checkField('tel')"
      />
      <TextBox
        v-model.trim="state.email"
        :err-msg="state.hasErrors.email"
        placeholder="Email *"
        :required="false"
        @focusOut="voucherStore.checkField('email')"
      />
      <div class="text-container">* Thông tin bắt buộc</div>
      <div :class="isValidForm ? 'btn-primary' : 'btn-disable'">Đăng ký</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextBox from '~~/components/elements/textBox.vue'
import { storeToRefs } from 'pinia'

const voucherStore = useVoucherStore()
const { isValidForm } = storeToRefs(voucherStore)
const { state } = voucherStore
</script>

<style lang="scss" scoped>
.container-wrapper {
  position: relative;
}
.img-banner {
  background: url('~/public/image/deal-page/vector-illustration-super-sale-banner-template-design-big-sales-special-offer-end-season-party-background-cool-136119596.jpg')
    no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
}
.box-container {
  width: 50%;
  padding: 40px 0;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header-container {
    color: #dc3545;
    font-weight: 700;
    margin-bottom: 1.5em;
  }
  .text-container {
    margin-bottom: 1rem;
    padding-top: 10px;
  }
  .btn-primary {
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
  }
  .btn-primary:hover {
    background-color: $primary-color;
    opacity: 0.9;
  }
  .btn-disable {
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    border: none;
    border-radius: 8px;

    background: $disable !important;
    pointer-events: none;
  }
}
</style>
