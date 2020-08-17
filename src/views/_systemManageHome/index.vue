<template>
  <div class="companyHome mainContainer">
    <div class="breadcrumb" style="margin-top: 20px">
      <span>当前位置：</span>
      <breadcrumb />
    </div>
    <div class="section">
      <div class="menu">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          unique-opened
        >
          <el-submenu index="/systemManage/company">
            <template slot="title">
              <img src="@/assets/img/menu-user.png" alt="" class="menu-img">
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/systemManage/company/companyUser">生产企业用户管理</el-menu-item>
              <el-menu-item index="/systemManage/company/systemUser">系统管理用户管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/systemManage/role">
            <template slot="title">
              <img src="@/assets/img/menu-role.png" alt="" class="menu-img">
              <span>角色管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/systemManage/role/roleManage">协同平台角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/systemManage/log">
            <template slot="title">
              <img src="@/assets/img/menu-log.png" alt="" class="menu-img">
              <span>日志审计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/systemManage/log/logCheck">日志查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="pageContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>

<style lang="scss" scoped>
.companyHome {
  font-family: STSongti-SC-Regular, STSongti-SC;
  .noticePanel {
    display: flex;
    align-items: center;
    margin: 20px 0;
    background: rgba(241, 242, 243, 1);
  }
  .noticeBg {
    width: 115px;
    height: 50px;
    background: rgba(243, 65, 60, 1);
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      top: 20px;
      right: -10px;
      width: 0;
      height: 0;
      border: 6px solid;
      border-color: transparent transparent transparent rgba(243, 65, 60, 1);
    }
  }
  .noticeCont {
    margin-left: 30px;
    position: relative;
    font-size: 14px;
    &::before {
      position: absolute;
      content: '';
      top: 8px;
      left: -10px;
      width: 4px;
      height: 4px;
      background: #333;
      border-radius: 50%;
    }
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: rgba(51, 51, 51, 1);
    .el-breadcrumb {
      font-size: 12px;
    }
  }
  .section {
    display: flex;
    margin-top: 10px;
    .menu {
      width: 220px;
      min-width: 220px;
      min-height: 500px;
      border: 1px solid rgba(232, 232, 232, 1);
      border-right: none;
      .el-menu-item.is-active {
        color: rgba(30, 82, 193, 1);
        background: rgba(238, 243, 255, 1);
        position: relative;
        &::after {
          position: absolute;
          content: '';
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          background: rgba(49, 102, 217, 1);
        }
      }
      .el-menu {
        height: 100%;
      }
    }
    .pageContent {
      flex-grow: 1;
      width: 0;
      margin-left: 20px;
      font-family: STHeitiSC-Medium, STHeitiSC;
    }
  }
}
</style>
