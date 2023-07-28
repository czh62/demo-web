import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const request = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
)

export default request
