<template>
  <div>
    <title-panel name="产品信息备案">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="90px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="商品条码:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="产品名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="规格:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="产地:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="备案时间:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="备案状态:">
          <el-select v-model="searchForm.region" placeholder="" clearable>
            <el-option label="全部" value=""></el-option>
            <el-option label="未通过" value="1"></el-option>
            <el-option label="已通过" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-button type="primary" @click="applyRecord" size="small" style="margin-bottom: 20px">申请产品备案</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="code" label="商品条码"> </el-table-column>
        <el-table-column prop="name" label="产品名称"> </el-table-column>
        <el-table-column prop="specifications" label="规格"> </el-table-column>
        <el-table-column prop="place" label="产地"> </el-table-column>
        <el-table-column prop="owner" label="备案人"> </el-table-column>
        <el-table-column prop="status" label="备案状态"> </el-table-column>
        <el-table-column prop="time" label="备案时间"> </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="toDetail(scope.$index, scope.row)">备案详情</el-button>
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
          code: '6909687000054',
          name: '飞天茅台',
          specifications: '500ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6900094000033',
          name: '飞天茅台',
          specifications: '600ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6900094000019',
          name: '飞天茅台',
          specifications: '700ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6909687000030',
          name: '飞天茅台',
          specifications: '800ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6909687000054',
          name: '飞天茅台',
          specifications: '900ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6909687000016',
          name: '飞天茅台',
          specifications: '1000ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6909687000054',
          name: '茅台王子酒',
          specifications: '200ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6900094000019',
          name: '茅台王子酒',
          specifications: '100ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6900094000033',
          name: '茅台王子酒',
          specifications: '500ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '6909687000030',
          name: '茅台王子酒',
          specifications: '900ml',
          place: '贵州省茅台镇',
          owner: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
      ]
    }
  },
  methods: {
    onSubmit() {},
    applyRecord() {
      this.$router.push({
        path: '/company/manageCompanyInfo/productRecord/applyRecord'
      })
    },
    toDetail() {
      this.$router.push({
        path: '/company/manageCompanyInfo/productRecord/recordDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 130px;
}
</style>
