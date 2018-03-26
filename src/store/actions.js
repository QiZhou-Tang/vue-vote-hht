import * as types from './mutation-types'
export const isLogin = function ({commit, state}, isLogin) {
  commit(types.SET_ISLOGIN, isLogin)
}
export const mobile = function ({commit, state}, mobile) {
  commit(types.SET_MOBILE, mobile)
}
export const userName = function ({commit, state}, userName) {
  commit(types.SET_USERNAME, userName)
}
