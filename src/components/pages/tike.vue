<template id="c" >
  <!-- <section class="article-info"> -->
  <main>
    <div class="article-content d-flex justify-content-center">
      <div class="side-bar">
        <!-- <router-link to="page1"></router-link>
        <router-link to="page2"></router-link> -->
        <nav class="navbar navbar-light">
          <form class="form-inline">
            <!-- <button class="btn btn-outline-success" type="button">HHT上币申请说明</button>
            <button class="btn btn-outline-success" type="button">投票规则说明</button>
            <button to="/help" class="btn btn-sm btn-outline-secondary" type="button">投票规则说明</button> -->
            <router-link to="/help">HHT上币申请说明</router-link>
            <router-link to="/tike">投票规则说明</router-link>
          </form>
        </nav>
        <!-- <div class="btn-group-vertical">
          HHT上币申请说明
        </div>
        <div class="btn-group-vertical">
          投票规则说明
        </div> -->
      </div>
      <div class="article-body">
        <h1 class="text-light">投票规则说明</h1>
        <p>&nbsp;</p>
        <p>为满足用户接触更多优质项目的需求，HashToken推出基于HHT平台的投票上币产品。</p>
        <p>通过投票上币页面，用户支付HT对项目进行投票。每轮投票周期结束后，排名靠前的项目将有机会在HHT平台上线交易，但HHT平台仍保留项目上线与下线的最终决定权。</p>
        <p>投票规则：</p>
        <ol>
          <li>仅HashToken全球专业站的实名用户可以参与投票；</li>
          <li>用户须使用HT投票；</li>
          <li>每个用户对每个项目最少可投1票，最多可投100万票，每投1票需支付0.1HT，投票次数和投票币种不限；</li>
          <li>投票支付的HT不予退还。</li>
        </ol>
        <p>投票上币规则：</p>
        <ol>
          <li>最终入选的上线名单，投票人数须超过1000人；</li>
          <li>投票结束后，票数排名前10名的币种，将有机会于5个工作日内根据票数排名依次首批上线HHT交易，开放BTC和ETH交易对；</li>
          <li>如果票数一样，则优先上线投票人数多的币种；</li>
          <li>每期投票结束后，没有进入排名前十的项目，会自动进入下一轮投票，历史投票票数及人数可以累积；</li>
          <li>为确保给用户及项目方一如既往提供稳定、有序以及优质的服务，前期HHT会保持每期上线10个项目，每个工作日上线两个项目的节奏；</li>
          <li>最终胜出的项目，在其投票的人群中，不少于300名新注册的用户。新注册用户指：新加坡标准时间 2018-02-12 12:00之后注册的用户；</li>
          <li>HashToken可能会根据实际情况调整后期投票上币规则。</li>
        </ol>
        <p>&nbsp;HHT交易用户门槛：</p>
        <ol>
          <li>HashToken Pro和HHT合计资产折合超过1BTC；</li>
          <li>第一次交易时间距今超过30天；</li>
          <li>上述两个条件满足1个，则可开通HHT的项目的交易。否则，可以充提，但不能交易。</li>
          <li>一旦开通HHT的交易，则该账户将永久能够交易HHT，不会再次判断资产。</li>
          <li>HHT上的项目交易不对经实名注册认证为美国人的用户开放。</li>
        </ol>
        <p>&nbsp;本活动解释权归HashToken全球专业站所有，如有虚假用户刷票等违规行为，HashToken有权采取相应措施。</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  </main>

  <!-- </section> -->

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

