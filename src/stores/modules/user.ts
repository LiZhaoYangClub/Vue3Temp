import { defineStore } from 'pinia'
import { UserState } from '@/stores/interface'
import piniaPersistConfig from '@/config/piniaPersist'
import { getUserInfoApi } from '@/api/modules/login'

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    token: '',
    userInfo: {}
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    },
    pullUserInfo() {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await getUserInfoApi()
          resolve(data)
          this.setUserInfo(data)
        } catch (error) {
          reject(error)
        }
      })
    },
    clear() {
      this.token = ''
      this.userInfo = {}
    }
  },
  persist: piniaPersistConfig('app-user')
})
