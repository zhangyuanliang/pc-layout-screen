<template>
  <div class="flexAdapt">
    <page-header :showMenu="false" />
    <div class="loginWrap flexG">
      <div class="loginContent">
        <div class="title">生产企业用户登录</div>
        <div>
          <el-input v-model="userName" prefix-icon="el-icon-user" placeholder="手机号 / 电子邮箱"></el-input>
        </div>
        <div>
          <el-input v-model="password" prefix-icon="el-icon-unlock" placeholder="请输入密码"></el-input>
        </div>
        <div class="flex">
          <el-input v-model="code" prefix-icon="el-icon-circle-check" placeholder="验证码"></el-input>
          <img src="@/assets/img/code-img@2x.png" style="margin-left: 2px" alt="" />
        </div>
        <div class="loginBtn cursor" @click="toCompanyHome">登录</div>
        <div class="back cursor">找回密码</div>
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
    toCompanyHome() {
      this.$router.push({
        path: '/company/manageCompanyInfo/myCompany'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.loginWrap {
  // width: 100%;
  height: 590px;
  padding: 0 220px;
  background: url('../../assets/img/login-bg.png') no-repeat;
  background-size: cover;
  // background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
      margin-bottom: 25px;
    }
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      font-family: STHeitiSC-Medium, STHeitiSC;
      color: rgba(30, 82, 193, 1);
      line-height: 21px;
      margin-bottom: 30px;
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
    .back {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(30, 82, 193, 1);
      line-height: 17px;
    }
  }
}
</style>
