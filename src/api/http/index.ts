import createAxios from '@/utils/http'

export const handlerAbnormalCode = (
  code: string,
  msg?: string,
  result?: any
): void => {
  console.log(code, msg, result)
}

const http = createAxios({
  urlPrefix: window.UrlPrefix || '',
  transform: {
    // 后台状态码拦截 非'000000'
    handlerAbnormalCode
  },
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    // 默认将prefix 添加到url
    joinPrefix: true,
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    isReturnNativeResponse: false,
    // 需要对返回数据进行处理
    isTransformResponse: true,
    // post请求的时候添加参数到url
    joinParamsToUrl: false,
    // 格式化提交参数时间
    formatDate: true,
    // 接口地址
    apiUrl: window.ApiUrl || '',
    //  是否加入时间戳
    joinTime: true,
    // 忽略重复请求
    ignoreCancelToken: true,
    // 是否携带token
    withToken: true
  }
})

export default http
