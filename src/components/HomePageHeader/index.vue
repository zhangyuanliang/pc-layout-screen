<template>
  <div class="homeWrap">
    <div class="welcome">
      <div>欢迎登录全国酒业防伪追溯协同平台</div>
      <div class="flex">
        <div @click="toLoginPage('/login/companyLogin')" class="loginText">
          生产企业登录
        </div>
        <div @click="toLoginPage('/login/adminLogin')" class="loginText">
          管理用户登录
        </div>
      </div>
    </div>
    <div class="imgWrap">
      <div style="display:flex;justify-content:space-between;width: 1000px">
        <img src="@/assets/img/logo@2x.png" style="width:475px;height:56px" alt="" />
        <div class="topTabs">
          <span @click="changeActive(0)" :class="{ active: activeIndex == 0 }">首页</span>
          <span @click="changeActive(1)" :class="{ active: activeIndex == 1 }">工作动态</span>
          <span @click="changeActive(2)" :class="{ active: activeIndex == 2 }">入驻品牌</span>
          <span @click="changeActive(3)" :class="{ active: activeIndex == 3 }">入驻企业</span>
          <span @click="changeActive(4)" :class="{ active: activeIndex == 4 }">技术规范</span>
        </div>
      </div>
    </div>
    <div class="bottomBorder"></div>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      name: 'example@gmail.com',
      current: 0,
      activeIndex: '0',
      isLoginPage: false
    }
  },
  mounted() {
    const { path } = this.$router.history.current
    const isLoginPage = path == '/login/companyLogin' || path == '/login/adminLogin'
    if (isLoginPage) {
      this.isLoginPage = true
    } else {
      this.isLoginPage = false
    }
  },
  methods: {
    changeNavMenu(current) {
      this.current = current
    },
    changeActive(val) {
      this.activeIndex = val
    },
    toLoginPage(path) {
      this.$router.push({
        path
      })
    }
  },
  watch: {
    $route(newValue, oldValue) {
      const isLoginPage = newValue == '/login/companyLogin' || newValue == '/login/adminLogin'
      if (isLoginPage) {
        this.isLoginPage = true
      } else {
        this.isLoginPage = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.homeWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(244, 244, 244, 1);
}
.welcome {
  width: 1000px;
  height: 30px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.imgWrap {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  font-size: 12px;
  padding: 12px 0;
}
.topTabs {
  width: 100%;
  display: flex;
  font-size: 14px;
  font-family: STHeitiSC, STHeitiSC-Medium;
  font-weight: 500;
  text-align: center;
  justify-content: flex-end;
  color: #333333;
  // margin-left: 90px;
  > span {
    width: 96px;
    line-height: 56px;
    text-align: right;
    cursor: pointer;
    &.active {
      color: #1e52c1;
    }
  }
}
.loginText {
  cursor: pointer;
  margin-left: 20px;
}
.bottomBorder {
  height: 2px;
  background: rgba(30, 82, 193, 1);
}
.menuBtns {
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  justify-content: center;
  display: flex;
  margin-left: 100px;
  cursor: pointer;
  > div {
    padding: 0 30px;
    border-right: 1px solid rgba(216, 216, 216, 1);
    flex-wrap: nowrap;
    &:last-of-type {
      border-right: none;
    }
    &.active {
      color: rgba(55, 106, 218, 1);
    }
  }
}
.avatar-container {
  height: 30px;
  display: flex;
  align-items: center;
  .avatar-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    .user-avatar {
      margin-right: 6px;
    }
    .el-icon-caret-bottom {
      font-size: 12px;
    }
  }
}
</style>
