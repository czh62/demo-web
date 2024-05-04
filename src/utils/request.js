import axios from 'axios'
import { getToken, removeToken } from './cookie'
import errorCode from '../config/error-code'
import { ElMessage } from 'element-plus'
import router from '@/router'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const request = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: "http://localhost",
  // 超时
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  res => {
    // 如果返回二进制数据，则不做处理
    const responseTypes = ['blob', 'arraybuffer']
    if (responseTypes.includes(res.request.responseType)) return res.data

    const code = res.data.code || 200
    const msg = res.data.message || errorCode[code] || errorCode['default']

    if (code !== 200) {
      ElMessage.error(msg)
      if (code === 401) {
        localStorage.removeItem('keep-alive')
        localStorage.removeItem('tags-view')
        localStorage.removeItem('layout')
        localStorage.removeItem('app')
        removeToken()
        location.reload()
        router.replace('/login')
      }
      return Promise.reject(new Error(msg))
    }

    return res.data
  },
  err => Promise.reject(err)
)

export default request
