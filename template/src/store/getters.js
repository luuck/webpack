import types from './mutation-types'

export default {
  [types.USER_INFO]: state => {
    return state.user
  },
}

