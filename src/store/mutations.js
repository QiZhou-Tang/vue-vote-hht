import * as types from './mutation-types'
const mutations = {
  [types.SET_ISLOGIN](state, isLogin) {
    state.isLogin = isLogin
  },
  
  [types.SET_MOBILE](state, mobile) {
    state.mobile = mobile
  },
  [types.SET_USERNAME](state, username) {
    state.userName = username
  }
}
export default mutations
