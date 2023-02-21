import { reactive } from 'vue'
import axios from 'axios'
import { GeneralState } from '~~/utils/types/state/general'

export const useGeneralStore = defineStore('general', () => {
  const state = reactive<GeneralState>({
    revision: '',
    isLoading: false,
    isShowAuthPopup: false,
    isShowSystemErrorPopup: false,
    originLink: '',

  })

  const getOriginLink = computed(() => {
    return state.originLink
  })

  const updateOriginLink = (link: string) => {
    state.originLink = link
  }

  async function checkRevision() {
    if (!process.client) return
    try {
      const { data } = await axios.request({
        url: '/revision.json',
      })
      if (data && data.revisionId) {
        if (!state.revision) {
          state.revision = data.revisionId
        } else if (state.revision !== data.revisionId) {
          location.reload()
        }
      }
      return data
    } catch (e) {
      console.log(e)
    }
  }

  const actionLoading = (action: boolean) => {
    state.isLoading = action
  }




  return {
    state,
    checkRevision,
    actionLoading,
    updateOriginLink,
    getOriginLink,
  }
})

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
