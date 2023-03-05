import { email } from '@vuelidate/validators'
export type VoucherState = {
  username: string
  tel: string
  email: string
  error: string
  hasErrors: {
    username: string
    tel: string
    email: string
  }
}
