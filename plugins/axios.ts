import axios, { AxiosHeaders, AxiosInstance } from 'axios'
declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp {
    $axios: AxiosInstance
  }
}
export default defineNuxtPlugin(({ $pinia }) => {
  const runtimeConfig = useRuntimeConfig()

  const { checkRevision } = useGeneralStore($pinia)
  const userStore = useUserStore($pinia)
  const instance = axios.create({
    baseURL: runtimeConfig.apiUrl,
    timeout: Number(runtimeConfig.apiTimeout),
    headers: {
      'Content-Type': 'application/json',
      'X-Tenant-ID': '1',
      Accept: 'application/json, text/plain',
    },
  })

  instance.interceptors.request.use(function (config) {
    if (!config.url?.includes('revision.json')) {
      checkRevision()
    }
    // only set token when logon
    userStore.isLogin && (config.headers as AxiosHeaders).set('Authorization', `Bearer ${userStore.token || ''}`)
    return config
  }, null)
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response) {
        const httpStatusCode = error.response.status

        // api response not auth
        if (httpStatusCode === 401) {
          console.log('actionAuthPopup')
        } else if (![400, 422].includes(httpStatusCode)) {
          // Other api response errors
          console.log('actionSystemErrorPopup')
        }
      } else {
        // abnormal case error: timeout,...
        console.log('actionSystemErrorPopup')
      }
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: instance,
    },
  }
})
