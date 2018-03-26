<template id="a" >
  <div class="layoutcontent">
    <!-- banner -->
    <div class="jumbotron banner">
      <div class="container banner">
        <h2 class="bannerinfo text-center" style="color:#cfb07b">投票上币，由你做主</h2>
        <p class="banner_times text-light text-center">每投 1 票需支付0.1 HT，每次可以投多票，可以多次投票。投票支付的HT不予退还。<br>以每期投票截止时间为准，票数榜排名靠前(同时参考人气榜排名)的项目可上线HADAX。</p>
      </div>
      <p class="text-center">
        <router-link to="/tike" class="btn btn-outline-warning btn-lg" role="button">投币上币规则</router-link>
      </p>
    </div>

    <!-- body -->
    <!-- 倒计时 -->
    <div class="container infobar" style="background-color:#181b2a;">
      <div class="nextime">
        <span>下期投票开始时间</span>
        :
        <em>{{nextime.beginTime}}</em>
        <br>
        <span class="nextimeInfo">本期投票已结束，投票结果请关注公告</span>
        <router-link to="/help"><img src="../assets/hand.svg">上币申请</router-link>
      </div>
    </div>

    <div class="container ">
      <!-- 币种排名 -->
      <b-card no-body style="background-color:#181b2a;">
        <b-tabs pills card>
          <b-tab title="票数榜" active>

            <div v-for="(item,index) in ByTicket" :key="index.id" class="content">

              <div class="checkinfoticket d-flex justify-content-between">
                <div class="left d-flex align-items-center">
                  <div class="crownbg">
                    <p class="crown text-center">{{index+1}}</p>
                  </div>

                  <div class="right">
                    <h3 class="text-light">{{item.title}}</h3>
                    <span class="text-info">{{item.name}}</span>
                  </div>
                </div>

                <div class="d-flex d-flex align-items-center">
                  <b-btn class="btn btn-outline-info " @click="toggle(index)">查看介绍</b-btn>
                </div>

                <div class="totalTicket d-flex align-items-center">
                  <div class="vote d-flex flex-column">
                    <b class="text-light" style="font-size:24px;">{{item.totalTicket}}
                      <strong class="text-danger">票</strong>
                    </b>
                    <span class="text-secondary">{{item.totalPeople}}
                      <strong class="text-warning">人支持</strong>
                    </span>
                  </div>
                </div>

                <div class="votebutton d-flex align-items-center">
                  <b-btn class="btn-outline-success" @click="conditionalShow">
                    为他拉票
                  </b-btn>

                  <b-btn v-if="truebutton" class="btn green" variant="success" @click="$modal.show('error-modal');spot(item);">
                    开始投票
                  </b-btn>
                  <b-btn v-else disabled variant="secondary">暂停投票</b-btn>
                </div>

              </div>
              <div class="checkinfo">
                <div v-show="index==isShow" class="showinfo ">
                  <b-card>
                    <p class="card-text text-light">{{item.resume}}</p>
                    <a class="outlink" v-bind:href="item.officialUrl">前往官网</a>
                    <a class="outlink" v-bind:href="item.whitebookUrl">查看白皮书</a>
                  </b-card>
                </div>
              </div>

            </div>
          </b-tab>

          <!-- 人数榜 -->
          <b-tab title="人数榜">
            <div v-for="(post,index) in PeopleData" :key="index.id" class="content">

              <div class="checkinfoticket d-flex justify-content-between">
                <div class="left d-flex align-items-center">
                  <div class="crownbg">
                    <p class="crown text-center">{{index+1}}</p>
                  </div>

                  <div class="right">
                    <h3 class="text-light">{{post.title}}</h3>
                    <span class="text-info">{{post.name}}</span>
                  </div>
                  <div>
                  </div>
                </div>

                <div class="d-flex d-flex align-items-center">
                  <b-btn class="btn btn-outline-info " @click="toggle(index)">查看介绍</b-btn>
                </div>

                <div class="totalTicket d-flex align-items-center">
                  <div class="vote d-flex flex-column">
                    <b class="text-light" style="font-size:24px;">{{post.totalTicket}}
                      <strong class="text-danger">票</strong>
                    </b>
                    <span class="text-secondary">{{post.totalPeople}}
                      <strong class="text-warning">人支持</strong>
                    </span>
                  </div>
                </div>

                <div class="votebutton d-flex align-items-center">

                  <b-btn class="btn-outline-success" @click="conditionalShow">
                    为他拉票
                  </b-btn>

                  <b-btn v-if="truebutton" class="btn green" variant="success" @click="$modal.show('error-modal');spot(post)">
                    开始投票
                  </b-btn>
                  <b-btn v-else disabled variant="secondary">暂停投票</b-btn>
                  <!-- <b-btn href="#" :disabled="disabled" variant="secondary">暂停投票</b-btn> -->

                </div>
              </div>
              <div class="checkinfo">
                <div v-show="index==isShow" class="showinfo ">
                  <b-card>
                    <p class="card-text text-light">{{post.resume}}</p>
                    <a class="outlink" href="#">前往官网</a>
                    <a class="outlink" href="#">查看白皮书</a>
                  </b-card>
                </div>
              </div>

            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>

</template>


<script>
import axios from "axios";
import common from "../common/common";
import bus from "../bus";
export default {
  name: "home",

  data() {
    return {
      ByTicket: {},
      PeopleData: {},
      nextime: {},
      isShow: 0,
      truebutton: 1
      // enableVote:0,
    };
  },
  ready() {},
  created() {
    this.getByTicket();
    this.getByPeopleData();
    this.getScheduleList();
  },
  methods: {
    toggle(index) {
      if (this.isShow == index) {
        this.isShow = -1;
      } else {
        this.isShow = index;
      }
    },
    conditionalShow() {
      this.$modal.show("conditional-modal");
    },
    isLogin() {
      console.log(isLogin);
      if ($store.state.isLogin) {
        // 通过vuex state获取当前的token是否存在
        next();
      } else {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath
          } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
      }
    },

    getByPeopleData() {
      // 获取人数排行榜
      const url = `${
        common.apihost
      }vote/getVoteCandidateCoinListOrderByPeople.o`;

      axios.get(url).then(
        response => {
          this.PeopleData = response.data.result;
          console.log(response);
        },
        err => {}
      );
    },

    getScheduleList() {
      //获取下次投票开始时间
      const url = `${common.apihost}vote/getVoteScheduleList.o`;

      axios.get(url).then(
        response => {
          this.nextime = response.data.result[0];
          console.log(response);
        },
        err => {}
      );
    },

    getByTicket() {
      // 获取票数排名
      const url = `${
        common.apihost
      }vote/getVoteCandidateCoinListOrderByTicket.o`;

      axios.get(url).then(
        response => {
          this.ByTicket = response.data.result;
          console.log(response);
        },
        err => {}
      );
    },
    spot(item, post) {
      //监听A组件中的spot，并发送数据
      var msg = item.id;
      console.log(msg);
      bus.$emit("spot", msg);
    }
  }
};
</script>


<style lang="stylus" scoped>
ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}

div.layoutcontent {
  background-color: #262a42;
}

div.jumbotron.banner {
  background: url('../assets/banner.jpg') no-repeat center center;
  height: 650px;
  margin-top: -2px;
  margin-bottom: 0px;
}

.bannerinfo {
  font-size: 50px;
  font-weight: 400;
  margin-top: 200px;
}

div.nextime {
  padding-top: 100px;
  // margin-left: 70px;
  color: pink;
}

.container {
  min-height: 200px;
}

.checkinfoticket {
  height: 130px;

  .left {
    padding-left: 20px;
    width: 150px;
  }

  .crownbg {
    height: 50px;
    width: 50px;
    background: url('../assets/glod.svg');
    background-size: cover;
    display: block;
    margin-left: 20px;
    float: left;

    p.crown {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      color: black;
      font-weight: bold;
    }
  }

  a.outlink {
    padding-left: 30px;
  }

  .right {
    padding-left: 60px;
  }
}

div.card-body {
  background-color: #181b2a;
}

a.outlink {
  padding: 60px;
}
</style>

