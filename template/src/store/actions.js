import types from './mutation-types'
import api from '@/api/index'

export const getUserInfo = ({ commit }) => {
  api.getUserInfo().then((info) => {
    commit(types.USER_INFO, { ...info })
  })
}

export const toggleSideNav = ({ commit }) => {
  commit(types.TOGGLE_SIDE_NAV)
}

export default {
  getUserInfo,
  toggleSideNav
}
