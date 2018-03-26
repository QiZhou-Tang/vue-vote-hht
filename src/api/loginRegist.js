import axios from 'axios'
let qs = require('qs');
// import qs  from 'qs'
/*
 * 邀请记录
 */
let baseUrl = 'http://47.52.170.220'

export const loginRegist = {
  validateImgUrl: '/platform/user/getValidateCodeImg.m?t=',
  /**
   * 登录
   */
  login(user, pwd, validateCode) {
    const url = '/platform/user/login.m'
    let data  = {
      mobile      : '+86|' + user,
      password    : pwd,
      validateCode: validateCode,
    }
    return axios({
      url             : url,
      method          : 'post',
      headers         : {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data            :qs.stringify(data),
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  /**
   * 注册
   */
  regist(data) {
    const url = '/platform/user/regist.m'
    return axios({
      url             : url,
      method          : 'post',
      headers         : {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data            :qs.stringify(data),
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  /**
   * 获取图片验证码
   */
  getValidateCodeImg() {
    console.log('getValidateCodeImg')
    const url = '/platform/user/getValidateCodeImg.m?t=' + Math.random()
    return axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  /**
   * 获取usessionid
   */
  getUsessionId() {
    console.log('getUsessionId')
    const url = '/platform/user/getUsessionId.m'
    return axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  /**
   * 是否登录
   */
  isLogin() {
    console.log('isLogin')
    const url = '/platform/user/isLogin.m'
    return axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  /**
   *
   *获取用户信息
   */
  serverGetUser() {
    console.log('serverGetUser')
    const url = '/trade/home/serverGetUser.o'
    return axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  /**
   *
   *退出登录
   */
  logout() {
    console.log('logout')
    const url = '/platform/user/serverLogout.m'
    return axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    })
  },
}
