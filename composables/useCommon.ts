import { SSR_DEFAULT_SCREEN_SIZE_HEIGHT, SSR_DEFAULT_SCREEN_SIZE_WIDTH } from '~~/utils/constant'
import { BREAKPOINT, DATE_FORMAT } from '~~/utils/constant'
export default function () {
  const { $dayjs } = useNuxtApp()

  const state = reactive({
    screenSize: {
      width: process.client ? window.innerWidth : SSR_DEFAULT_SCREEN_SIZE_WIDTH,
      height: process.client ? window.innerHeight : SSR_DEFAULT_SCREEN_SIZE_HEIGHT,
    },
  })

  const formatDate = (date: string | number | null, format = DATE_FORMAT) => {
    return date ? $dayjs(date).format(format) : ''
  }

  const isMobileResolution = computed(() => state.screenSize.width < BREAKPOINT)

  const formatNumber = (number: number | string | null) => {
    return number ? new Intl.NumberFormat().format(Number(number)) : 0
  }

  

  const copyToClipBoard = (textToCopy: string) => {
    if (process.client) {
      const tmpTextField = document.createElement('textarea')
      tmpTextField.textContent = textToCopy
      tmpTextField.setAttribute('style', 'position:absolute; right:200%;')
      document.body.appendChild(tmpTextField)
      tmpTextField.select()
      tmpTextField.setSelectionRange(0, 99999) /*For mobile devices*/
      document.execCommand('copy')
      tmpTextField.remove()
    }
  }



  const onWindowResize = () => {
    const { innerWidth, innerHeight } = window
    state.screenSize.width = innerWidth
    state.screenSize.height = innerHeight
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', onWindowResize)
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', onWindowResize)
  })

  

  const scrollTo = (top?: number, behavior?: ScrollBehavior) => {
    if (process.client) {
      window.scrollTo({ top: top || 0, behavior })
    }
  }

  return {
    state,
    isMobileResolution,
    formatNumber,
    formatDate,
    copyToClipBoard,
    scrollTo,
  }
}
