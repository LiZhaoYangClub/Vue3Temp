import sys from './enum'
import { useUserStore } from '@/stores/modules/user'
import { ElMessage, ElMessageBox } from 'element-plus'

export function checkStatus(status: number | string, msg?: string): void {
  if (status === 401) {
    ElMessageBox.alert('用户登录已过期, 确定跳转登录页吗?', '过期提示', {
      confirmButtonText: '重新登录',
      callback: () => {
        const userStore = useUserStore()
        userStore.setToken('')
        location.reload()
      }
    })
  } else {
    let errMessage = ''
    switch (status) {
      case 400:
        errMessage = `${msg}`
        break
      case 403:
        errMessage = sys.api.errMsg403
        break
      // 404请求不存在
      case 404:
        errMessage = sys.api.errMsg404
        break
      case 405:
        errMessage = sys.api.errMsg405
        break
      case 408:
        errMessage = sys.api.errMsg408
        break
      case 500:
        errMessage = sys.api.errMsg500
        break
      case 501:
        errMessage = sys.api.errMsg501
        break
      case 502:
        errMessage = sys.api.errMsg502
        break
      case 503:
        errMessage = sys.api.errMsg503
        break
      case 504:
        errMessage = sys.api.errMsg504
        break
      case 505:
        errMessage = sys.api.errMsg505
        break
      case 'Network Error':
        errMessage = sys.api.networkExceptionMsg
        break
      case 'ECONNABORTED':
        errMessage = sys.api.apiTimeoutMessage
        break
      case 'ABNORMAL':
        errMessage = sys.api.apiRequestFailed
        break
      default:
    }
    errMessage && ElMessage.error(errMessage)
  }
}
