<template>
  <div class="companyHome mainContainer">
    <!-- <div class="noticePanel">
      <div class="noticeBg">
        <img src="@/assets/img/notice-icon@2x.png" style="width:15px;height:13px;margin-right:4px;" alt="" />
        <span>最新通告：</span>
      </div>
      <div class="noticeCont">
        关于发布临床急需境外新药标准复核检验用资料及样品要求的通告（2019年第35号）
      </div>
    </div> -->
    <div class="breadcrumb">
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
          <el-submenu index="/company/manageCompanyInfo">
            <template slot="title">
              <img src="@/assets/img/menu-company.png" alt="" class="menu-img" />
              <span>企业信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/company/manageCompanyInfo/myCompany">我的生产企业</el-menu-item>
              <el-menu-item index="/company/manageCompanyInfo/productRecord">产品信息备案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/company/manageData">
            <template slot="title">
              <img src="@/assets/img/menu-basic.png" alt="" class="menu-img" />
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/company/manageData/dataUpload">数据上传监控</el-menu-item>
              <el-menu-item index="/company/manageData/batchCatalog">产品批次目录</el-menu-item>
              <el-menu-item index="/company/manageData/saleRecord">产品销售记录</el-menu-item>
              <el-menu-item index="/company/manageData/saleDetail">产品销售明细</el-menu-item>
              <el-menu-item index="/company/manageData/dataCheck">数据交换查询</el-menu-item>
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
    margin-top: 20px;
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
      .el-submenu__title:focus,
      .el-submenu__title:hover {
        background-color: rgba(238, 243, 255, 1) !important;
      }
      .el-menu-item:focus,
      .el-menu-item:hover {
        background-color: rgba(238, 243, 255, 1);
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
