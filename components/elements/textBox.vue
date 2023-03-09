<template>
  <div class="container-input">
    <div v-if="props.label" :class="props.required && 'field-label-require'" class="field-label">{{ label }}</div>
    <div class="sub-container">
      <div :class="[borderBackgroundStyle, props.type === 'search' && 'border-search', 'input-border']">
        <input
          v-model="modelValue"
          :disabled="status == 1"
          :type="props.type === 'password' ? 'password' : 'text'"
          :class="[placeholderStyle, 'input-textbox']"
          :placeholder="props.placeholder"
          @focus="onFocus"
          @focusin="onFocusIn"
          @focusout="onFocusOut"
        />
      </div>
    </div>
    <div class="error-container">
      <span v-if="!!props.errMsg" class="error">{{ props.errMsg }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import { useProps } from '~~/composables/useProps'

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  errMsg: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  status: {
    type: Number,
    default: 0,
  },

  type: {
    type: String,
    default: 'normal',
  },

  //new prop
  required: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:modelValue', 'focus', 'focusIn', 'focusOut', 'search'])
const modelValue = useProps<string>(props, 'modelValue', emits)
const placeholderStyle = 'placeholder'

const isFocusing = ref(false)
const onFocus = () => {
  emits('focus')
}
const onFocusIn = () => {
  emits('focusIn')
  isFocusing.value = true
}
const onFocusOut = () => {
  emits('focusOut')
  isFocusing.value = false
}
const borderBackgroundStyle = computed(() => {
  if (props.status) {
    return 'border-bacground'
  }
  if (!!props.errMsg) {
    return 'border-urgen'
  }
  if (!isFocusing.value) {
    return 'border-normal'
  } else {
    return 'border-focus'
  }
})
</script>

<style lang="scss" scoped>
.container-input {
  // margin: auto;
  width: 100%;
  @include pc {
    max-width: 680px;
  }
}

.sub-container {
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 7px;
  justify-content: space-between;
}
.input-border {
  overflow: hidden;
  flex: 1 1 0%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  height: 48px;
  @include sp {
    height: 46px;
  }
}
.border-bacground {
  border-color: $grey-green !important;
  background-color: white !important;
}

.border-urgen {
  border: 2px solid red !important;
  background-color: $other-Bg !important;
}
.border-focus {
  border: 2px solid $dark-color !important;
  background-color: white !important;
}

.border-normal {
  border-color: $grey-green !important;
  background-color: white !important;
  border: 1px solid $pale;
  padding: 1px;
}
.border-search {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}
.input-textbox {
  padding-right: 8px;
  padding-left: 8px;
  background-color: $transparent;
  color: #000000;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  @include sp {
    font-size: 14px;
  }

  &:focus {
    outline-style: none;
  }
}

.error-container {
  height: 20px;
  line-height: 20px;
  word-break: normal;
}
.error {
  color: red;
  font-size: 14px;
  font-weight: bold;
}

::placeholder {
  font-size: 14px;
  color: $pale;
}

input[type='password'] {
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: black;
}
</style>
