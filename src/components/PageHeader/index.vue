<template>
  <div>
    <div class="welcome mainContainer">
      <div>欢迎登录全国酒业防伪追溯协同平台</div>
      <div v-if="showMenu">
        <el-dropdown size="medium" class="avatar-container">
          <div class="avatar-wrapper">
            <span class="user-avatar">{{ name }}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <el-dropdown-item>
              <div @click="logout" style="display:block;">退出登录</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="imgWrap mainContainer">
      <img src="@/assets/img/logo@2x.png" style="width:475px;height:56px" alt="" />
      <div>
        <div v-if="isAdmin" class="menuBtns">
          <div @click="changeNavMenu(0)" :class="[{ active: current === 0 }]">
            <router-link to="/businessManage/basicData/companyData">业务管理</router-link>
          </div>
          <div @click="changeNavMenu(1)" :class="[{ active: current === 1 }]">
            <router-link to="/systemManage/company/companyUser">系统管理</router-link>
          </div>
          <div @click="changeNavMenu(2)" :class="[{ active: current === 2 }]">
            <router-link to="/screen/home" target="_blank">数据监控大屏</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomBorder"></div>
  </div>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    showMenu: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  data() {
    return {
      name: 'example@gmail.com',
      current: 0,
      activeIndex: '0'
    }
  },
  mounted() {
    // 防止刷新浏览器 NavMenu 选中问题
    const { path } = this.$router.history.current
    if (path.startsWith('/businessManage/')) {
      this.current = 0
    }
    if (path.startsWith('/systemManage/')) {
      this.current = 1
    }
  },
  methods: {
    changeNavMenu(current) {
      this.current = current
    },
    changeActive(val) {
      this.activeIndex = val
    },
    logout() {
      // this.$store.dispatch('LogOut').then(() => {
      //   location.reload()
      // })
      this.$router.push('/')
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
.welcome {
  height: 30px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(244, 244, 244, 1);
}
.imgWrap {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 12px 0;
}
.topTabs {
  display: flex;
  font-size: 14px;
  font-family: STHeitiSC, STHeitiSC-Medium;
  font-weight: 500;
  text-align: center;
  color: #333333;
  margin-left: 90px;
  > span {
    padding: 0 20px;
    text-align: center;
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
