<template>
  <div>
    <title-panel name="查看追溯码明细">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="90px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="追溯码:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="追溯码级别:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="商品条码:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="产品名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="批号:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <div style="margin-bottom: 10px">上传任务总数：10291</div>
      <el-table :data="tableData" border style="width:100%">
        <el-table-column prop="code" label="追溯码" width="300"></el-table-column>
        <el-table-column prop="name" label="追溯码级别"></el-table-column>
        <el-table-column prop="specifications" label="商品条码"></el-table-column>
        <el-table-column prop="place" label="产品名称"></el-table-column>
        <el-table-column prop="owner" label="规格"></el-table-column>
        <el-table-column prop="status" label="批号"></el-table-column>
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
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '1',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200102',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '1',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200101',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '1',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200202',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '1',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200302',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '1',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200402',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '2',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200502',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '2',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200602',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '2',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200702',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '2',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200802',
        },
        {
          code: '1.2.156.131561.6912345678901.12345678901234567890',
          name: '2',
          specifications: '6909687000054',
          place: '茅台王子酒',
          owner: '500ml',
          status: '20200902',
        },
      ]
    }
  },
  methods: {
    onSubmit() {},
  }
}
</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 130px;
}
</style>
