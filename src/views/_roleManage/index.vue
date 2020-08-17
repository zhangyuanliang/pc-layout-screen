<template>
  <div>
    <title-panel name="协同平台角色管理">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="110px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="角色名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="角色类型:">
          <el-select v-model="searchForm.region" placeholder="" clearable>
            <el-option label="全部" value=""></el-option>
            <el-option label="追溯系统用户" value="1"></el-option>
            <el-option label="系统管理用户" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-button type="primary" @click="addRole" size="small" style="margin-bottom: 20px">新增角色</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="code" width="200" label="角色名称"> </el-table-column>
        <el-table-column prop="companyName" width="200" label="角色类型"> </el-table-column>
        <el-table-column prop="place" label="备注" show-overflow-tooltip=""> </el-table-column>
        <el-table-column prop="operation" width="100" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="toEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="flexEnd">
        <el-pagination background layout="prev, pager, next" :total="20" class="marginTop20"></el-pagination>
      </div>
    </title-panel>
  </div>
</template>

<script>
import TitlePanel from '@/components/TitlePanel'

export default {
  components: {
    TitlePanel
  },
  data() {
    return {
      searchForm: {
        user: '',
        region: ''
      },
      tableData: [
        {
          code: '追溯系统待审核角色',
          companyName: '追溯系统用户',
          place: '新建第三方追溯系统未完成授权审核前的角色。包括：追溯系统管理。',
        },
        {
          code: '系统管理管理员',
          companyName: '系统管理用户',
          place: '系统管理用户默认角色。包括：用户管理、角色管理、门户管理、日志审计、基础数据管理、协同业务管理。',
        },
        {
          code: '追溯系统待审核角色',
          companyName: '追溯系统用户',
          place: '新建第三方追溯系统未完成授权审核前的角色。包括：追溯系统管理。',
        },
        {
          code: '系统管理管理员',
          companyName: '系统管理用户',
          place: '系统管理用户默认角色。包括：用户管理、角色管理、门户管理、日志审计、基础数据管理、协同业务管理。',
        },
        {
          code: '追溯系统待审核角色',
          companyName: '追溯系统用户',
          place: '新建第三方追溯系统未完成授权审核前的角色。包括：追溯系统管理。',
        },
        {
          code: '系统管理管理员',
          companyName: '系统管理用户',
          place: '系统管理用户默认角色。包括：用户管理、角色管理、门户管理、日志审计、基础数据管理、协同业务管理。',
        },
        {
          code: '追溯系统待审核角色',
          companyName: '追溯系统用户',
          place: '新建第三方追溯系统未完成授权审核前的角色。包括：追溯系统管理。',
        },
        {
          code: '系统管理管理员',
          companyName: '系统管理用户',
          place: '系统管理用户默认角色。包括：用户管理、角色管理、门户管理、日志审计、基础数据管理、协同业务管理。',
        },
        {
          code: '追溯系统待审核角色',
          companyName: '追溯系统用户',
          place: '新建第三方追溯系统未完成授权审核前的角色。包括：追溯系统管理。',
        },
        {
          code: '系统管理管理员',
          companyName: '系统管理用户',
          place: '系统管理用户默认角色。包括：用户管理、角色管理、门户管理、日志审计、基础数据管理、协同业务管理。',
        },
      ]
    }
  },
  methods: {
    onSubmit() {},
    toEdit() {

    },
    addRole() {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 130px;
}
</style>
