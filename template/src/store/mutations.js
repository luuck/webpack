import types from './mutation-types'
export default {
  [types.USER_INFO] (state, user = {}) {
    state.user = user
  },
  [types.TOGGLE_SIDE_NAV] (state) {
    state.noHasSideNav = !state.noHasSideNav
  },
}
