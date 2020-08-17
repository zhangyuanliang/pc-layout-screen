<template>
  <div>
    <title-panel name="企业数据目录">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="110px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="企业名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="行政区划:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="追溯系统名称:">
          <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="企业类型:">
          <el-select v-model="searchForm.companyType" placeholder="请选择">
            <el-option v-for="item in companyTypeList" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
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
            label="企业名称"
            width="150"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            prop="creditCode"
            label="统一社会信用代码"
            width="150"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="certificate" label="生产许可证号" width="130" show-overflow-tooltip></el-table-column>
          <el-table-column prop="validity" label="生产许可证有效期" width="130" show-overflow-tooltip></el-table-column>
          <el-table-column prop="division" label="行政区划" width="130" show-overflow-tooltip></el-table-column>
          <el-table-column prop="companyType" label="企业类型" show-overflow-tooltip></el-table-column>
          <el-table-column prop="contacts" label="联系人"></el-table-column>
          <el-table-column prop="phone" label="联系方式" width="120" show-overflow-tooltip></el-table-column>
          <el-table-column prop="systemName" label="追溯系统名称" width="120" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" fixed="right" width="120">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="toDetail(scope.$index, scope.row)">企业详情</el-button>
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
          companyName: '贵州茅台酒股份有限公司',
          creditCode: '91110302MA007H95X1',
          certificate: '贵20160036',
          validity: '2020-12-31',
          division: '贵州省遵义市茅台镇',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '五粮液集团有限公司',
          creditCode: '91110302MA007H95X2',
          certificate: '川20160036',
          validity: '2020-12-31',
          division: '四川省宜宾市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '四川剑南春集团有限公司',
          creditCode: '91110302MA007H95X2',
          certificate: '川20160036',
          validity: '2020-12-31',
          division: '四川省宜宾市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '洛阳杜康控股',
          creditCode: '91110302MA007H95X4',
          certificate: '豫20160036',
          validity: '2020-12-31',
          division: '河南省洛阳市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '北京红星股份有限公司',
          creditCode: '91110302MA007H95X5',
          certificate: '京20160036',
          validity: '2020-12-31',
          division: '北京市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '牛栏山酒厂',
          creditCode: '91110302MA007H95X6',
          certificate: '京20160136',
          validity: '2020-12-31',
          division: '北京市顺义区',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '山西杏花村汾酒厂股份有限公司',
          creditCode: '91110302MA007H95X7',
          certificate: '晋20160036',
          validity: '2020-12-31',
          division: '山西省汾阳市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '四川水井坊股份有限公司',
          creditCode: '91110302MA007H95X8',
          certificate: '川20160036',
          validity: '2020-12-31',
          division: '四川省成都市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '安徽古井集团有限责任公司',
          creditCode: '91110302MA007H95X9',
          certificate: '皖20160036',
          validity: '2020-12-31',
          division: '安徽省亳州市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
        },
        {
          companyName: '四川君道酒业有限公司',
          creditCode: '91110302MA007H95X1',
          certificate: '川20160036',
          validity: '2020-12-31',
          division: '四川省成都市',
          companyType: '生产企业',
          contacts: '毛子安',
          phone: '010-08782123',
          systemName: '阿里健康追溯系统'
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
        path: '/businessManage/basicData/companyData/companyDetail'
      })
    }
  }
}
</script>

<style lang="scss"></style>
