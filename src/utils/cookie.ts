import Cookies from 'js-cookie'

const TokenKey = ['app-global', 'app-tabs', 'app-user']

// 删除token
export const removeToken = () =>
  TokenKey.map((key: string) => Cookies.remove(key))
