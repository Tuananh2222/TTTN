import { reactive } from 'vue'
import { email, helpers, required, minLength } from '@vuelidate/validators'
import { passwordValidate } from '~~/utils/constant/validate'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

import _ from 'lodash'

const defaultState = {
  hasErrors: {
    email: '',
    password: '',
    confirmPassword: '',
  },
  email: '',
  password: '',
  confirmPassword: '',
  message: '',
}

export const useSignUpStore = defineStore('signup', () => {
  const { handleAPICommon } = useApiCommon()
  const auth = getAuth()
  const state = reactive({
    ..._.cloneDeep(defaultState),
  })

  const confirmPasswordRegex = (value: string) => {
    return state.password === value
  }

  const ruleList = {
    email: {
      required: helpers.withMessage('Vui lòng nhập email!', required),
      email: helpers.withMessage('Vui lòng nhập đúng định dạng', email),
    },
    password: {
      required: helpers.withMessage('Vui lòng nhập mật khẩu!', required),
      minLength: helpers.withMessage('Vui lòng nhập tối thiểu 6 ký tự', minLength(6)),
      passwordRegex: helpers.withMessage('Vui lòng nhập đúng định dạng', passwordValidate),
    },
    confirmPassword: {
      required: helpers.withMessage('Vui lòng nhập xác nhận mật khẩu!', required),
      confirmPasswordRegex: helpers.withMessage('Vui lòng nhập đúng định dạng', confirmPasswordRegex),
    },
  }

  const { checkField, $v, checkAllField, isValidForm } = useValidate(ruleList, state)

  const resetStateToDefault = () => {
    Object.assign(state, _.cloneDeep(defaultState))
    isValidForm.value = false
  }

  const handleSignUp = async () => {
    await handleAPICommon(handleSignUpProcess)
  }

  const handleSignUpProcess = async () => {
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        sendEmailVerification()
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }

  return { state, handleSignUp, handleSignUpProcess, checkField, $v, checkAllField, isValidForm, resetStateToDefault }
})
export default useSignUpStore

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSignUpStore, import.meta.hot))
}
