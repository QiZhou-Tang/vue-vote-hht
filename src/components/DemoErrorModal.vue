<template>
  <modal name="error-modal" :classes="['v--modal', 'error-modal', hasBugs && 'has-bugs']" :pivot-y="0.2" :width="600" :height="400" @before-open="beforeOpen">
    <div class="error-modal-content">
      <div class="bugs-label text-light">票数: {{bugCount}}</div>

      <!-- <input type="text"> -->
      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">请输入数量</span>
        </div>
        <input v-model="bugCount" onkeyup="value=value.replace(/[^1234567890-]+/g,'')" maxlength="6" type="text" class="form-control done" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
      </div>
      <button @click="createBug">增加票数</button>
      <button @click="fixBug">减少票数</button>

      <div style="padding: 50px;">
        <button @click.once="dj">提交</button>
        <!-- You will be able to close the window only if you have fixed all the bugs :) -->
        <!-- <i>{{msg}}</i> -->
      </div>
    </div>
  </modal>
</template>
<script>
import axios from "axios";
import common from "../common/common";
import bus from "../bus";

export default {
  name: "DemoErrorModal",
  data() {
    return {
      bugCount: {},
      message: "",
      hasBugs: false,
      PeopleData: {},
      msg: "传值过来吖"
    };
  },
  beforeCreate() {},
  created() {},
  methods: {
    createBug() {
      this.bugCount++;
    },

    fixBug() {
      this.bugCount = Math.max(this.bugCount - 1, 0);
      this.hasBugs = false;
    },

    beforeOpen(event) {
      this.bugCount = Math.round(Math.random() * 1) + 1;
    },
    dj() {
      const url = `${
        common.apihost
      }vote/serverCreateVote.o`;
      const params = {
        voteNumber: this.bugCount,
        candidateCoinId: this.msg
      };
      axios.get(url, {
        params:params
      }).then(
        response => {
          console.log(response);
        },
        err => {}
      );
    }
  },
  mounted() {
    var _this = this;
    //监听A组件中的spot，并接受数据
    bus.$on("spot", function(msg) {
      _this.msg = msg;
    });
  }
};
</script>
<style lang="stylus">
.error-modal {
  transition: box-shadow 1s;

  &.has-bugs {
    box-shadow: 0 24px 80px -2px rgba(255, 0, 0, 0.6) !important;
  }
}

.error-modal-content {
  padding: 10px;
  text-align: center;
  background-color: #262a42;

  .bugs-label {
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 300;
    letter-spacing: 2px;
    padding: 40px;
  }

  .input-group {
    margin-bottom: 30px;
  }

  button {
    width: 180px;
  }

  sub {
    color: #EC625F;
    transition: opacity 0.25s;
  }
}
</style>
