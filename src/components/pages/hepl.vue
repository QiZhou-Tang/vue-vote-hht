<template id="b" >
  <!-- <section class="article-info"> -->
  <main>
    <div class="article-content d-flex justify-content-center">
      <div class="side-bar">
        <!-- <router-link to="page1"></router-link>
        <router-link to="page2"></router-link> -->
        <nav class="navbar navbar-light">
          <!-- <button to="/home" class="btn btn-outline-success" type="button">HHT上币申请说明</button> -->
          <!-- <button to="/tike" class="btn btn-outline-success" type="button">投票规则说明</button> -->
          <!-- <b-nav-item to="/tike" class="btn btn-sm btn-outline-success" type="button">投票规则说明</b-nav-item> -->
          <router-link to="/help">HHT上币申请说明</router-link>
          <router-link to="/tike">投票规则说明</router-link>
        </nav>
        <!-- <div class="btn-group-vertical">
          HHT上币申请说明
        </div>
        <div class="btn-group-vertical">
          投票规则说明
        </div> -->
      </div>
      <div class="article-body">
        <h1 class="text-light">HHT上币申请说明</h1>
        <p>为了保护投资者的利益，HashToken自主数字资产交易所（HHT）会对资产的合法性和真实性进行评估，只有达到投票上币要求的币种才能参与投票上币。所有上线投票的品种需要满足如下条件，包含但不限于</p>
        <p>&nbsp;</p>
        <p>一．项目无政策风险并且达到专业和合规要求</p>
        <p>二．能真实及时披露项目信息包含项目白皮书，定期发展及进度报告</p>
        <p>三．申请上线HHT交易的币种必须满足平台要求的基本上币资质。该些资质包括但不限于（一）币种团队核心成员须通过反洗钱反恐怖融资等背景调查，（二）币种不得被国家或地区认定为证券，（三）币种团队必须就上币申请提供合格律所出具的合格意见书，（四）交易平台关于上线币种交易的其他实际要求。</p>
        <p>四．申请上币项目如为美国的项目，还需满足平台的以下特殊要求：（一）币种团队须出具保证声明，保证中须包含以下内容：币种团队保证代币不属于美国证券类代币，若因Hadax上线该代币而遭受美国任何监管机构的调查或惩罚，团队成员同意赔偿一切损失并共同承担辩护责任。具体内容要求项目申请方提前咨询对接的相关工作人员来确定。（二）上币申请材料中要求“合格律所”及其出具的“合格意见书”均有特指含义，需项目申请方提前联系相关工作人员确定，以防因意见书不合格通不过平台审核。</p>
        <p>&nbsp;</p>
        <p>数字资产申请投票上币，请通过如下链接在线填写相关信息：</p>
        <p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScKglBVh3zJA1-CxTQ3B5utfpfJIXXECejgCUYlpMO-rA2pkA/viewform"> https://docs.google.com/forms/d/1Cxn6kM3tJIOty0jBU0XbzmY9doxVHi4zVvTB4b8l8Hs/edit#responses</a>
        </p>
        <p>&nbsp;</p>
        <p>下线投票币种说明</p>
        <p>为保护投资者利益，HashToken自主数字资产交易所（HHT）保留投票项目下线或继续支持投票项目在平台上投票的权利，项目方如果触发如下条件，我们会公告通知投票项目下线，包含但不限于：</p>
        <p>&nbsp;</p>
        <ol>
          <li>项目团队解散；</li>
          <li>项目方面临重大法律合规问题；</li>
          <li>由于战略调整和发展需要，项目运营团队主动要求下线；</li>
          <li>严重的技术或安全问题没有及时得到解决；</li>
          <li>由于任何因素变化，致使该项目不再满足平台要求的上币基本资质要求；</li>
          <li>不满足继续投票的其他事项；</li>
        </ol>
        <p>&nbsp;</p>
        <p>HashToken自主数字资产交易所（HHT）保留其他未尽事宜的处理权益。</p>
      </div>
    </div>
  </main>

</template>

<script>
</script>


<style lang="stylus" scoped>
a {
  text-decoraction: none;
}

.router-link {
  text-decoration: none;
}

main {
  width: 100%;
  height: 100%;
  background-color: #262a42;

  .article-content {
    width: 1160px;
    margin: 0 auto;
    padding: 60px;

    .side-bar {
      width: 200px;
      height: 100%;

      // display: block;
      // float: left;
      button {
        width: 150px;
      }
    }

    .article-body {
      width: 765px;

      p, ol, li {
        color: #fff;
        padding: 5px;
      }
    }
  }
}
</style>

