<template>
  <div>
    <title-panel name="产品目录">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="110px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="商品条码:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="产品名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="生产企业名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="追溯系统名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="审核通过时间:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            prop="companyName"
            fixed
            label="商品条码"
            width="150"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="creditCode" label="产品名称" width="150" show-overflow-tooltip></el-table-column>
          <el-table-column prop="certificate" label="规格" width="130" show-overflow-tooltip></el-table-column>
          <el-table-column prop="validity" label="生产企业名称" width="130" show-overflow-tooltip></el-table-column>
          <el-table-column prop="division" label="追溯系统名称" width="130" show-overflow-tooltip></el-table-column>
          <el-table-column prop="companyType" label="备案人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="contacts" label="审核通过时间"></el-table-column>
          <el-table-column label="操作" fixed="right" width="120">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="toDetail(scope.$index, scope.row)">产品详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
        status: '',
        select: '1',
        companyType: ''
      },
      tableData: [
        {
          companyName: '6909687000054',
          creditCode: '飞天茅台',
          certificate: '500ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6909687000016',
          creditCode: '飞天茅台',
          certificate: '600ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6900094000019',
          creditCode: '飞天茅台',
          certificate: '700ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6900094000033',
          creditCode: '飞天茅台',
          certificate: '800ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6909687000030',
          creditCode: '飞天茅台',
          certificate: '900ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6909687000054',
          creditCode: '飞天茅台',
          certificate: '1000ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6909687000016',
          creditCode: '飞天茅台',
          certificate: '200ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6900094000019',
          creditCode: '飞天茅台',
          certificate: '100ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6900094000033',
          creditCode: '飞天茅台',
          certificate: '500ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
        {
          companyName: '6909687000030',
          creditCode: '飞天茅台',
          certificate: '900ml',
          validity: '贵州茅台酒股份有限公司',
          division: '鑫创追溯系统',
          companyType: '接口自动',
          contacts: '2020-09-12 12:22:11'
        },
      ],
      companyTypeList: [
        { label: '全部', value: '' },
        { label: '生产企业', value: '1' }
      ]
    }
  },
  methods: {
    onSubmit() {},
    toDetail() {
      this.$router.push({
        path: '/businessManage/basicData/productCatalog/productDetail'
      })
    }
  }
}
</script>

<style lang="scss"></style>
