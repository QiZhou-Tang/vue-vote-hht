<template>
  <div id="app">
    <demo-error-modal/>
    <demo-conditional-modal/>
    <!-- <modals-container /> -->
    <v-dialog/>

    <!-- 顶部通栏 -->
    <b-navbar toggleable="md" type="dark" style="background:#181b2a; height:60px;" fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="http://hht.one/#/home"><img src="./assets/hashtokenlogo.png"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="http://hht.one/#/trade">币币交易</b-nav-item>
          <b-nav-item to="/">投票上币</b-nav-item>
          <b-nav-item href="http://hht.one/#/home">HHT PRO</b-nav-item>
          <b-nav-item to="/help">上币申请</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="搜索币种" />
            <b-button size="sm" class="my-2 my-sm-0 btn-outline-warning" type="submit">确定</b-button>
          </b-nav-form> -->

          <b-navbar-nav right>
            <b-nav-item v-if="userName">{{userName}}</b-nav-item>
            <b-nav-item v-else to="/login">登录</b-nav-item>
            <b-nav-item v-if="userName" @click="_logout">登出</b-nav-item>
            <b-nav-item v-else href="http://hht.one/#/regist">注册</b-nav-item>
          </b-navbar-nav>

          <!-- <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>UserName</em>
            </template>
            <b-dropdown-item href="#">个人中心</b-dropdown-item>
            <b-dropdown-item href="#">登出</b-dropdown-item>
          </b-nav-item-dropdown> -->

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <router-view/>

    <!-- foot -->
    <div class="m-footer ">
      <div class="content d-flex align-items-start">
        <dl>
          <dt>
            <a href="#">下载支持</a>
          </dt>
          <dd>
            <a href="#">API文档</a>
          </dd>
          <dd>
            <a href="#">APP下载</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="#">客服服务</a>
          </dt>
          <dd>
            <a href="#">使用教程</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="#">常见问题</a>
          </dt>
          <dd>
            <a href="#">服务协议</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="#">本站公告</a>
          </dt>
        </dl>
        <dl>
          <dt>
            <a href="#">联系我们</a>
          </dt>
        </dl>
      </div>
      <span class="text-light">hht.one 版权所有 @ 2018</span>
    </div>
  </div>
</template>

<script>
import DemoErrorModal from "./components/DemoErrorModal";
import DemoConditionalModal from "./components/ConditionalModal";
import Home from "./components/home";
import { loginRegist } from "./api/config";
import { cookieUitl } from "./common/js/cookieUtil";
import { OK } from "./api/config";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    DemoErrorModal,
    DemoConditionalModal,
    Home
  },
  data() {
    return {
      mobile: '',
      registJump: '',
      userName: '',
      loginJump: ''
    };
  }
  // store: store
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* foot */
.m-footer {
  background-color: #181b2a;
  width: 100%;
  margin: 0 auto;

  .content {
    width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 23px;

    dl {
      dt {
        margin-top: 14px;

        a {
          color: #fff;
          font-size: $font-size-medium;
          text-decoration: none;
        }
      }

      dd {
        margin-top: 14px;

        a {
          font-size: $font-size-small;
          color: $color-footer-subcolor;
          text-decoration: none;
        }
      }
    }
  }
}

span.text-light {
  font-size: $font-size-small;
  position: relative;
  top: -35px;
}
</style>

