<template>
  <title-panel name="产品销售记录">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="90px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="店铺名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="店铺区域:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="产品名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <input type="file" name="upload" id="upload" style="display:none" />
      <el-table :data="tableData" fit border style="width: 100%">
        <el-table-column prop="storeName" label="店铺名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="region" label="店铺区域" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="店铺地址" show-overflow-tooltip></el-table-column>
        <el-table-column prop="range" label="经营范围"></el-table-column>
        <el-table-column prop="productName" label="产品名称"></el-table-column>
        <el-table-column prop="specification" label="规格"></el-table-column>
        <el-table-column prop="saleNum" label="销售数量"></el-table-column>
      </el-table>
      <div class="flexEnd">
        <el-pagination background layout="prev, pager, next" :total="20" class="marginTop20"></el-pagination>
      </div>
    </title-panel>
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
        status: ''
      },
      tableData: [
        {
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '茅台王子酒',
          specification: '500ml',
          saleNum: '142'
        },
        {
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '飞天茅台',
          specification: '500ml',
          saleNum: '211'
        },
        {
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '五粮液',
          specification: '500ml',
          saleNum: '211'
        },
        {
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '茅台王子酒',
          specification: '500ml',
          saleNum: '331'
        },
        {
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '剑南春',
          specification: '500ml',
          saleNum: '142'
        },
        {
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '牛栏山二锅头',
          specification: '500ml',
          saleNum: '142'
        },
        {
          storeName: '山姆会员店',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '剑南春',
          specification: '500ml',
          saleNum: '211'
        },
        {
          storeName: '山姆会员店',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '茅台王子酒',
          specification: '500ml',
          saleNum: '142'
        },
        {
          storeName: '山姆会员店',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '飞天茅台',
          specification: '500ml',
          saleNum: '142'
        },
        {
          storeName: '山姆会员店',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '五粮液',
          specification: '500ml',
          saleNum: '211'
        },
        {
          storeName: '山姆会员店',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          productName: '牛栏山二锅头',
          specification: '500ml',
          saleNum: '311'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 130px;
}
</style>
