import { reactive } from 'vue'
import { STORE_DATA_USER } from '~~/utils/constant/user'
import { TOKEN_KEY, USER_TYPE_ENTERPRISE, USER_TYPE_PERSONAL } from '~~/utils/constant/userStore'
import { User } from '~~/utils/types/general'

export const useUserStore = defineStore('user', () => {
  const { vueApp } = useNuxtApp()
  const token = ref<string>('')
  const isLogin = computed(() => !!token.value)
  const state = reactive<any>({
    user: null,
    creditRegistered: false,
    isJrePointMember: false,
    isJrePointFlag: 0,
  })

  const logout = () => {
    localStorage.removeItem(STORE_DATA_USER)
    token.value = ''
    localStorage.removeItem(TOKEN_KEY)
  }
  return { state, token, isLogin, logout }
})
export default useUserStore

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
