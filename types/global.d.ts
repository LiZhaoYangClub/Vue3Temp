export interface MenuOptions {
  path: string
  name: string
  component?: string | (() => Promise<unknown>)
  redirect?: string
  meta: MetaProps
  children?: MenuOptions[]
}
export interface MetaProps {
  icon: string
  title: string
  activeMenu?: string
  isLink?: string
  isHide: boolean
  isFull: boolean
  isAffix: boolean
  isKeepAlive: boolean
}

export interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare global {
  module 'lodash.omit'
  module 'lodash.clonedeep'

  namespace Menu {
    interface MenuOptions {
      path: string
      name: string
      component?: string | (() => Promise<unknown>)
      redirect?: string
      meta: MetaProps
      children?: MenuOptions[]
    }
    interface MetaProps {
      icon: string
      title: string
      activeMenu?: string
      isLink?: string
      isHide: boolean
      isFull: boolean
      isAffix: boolean
      isKeepAlive: boolean
    }
  }

  interface Window {
    UrlPrefix?: string
    ApiUrl?: string
  }

  interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>
  }

  type Recordable<T = any> = Record<string, T>

  type TargetContext = '_self' | '_blank'

  type ObjToKeyValArray<T> = {
    [K in keyof T]: [K, T[K]]
  }[keyof T]

  interface Fn<T = any, R = T> {
    (...arg: T[]): R
  }

  interface ViteEnv {
    VITE_GLOB_APP_TITLE: string
    VITE_PROXY: [string, string][]
  }
}
