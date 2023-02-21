<template>
  <div class="container">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nesciunt nulla, sequi vitae eveniet eius
    distinctio beatae et numquam nihil ex possimus vero quasi labore illo sapiente ducimus delectus dicta.
  </div>
</template>

<script lang="ts" setup>
import { USER_TYPE_PERSONAL } from '~~/utils/constant/userStore'

const common = useCommon()

const userStore = useUserStore()
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 30px 0;
  .content {
    max-width: 90%;
    width: 800px;
    margin: auto;
  }
  .button_scoll_top {
    position: absolute;
    width: 90px;
    height: 62px;
    right: 0;
    top: 0;
    background-color: $primary;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 12px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    .text-button-scroll {
      font-size: 10px;
      font-family: Roboto;
      font-style: black;
      margin-top: 0.25rem;
      font-weight: 900;
    }

    .arrow-top {
    }
  }
  .options {
    font-size: 12px;
    @include sp {
      display: flex;
      flex-direction: column;
    }
    span {
      margin-right: 20px;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
  .options-bottom {
    opacity: 0.3;
    height: 1px;
    margin: 30px 0;
  }
  .company {
    font-size: 12px;
    margin-bottom: 12px;
  }
  .content-bottom {
    font-size: 10px;
    @include sp {
      display: flex;
      flex-direction: column;
    }
  }
}
.text-center {
  text-align: center;
}
.my-2 {
  margin: 20px 0;
}
.mr-12px {
  margin-right: 12px;
}
</style>
