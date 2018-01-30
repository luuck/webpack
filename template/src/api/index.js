import Ajax from './ajax'

export default {
  getUserInfo () { // 获取用户信息
    return Ajax.get('/api/user/userInfo')
  },
}
