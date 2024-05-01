import { setToken } from '@/utils/cookie'
import request from '@/utils/request'

const useUserStore = defineStore('user', () => {

  const state = reactive({
    username: ''
  })

  const login = form => {
    return new Promise((resolve, reject) => {
      let params = {
        userName: form.username,
        // 加密密码
        password: btoa(form.password)
      }
      // 调用后端接口进行登录验证
      request({
        url: '/login',
        method: 'post',
        data: params
      }).then(response => {
        // 假设后端返回的token在response.data.token中
        const token = response.data.token
        // 存储Token，例如存入cookie
        setToken(token)
        console.log('login form:', form)
        // 更新状态放在Promise被resolve后执行
        resolve()
      }).catch(error => {
        // 登录失败，处理错误
        console.error('Login failed:', error)
        // 可以根据需要 reject Promise 或进行其他错误处理
        reject(error)
      }).finally(() => {
        // 确保更新状态的操作在Promise被resolve或reject后执行
        state.username = form.username
      })
    })
  }

  return {
    ...toRefs(state),
    login
  }

})

export default useUserStore