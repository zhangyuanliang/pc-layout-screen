<template>
  <div>
    <title-panel name="生产企业用户管理">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="110px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="电子邮箱:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="手机号:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="追溯系统名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="状态:">
          <el-select v-model="searchForm.region" placeholder="" clearable>
            <el-option label="全部" value=""></el-option>
            <el-option label="转发成功" value="1"></el-option>
            <el-option label="转发失败" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="code" label="电子邮箱"> </el-table-column>
        <el-table-column prop="name" label="手机号"> </el-table-column>
        <el-table-column prop="specifications" label="生产企业名称"> </el-table-column>
        <el-table-column prop="place" label="有效期"> </el-table-column>
        <el-table-column prop="status" label="状态"> </el-table-column>
        <el-table-column prop="time" label="最近登录时间"> </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="toEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="toLock(scope.$index, scope.row)">锁定</el-button>
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
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'example@gmail.com',
          name: '15565621155',
          specifications: '茅台酒业有限公司',
          place: '永久',
          status: '正常',
          time: '2020-09-12 12:22:11'
        },
      ]
    }
  },
  methods: {
    onSubmit() {},
    toEdit() {

    },
    toLock() {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 130px;
}
</style>
