<template>
  <title-panel name="企业详情">
    <company-info/>
    <div class="tableTitle" style="margin-top: 20px">追溯系统信息</div>
    <div class="table">
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">追溯系统名称</div>
          <div class="itemContent">阿里健康追溯系统</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">建设单位联系人</div>
          <div class="itemContent">张宁</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">追溯系统建设单位名称</div>
          <div class="itemContent">阿里健康信息技术（北京）有限公司</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">建设单位联系电话</div>
          <div class="itemContent">010-08782123</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">建设单位统一社会信用代码</div>
          <div class="itemContent">91110302MA007H95X1</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">电子邮箱</div>
          <div class="itemContent">example@gmail.com</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">追溯系统地址</div>
          <div class="itemContent">https://www.cnbg.com.cn/</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">追溯码长度</div>
          <div class="itemContent">20</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">资源码长度</div>
          <div class="itemContent">7</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">单品码长度</div>
          <div class="itemContent">13</div>
        </div>
      </div>

    </div>
  </title-panel>
</template>

<script>
import TitlePanel from '@/components/TitlePanel'
import CompanyInfo from '@/components/CompanyInfo'

export default {
  components: {
    TitlePanel,
    CompanyInfo
  }
}
</script>

<style lang="scss" scoped>
.itemTitle {
  width: 168px!important;
}
</style>
