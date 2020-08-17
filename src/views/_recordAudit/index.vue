<template>
  <div class="auditWrap">
    <title-panel name="产品备案审核">
      <div class="tabs">
        <div @click="changeTabs('1')" :class="['item', { active: current === '1' }]">已审核</div>
        <div @click="changeTabs('0')" :class="['item', { active: current === '0' }]">待审核</div>
        <div class="empty"></div>
      </div>
      <div style="padding: 20px">
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
          <el-form-item label="生产企业名称:">
            <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="追溯系统名称:">
            <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="备案状态:">
            <el-select v-model="searchForm.region" placeholder="" clearable>
              <el-option label="全部" value=""></el-option>
              <el-option label="未通过" value="1"></el-option>
              <el-option label="已通过" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="current == '1'" label="审核时间:">
            <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="current == '0'" label="申请时间:">
            <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="code" label="备案任务ID" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="商品条码" show-overflow-tooltip></el-table-column>
          <el-table-column prop="specifications" label="产品名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="place" label="规格"></el-table-column>
          <el-table-column prop="owner" label="生产企业名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="system" label="追溯系统名称"></el-table-column>
          <el-table-column prop="people" label="备案人"></el-table-column>
          <el-table-column prop="status" label="备案状态"></el-table-column>
          <el-table-column v-if="current == '1'" prop="time" label="备案时间" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="current == '0'" prop="time" label="申请时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="operation" label="操作">
            <template slot-scope="scope">
              <el-button v-if="current == '1'" type="text" size="mini" @click="toDetail(scope.$index, scope.row)"
                >备案详情</el-button
              >
              <el-button v-if="current == '0'" type="text" size="mini" @click="toAudit(scope.$index, scope.row)"
                >审核</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flexEnd">
          <el-pagination background layout="prev, pager, next" :total="20" class="marginTop20"></el-pagination>
        </div>
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
      current: '1',
      searchForm: {
        user: '',
        region: ''
      },
      tableData: [
        {
          code: 'f20fd0bef80148adbe119eba1e287a5b',
          name: '6909687000054',
          specifications: '飞天茅台',
          place: '500ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'a2716f9108f0413db39472bb3c57f86d',
          name: '6909687000016',
          specifications: '飞天茅台',
          place: '600ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'f20fd0bef80148adbe119eba1e287a5b',
          name: '6900094000019',
          specifications: '飞天茅台',
          place: '700ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'a2716f9108f0413db39472bb3c57f86d',
          name: '6900094000033',
          specifications: '飞天茅台',
          place: '800ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'f20fd0bef80148adbe119eba1e287a5b',
          name: '6909687000030',
          specifications: '飞天茅台',
          place: '900ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'a2716f9108f0413db39472bb3c57f86d',
          name: '6909687000054',
          specifications: '飞天茅台',
          place: '1000ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'f20fd0bef80148adbe119eba1e287a5b',
          name: '6909687000016',
          specifications: '茅台王子酒',
          place: '200ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'a2716f9108f0413db39472bb3c57f86d',
          name: '6900094000019',
          specifications: '茅台王子酒',
          place: '100ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'f20fd0bef80148adbe119eba1e287a5b',
          name: '6900094000033',
          specifications: '茅台王子酒',
          place: '500ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
        {
          code: 'a2716f9108f0413db39472bb3c57f86d',
          name: '6900094000030',
          specifications: '茅台王子酒',
          place: '900ml',
          owner: '贵州茅台酒股份有限公司',
          system: '鑫创追溯系统',
          people: '接口自动',
          status: '已通过',
          time: '2020-09-12 12:22:11'
        },
      ]
    }
  },
  methods: {
    changeTabs(current) {
      this.current = current
    },
    toDetail() {
      this.$router.push({
        path: '/businessManage/business/recordAudit/recordDetail'
      })
    },
    toAudit() {
      this.$router.push({
        path: '/businessManage/business/recordAudit/applyAudit'
      })
    }
  }
}
</script>

<style lang="scss">
.auditWrap {
  .panelContent {
    padding: 20px 0;
  }
}
</style>

<style lang="scss" scoped></style>
