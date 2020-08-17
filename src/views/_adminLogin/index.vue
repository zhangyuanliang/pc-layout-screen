<template>
  <div class="flexAdapt">
    <page-header :showMenu="false" />
    <div class="loginWrap flexG">
      <div class="loginContent">
        <div class="title">管理用户登录</div>
        <div class="tips">请插入Ukey进行身份验证</div>
        <div class="generalBtn">Ukey使用说明</div>
        <div class="generalBtn">Ukey驱动下载</div>
        <div>
          <el-input v-model="password" prefix-icon="el-icon-unlock" placeholder="请输入密码"></el-input>
        </div>
        <div>
          <el-input v-model="code" prefix-icon="el-icon-circle-check" placeholder="验证码"></el-input>
        </div>
        <div class="loginBtn cursor" @click="toAdminHome">登录</div>
        <div class="info">第一次登录需下载Ukey驱动并安装</div>
      </div>
    </div>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
export default {
  components: {
    PageHeader,
    PageFooter
  },
  data() {
    return {
      userName: '',
      password: '',
      code: ''
    }
  },
  methods: {
    toAdminHome() {
      this.$router.push({
        path: '/businessManage/basicData/companyData'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.loginWrap {
  width: 100%;
  height: 590px;
  padding: 0 220px;
  background: url('../../assets/img/login-bg.png');
  background-size: cover;
  // background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: STHeitiSC-Medium, STHeitiSC;
  .loginContent {
    width: 360px;
    height: 400px;
    padding: 40px 45px;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      width: 100%;
      margin-bottom: 10px;
    }
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      color: rgba(30, 82, 193, 1);
      line-height: 21px;
      margin-bottom: 30px;
    }
    .tips {
      font-size: 16px;
      font-family: STHeitiSC-Medium, STHeitiSC;
      font-weight: 500;
      color: rgba(255, 142, 1, 1);
    }
    .generalBtn {
      border: 1px solid #dcdfe6;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
      cursor: pointer;
    }
    .loginBtn {
      width: 269px;
      height: 40px;
      margin-bottom: 12px;
      line-height: 40px;
      text-align: center;
      background: rgba(49, 102, 217, 1);
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0);
      font-size: 14px;
      font-family: STSongti-SC-Regular, STSongti-SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
    .info {
      font-size: 12px;
      font-family: STSongti-SC-Regular, STSongti-SC;
      font-weight: 400;
      color: rgba(243, 65, 60, 1);
    }
  }
}
</style>
