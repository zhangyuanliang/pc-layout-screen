<template>
  <title-panel name="产品销售明细">
    <el-form
      :inline="true"
      :model="searchForm"
      label-position="right"
      label-width="90px"
      size="small"
      class="searchForm"
    >
      <el-form-item label="追溯编码:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="产品名称:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="店铺名称:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="店铺区域:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="购买时间:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="code" label="追溯编码" width="140" fixed show-overflow-tooltip></el-table-column>
      <el-table-column prop="productName" label="产品名称" width="140" fixed show-overflow-tooltip></el-table-column>
      <el-table-column prop="specification" label="规格" show-overflow-tooltip></el-table-column>
      <el-table-column prop="storeName" label="店铺名称" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="region" label="店铺区域" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="address" label="店铺地址" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="range" label="经营范围" show-overflow-tooltip></el-table-column>
      <el-table-column prop="phone" label="购买者手机号" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="birthday" label="生日" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
      <el-table-column prop="buyType" label="购买类型" show-overflow-tooltip></el-table-column>
      <el-table-column prop="buyAmount" label="购买单价（元）" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="saleNum" label="购买数量" show-overflow-tooltip></el-table-column>
      <el-table-column prop="discountType" label="优惠劵类型" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="discountAmount" label="优惠金额（元）" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="receiveAddress" label="收货地址" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="time" label="购买时间" width="140" show-overflow-tooltip></el-table-column>
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
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '餐饮',
          phone: '13517268899',
          birthday: '1987-09-11',
          sex: '男',
          buyType: '线上',
          buyAmount: '580',
          saleNum: '1',
          discountType: '代金券',
          discountAmount: 20,
          receiveAddress: '北京市朝阳区望京科技园',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          phone: '--',
          birthday: '1987-09-11',
          sex: '女',
          buyType: '线下',
          buyAmount: '580',
          saleNum: '2',
          discountType: '折扣劵',
          discountAmount: 20,
          receiveAddress: '--',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '餐饮',
          phone: '13517268899',
          birthday: '1987-09-11',
          sex: '男',
          buyType: '线上',
          buyAmount: '580',
          saleNum: '3',
          discountType: '--',
          discountAmount: '--',
          receiveAddress: '北京市朝阳区望京科技园',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          phone: '--',
          birthday: '1987-09-11',
          sex: '女',
          buyType: '线下',
          buyAmount: '--',
          saleNum: '--',
          discountType: '代金券',
          discountAmount: 20,
          receiveAddress: '北京市朝阳区望京科技园',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '餐饮',
          phone: '13517268899',
          birthday: '1987-09-11',
          sex: '男',
          buyType: '线上',
          buyAmount: '580',
          saleNum: '1',
          discountType: '--',
          discountAmount: '--',
          receiveAddress: '北京市朝阳区望京科技园',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          phone: '--',
          birthday: '1987-09-11',
          sex: '女',
          buyType: '线下',
          buyAmount: '580',
          saleNum: '3',
          discountType: '单品券',
          discountAmount: 30,
          receiveAddress: '北京市朝阳区望京科技园',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '餐饮',
          phone: '13517268899',
          birthday: '1987-09-11',
          sex: '男',
          buyType: '线上',
          buyAmount: '580',
          saleNum: '1',
          discountType: '代金券',
          discountAmount: 20,
          receiveAddress: '--',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          phone: '--',
          birthday: '1987-09-11',
          sex: '女',
          buyType: '线下',
          buyAmount: '580',
          saleNum: '1',
          discountType: '折扣劵',
          discountAmount: 20,
          receiveAddress: '北京市朝阳区望京科技园',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '餐饮',
          phone: '13517268899',
          birthday: '1987-09-11',
          sex: '男',
          buyType: '线上',
          buyAmount: '580',
          saleNum: '1',
          discountType: '代金券',
          discountAmount: 20,
          receiveAddress: '--',
          time: '2020-01-11 19:11:56'
        },
        {
          code: '1.2.156.134121.6912345678901.2018232',
          productName: '茅台王子酒',
          specification: '500ml',
          storeName: '望京科技园超市',
          region: '北京市朝阳区东湖渠街道',
          address: '北京市朝阳区东湖渠街道',
          range: '零售',
          phone: '--',
          birthday: '1987-09-11',
          sex: '女',
          buyType: '线下',
          buyAmount: '580',
          saleNum: '3',
          discountType: '单品券',
          discountAmount: 30,
          receiveAddress: '北京市朝阳区望京科技园',
          time: '2020-01-11 19:11:56'
        },
      ]
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 130px;
}
</style>
