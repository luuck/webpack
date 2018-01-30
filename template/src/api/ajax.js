import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.timeout = 50000
// axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};

let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let CancelToken = axios.CancelToken
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}

// http request 拦截器
axios.interceptors.request.use(
    config => {
      removePending(config) // 在一个ajax发送前执行一下取消操作
      config.cancelToken = new CancelToken((c) => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method, f: c })
      })
      return config
    },
    error => Promise.reject(error)
)

const STATUS_TIPS_TEXT_MAP = {
  500: '服务器错误，请稍后再试',
  504: '请求超时'
}
// http response 拦截器
axios.interceptors.response.use(
    (response) => {
      let data = response.data
        // 处理cas的异步返回的提示
      if (data.code < 0) {
        data.msg && Message.error(data.msg)
        return Promise.reject({
          code: data.code,
          message: data.msg
        })
      }
      // 401 未登录,跳转到考拉登录页
      if (data.code == 401) {
        let crtUrl = encodeURIComponent(location.href)
        let loginUrl = '//www.kaola.com/login.html'
        location.replace(loginUrl + '?target=' + crtUrl)
        return null
      }
      // 403 没权限,跳转到没权限页面
      if (data.code == 403) {
        location.replace('/w/403')
        return null
      }
      return data.body || {}
    },
    (error) => {
      if (error.response) {
        let status = error.response.status
        if (status == 401) {
          let crtUrl = encodeURIComponent(location.href)
          let loginUrl = '//www.kaola.com/login.html'
          location.replace(loginUrl + '?target=' + crtUrl)
        } else if (status == 403) {
          location.replace('/w/403')
        } else {
          Message.error(STATUS_TIPS_TEXT_MAP[status] || '请求失败')
        }
      }
      return Promise.reject(error)
    }
)

export default axios
