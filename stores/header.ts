import { reactive } from 'vue'
import axios from 'axios'
import { HeaderState } from '~/utils/types/state/header'

export const useHeaderStore = defineStore('header', () => {

  const state = reactive<HeaderState>({
    headerList: [],
  })
  const { handleAPICommon } = useApiCommon()

  const init = async () => {
    await handleAPICommon(initProcess)
  }

  const initProcess = async () => {
    try {
      const [headerList] = await Promise.all([
        axios.get('/header.json'),
      ])
      console.log(headerList)
      state.headerList = headerList
    } catch (e: any) {
      if (e.response && axios.isAxiosError(e) && [400, 422].includes(e.response.status)) {
        //handle 400 and 422 error in here
      } else {
        throw e
      }
    }
  }

  return { state, init }
})

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHeaderStore, import.meta.hot))
}
