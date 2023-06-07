import { PORT_API } from '@/api/config'
import http from '@/api/http'

// 获取菜单列表
export const getAuthMenuListApi = () =>
  http.get({
    url: PORT_API + `/menu/list`
  })

// 获取按钮权限
export const getAuthButtonListApi = () =>
  http.get({
    url: PORT_API + `/auth/buttons`
  })

// 用户退出登录
export const logoutApi = () =>
  http.post({
    url: PORT_API + `/logout`
  })

/**
 * @name 登录模块
 */
// 用户登录
export const loginApi = (params: any) =>
  http.post({
    url: PORT_API + `/login`,
    params
  })

// 获取用户信息
export const getUserInfoApi = () =>
  http.get({
    url: PORT_API + `/userinfo`
  })
