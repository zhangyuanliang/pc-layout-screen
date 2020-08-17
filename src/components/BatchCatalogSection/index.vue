<template>
  <title-panel name="产品批次目录">
    <el-form
      :inline="true"
      :model="searchForm"
      label-position="right"
      label-width="100px"
      size="small"
      class="searchForm"
    >
      <el-form-item label="商品条码:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="产品名称:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="批号:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item v-if="isAdmin" label="生产企业名称:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <input type="file" name="upload" id="upload" style="display:none" />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="barCode" label="商品条码"></el-table-column>
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="specification" label="规格"></el-table-column>
      <el-table-column prop="num" label="批号"></el-table-column>
      <el-table-column prop="batch" label="产品批次目录"></el-table-column>
      <el-table-column v-if="isAdmin" prop="company" label="生产企业名称"></el-table-column>
      <el-table-column prop="operation" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="toDetail(scope.$index, scope.row)">查看追溯码明细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flexEnd">
      <el-pagination background layout="prev, pager, next" :total="20" class="marginTop20"></el-pagination>
    </div>
  </title-panel>
</template>

<script>
import TitlePanel from '@/components/TitlePanel'
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: true
    },
  },
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
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200102',
          batch: 1000,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200101',
          batch: 2133,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200202',
          batch: 214,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200302',
          batch: 557,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200102',
          batch: 1000,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200402',
          batch: 2133,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200502',
          batch: 1000,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200602',
          batch: 2133,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200802',
          batch: 214,
          company: '贵州茅台酒股份有限公司'
        },
        {
          barCode: '6909687000054',
          name: '茅台王子酒',
          specification: '500ml',
          num: '20200902',
          batch: 557,
          company: '贵州茅台酒股份有限公司'
        }
      ]
    }
  },
  methods: {
    toDetail() {
      this.$router.push({
        path: this.path
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
