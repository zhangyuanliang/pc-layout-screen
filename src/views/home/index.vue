<template>
  <div style="display:flex;justify-content: center">
    <div style="width: 1440px;background: #f9f9f9;">
      <home-page-header :isHome="true" />
      <div class="dynamic">
        <div class="mainContainer checkWrap">
          <div class="flexV">
            <span>追溯码：</span>
            <el-input v-model="input" style="width:360px;margin-right:10px" placeholder="请输入追溯码"></el-input>
            <el-input v-model="input" style="width:120px;margin-right:10px" placeholder="请输入验证码"></el-input>
            <img src="@/assets/img/code-img@2x.png" style="height:40px;margin-right:10px" alt="" />
            <div class="checkBtn">验证</div>
          </div>
        </div>
        <div class="dynamicWrap">
          <img src="@/assets/img/dynamic-img.png" alt="" style="width:581px;height:376px" />
          <div style="width:100%;margin-left:13px">
            <panel-list name="工作动态">
              <ul>
                <li>
                  <div class="flexB">
                    <span class="ellipses">[疫情防控 酒业担当] 湖北白云边集团的志愿者们</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">酒业协会酒精分会呼吁企业紧急申请消毒酒精生产</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">四川绵阳沸泉酒业“沸泉王子酒”检出“甜蜜素”被查</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">赠10吨酒精后，椰岛急购10台热成像仪驰援抗疫</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">最美逆行！一个酒厂的战“疫”15天</span><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">2019人民小酒战略发展交流大会-新时代·新民酒</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">袁仁国离任，李保芳接任茅台集团董事长！</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">定位“红色国酒”、目标20亿+，李士祎正式发布</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">首份国产酒涨价通知曝光：打响涨价第一枪</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">世界500强公司解析新高端白酒消费者，玩转大数据</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">致敬十九大，新的五年征途，专家解读白酒新局面</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
                <li>
                  <div class="flexB">
                    <span class="ellipses">茅台上海再现大面积断货 有网点称明年4月才有货</span
                    ><span class="grey">2013-09-27</span>
                  </div>
                </li>
              </ul>
            </panel-list>
          </div>
          <div class="tips">
            <div style="overflow:hidden;height:100%">
              <div class="container">
                <div v-for="(item, index) in reverseTips" :key="index" class="item">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainContainer flexC">
        <div class="panels">
          <div style="margin-right: 20px">
            <panel-list name="入驻企业">
              <ul>
                <li>
                  <div class="ellipses">陕西省西凤酒股份有限公司</div>
                </li>
                <li>
                  <div class="ellipses">贵州茅台集团股份有限公司</div>
                </li>
                <li>
                  <div class="ellipses">五粮液集团有限公司</div>
                </li>
                <li>
                  <div class="ellipses">四川剑南春集团有限公司</div>
                </li>
                <li>
                  <div class="ellipses">洛阳杜康控股</div>
                </li>
                <li>
                  <div class="ellipses">北京红星股份有限公司</div>
                </li>
                <li>
                  <div class="ellipses">牛栏山酒厂</div>
                </li>
                <li>
                  <div class="ellipses">山西杏花村汾酒厂股份有限公司</div>
                </li>
                <li>
                  <div class="ellipses">四川水井坊股份有限公司</div>
                </li>
              </ul>
            </panel-list>
          </div>
          <div>
            <panel-list name="技术规范">
              <ul>
                <li>
                  <div class="ellipses">
                    <a
                      href="http://jyzs.dev.goago.cn/行业标准《白酒质量安全追溯体系规范》（征求意见稿）.pdf"
                      download="行业标准《白酒质量安全追溯体系规范》（征求意见稿）编制说明.pdf"
                      >行业标准《白酒质量安全追溯体系规范》（征求意见稿）</a
                    >
                  </div>
                </li>
                <li>
                  <div class="ellipses">
                    <a
                      href="http://jyzs.dev.goago.cn/行业标准《白酒质量安全追溯体系规范》（征求意见稿）编制说明.doc"
                      download="行业标准《白酒质量安全追溯体系规范》（征求意见稿）编制说明.doc"
                      >行业标准《白酒质量安全追溯体系规范》（征求意见稿）编制说明</a
                    >
                  </div>
                </li>
                <li>
                  <div class="ellipses">
                    <a
                      href="http://jyzs.dev.goago.cn/行业标准《白酒质量安全追溯体系规范》（征求意见稿）.pdf"
                      download="行业标准《白酒质量安全追溯体系规范》（征求意见稿）.pdf"
                      >行业标准《白酒质量安全追溯体系规范》（征求意见稿）意见反馈表</a
                    >
                  </div>
                </li>
                <li>
                  <div class="ellipses">追溯码备案</div>
                </li>
                <li>
                  <div class="ellipses">流向数据上传</div>
                </li>
                <li>
                  <div class="ellipses">消息通知</div>
                </li>
                <li>
                  <div class="ellipses">接口对接协议</div>
                </li>
                <li>
                  <div class="ellipses">系统使用手册</div>
                </li>
                <li>
                  <div class="ellipses">文档说明</div>
                </li>
              </ul>
            </panel-list>
          </div>
        </div>
      </div>
      <div class="mainContainer flexCV" style="margin: 80px 0 46px 0">
        <div class="line"></div>
        <div class="brand">入驻品牌</div>
        <div class="line"></div>
      </div>
      <div class="mainContainer flexC">
        <div class="brandImgs">
          <img src="@/assets/img/wly.png" style="width:85px;height:94px" alt="" />
          <img src="@/assets/img/moutai.png" style="width:78px;height:71px" alt="" />
          <img src="@/assets/img/yhjc.png" style="width:100px;height:100px" alt="" />
          <img src="@/assets/img/jnc.png" style="width:100px;height:94px" alt="" />
          <img src="@/assets/img/zgcmsb.png" style="width:100px;height:92px" alt="" />
          <img src="@/assets/img/wzlj.png" style="width:75px;height:95px" alt="" />
        </div>
      </div>
      <div>
        <div class="blueBorder"></div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageHeader from '@/components/HomePageHeader'
import PanelList from '@/components/PanelList'
import anime from 'animejs/lib/anime.es.js'

export default {
  components: {
    HomePageHeader,
    PanelList
  },
  computed: {
    reverseTips() {
      return this.tips.reverse()
    }
  },
  data() {
    return {
      input: '',
      tips: [
        { text: '11:32 在平台进行牛栏山百年红(10)的追溯信息验证' },
        { text: '10:22 在平台进行茅台王子酒的追溯信息验证' },
        { text: '10:13 在平台进行仁酒(和天下)的追溯信息验证' },
        { text: '10:02 在平台进行汉酱酒(135BC)的追溯信息验证' },
        { text: '9:54 在平台进行华茅酒(鉴藏)的追溯信息验证' },
        { text: '08:32 在平台进行茅台王子酒(酱色)的追溯信息验证' },
        { text: '06:12 在平台进行汉酱酒(135BC)的追溯信息验证' }
      ]
    }
  },
  mounted() {
    let yTrans = []
    anime.set('.item', {
      translateY: function(el, i, l) {
        yTrans[i] = { y: i * -42 }
        return i * -42
      }
    })
    anime({
      targets: yTrans,
      delay: 2000,
      duration: 10000, //走一周持续时间
      easing: 'linear',
      y: '-=294',
      loop: true,
      update: function(anim) {
        anime.set('.item', {
          translateY: function(el, i, l) {
            console.log(yTrans[i].y % 294)
            return yTrans[i].y % 294
          }
        })
      }
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.dynamic {
  width: 100%;
  height: 538px;
  background: url('../../assets/img/check-bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkWrap {
  display: flex;
  justify-content: center;
  padding: 42px 0 40px 0;
  color: #fff;
}
.checkBtn {
  width: 100px;
  height: 40px;
  background: #ff8e01;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.dynamicWrap {
  width: 1000px;
  height: 400px;
  display: flex;
  background: #fff;
  padding: 12px;
  position: relative;
  .tips {
    position: absolute;
    content: '';
    top: 0px;
    right: -211px;
    width: 202px;
    height: 304px;
    background: url('../../assets/img/tips-bg.png');
    background-size: 100% 100%;
    padding: 49px 14px 0 14px;
    overflow: hidden;
    .container {
      position: relative;
      top: 252px;
    }
    .item {
      position: absolute;
      font-size: 12px;
      font-family: STSongti, STSongti-SC;
      font-weight: SC;
      text-align: left;
      color: #333333;
      line-height: 17px;
      // margin-bottom: 8px;
      // position: relative;
      &::before {
        position: absolute;
        content: '.';
        top: -3px;
        left: -5px;
      }
    }
  }
}
.ellipses {
  // width: 270px;
  width: 80%;
}
.panels {
  width: 1000px;
  height: 285px;
  display: flex;
  justify-content: space-between;
  > div {
    width: 50%;
  }
}
.line {
  width: 450px;
  height: 1px;
  background: #e8e8e8;
}
.brand {
  font-size: 16px;
  font-family: STHeitiSC, STHeitiSC-Medium;
  font-weight: 500;
  color: #1e52c1;
  margin: 0 18px;
}
.brandImgs {
  width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 59px;
}
.blueBorder {
  height: 2px;
  background: #1e52c1;
}
.footer {
  width: 100%;
  height: 124px;
  background: #f1f2f3;
}
</style>
