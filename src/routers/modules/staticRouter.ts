import { RouteRecordRaw } from 'vue-router'
import { HOME_URL, LOGIN_URL } from '@/config'

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: HOME_URL
  },
  {
    path: LOGIN_URL,
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layouts/index.vue'),
    meta: {
      title: '主页模块'
    },
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页'
        }
      }
    ]
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layouts/index.vue'),
    // component: () => import("@/layouts/indexAsync.vue"),
    redirect: HOME_URL,
    children: []
  }
]

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403.vue'),
    meta: {
      title: '403页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/error/500.vue'),
    meta: {
      title: '500页面'
    }
  },
  // Resolve refresh page, route warnings
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue')
  }
]
