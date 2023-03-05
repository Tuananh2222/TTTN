import { reactive } from 'vue'
import { email, required, maxLength, helpers } from '@vuelidate/validators'
import axios from 'axios'
import { VoucherState } from '~~/utils/types/state/voucher'

export const useVoucherStore = defineStore('voucher', () => {

  const { $axios } = useNuxtApp()
  const state = reactive<VoucherState>({
    username: '',
    tel: '',
    email: '',
    hasErrors: {
      username: '',
      tel: '',
      email: '',
    },
    error: '',
  })

  const rules = {
    username: {
      required: helpers.withMessage('Vui lòng nhập đầy đủ họ tên', required),
    },
    email: {
      required: helpers.withMessage('Vui lòng nhập email', required),
      email: helpers.withMessage('Vui lòng nhập đúng định dạng của email', email),
    },
    tel: {
      required: helpers.withMessage('Vui lòng nhập số điện thoại', required),
    },
  }
  const { checkField, $v, checkAllField, isValidForm } = useValidate(rules, state)

  const { handleAPICommon } = useApiCommon()


  return { state, checkField, $v, checkAllField, isValidForm }
})
export default useVoucherStore

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVoucherStore, import.meta.hot))
}
