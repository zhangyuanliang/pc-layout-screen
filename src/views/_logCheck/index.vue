<template>
  <div>
    <title-panel name="日志查询">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="110px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="关键字:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="操作时间:">
          <el-select v-model="searchForm.region" placeholder="" clearable>
            <el-option label="全部" value="0"></el-option>
            <el-option label="追溯系统用户" value="1"></el-option>
            <el-option label="系统管理用户" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作人:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="code" width="100" label="序号"></el-table-column>
        <el-table-column prop="companyName" label="日志描述"></el-table-column>
        <el-table-column prop="place" width="200" label="最近登录时间"></el-table-column>
        <el-table-column prop="operator" width="200" label="操作人"></el-table-column>
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
          code: '1',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '2',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '3',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '4',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '5',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '6',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '7',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '8',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '9',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
        },
        {
          code: '10',
          companyName: '[系统管理用户]5018201811000023使用USBKEY登录成功',
          place: '2020-07-08 15:11:29',
          operator: '管理用户1'
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
