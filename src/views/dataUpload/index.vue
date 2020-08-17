<template>
  <div>
    <title-panel name="数据上传监控">
      <el-form
        :inline="true"
        :model="searchForm"
        label-position="right"
        label-width="90px"
        size="small"
        class="searchForm"
      >
        <el-form-item label="文件名称:">
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
        <el-form-item label="处理状态:">
          <el-select v-model="searchForm.status" placeholder="" clearable>
            <el-option label="全部" value=""></el-option>
            <el-option label="待处理" value="1"></el-option>
            <el-option label="处理中" value="2"></el-option>
            <el-option label="已成功" value="2"></el-option>
            <el-option label="已失败" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <label for="upload">
        <div class="primaryBtn" style="margin-bottom: 20px">文件上传</div>
      </label>
      <input type="file" name="upload" id="upload" style="display:none" />
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="code" label="文件名称"></el-table-column>
        <el-table-column prop="name" label="商品条码"></el-table-column>
        <el-table-column prop="specifications" label="产品名称"></el-table-column>
        <el-table-column prop="place" label="批号"></el-table-column>
        <el-table-column prop="owner" label="处理状态"></el-table-column>
        <el-table-column prop="status" label="状态描述"></el-table-column>
        <el-table-column prop="operation" label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="download(scope.$index, scope.row)">下载</el-button>
            <el-button type="text" size="mini" @click="download(scope.$index, scope.row)">再次处理</el-button>
            <el-button type="text" size="mini" @click="download(scope.$index, scope.row)">停止处理</el-button>
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
        status: ''
      },
      tableData: [
        {
          code: '21312adawd.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200102',
          owner: '待处理',
          status: '',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '123szge.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200101',
          owner: '处理中',
          status: '',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '21312adawd.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200402',
          owner: '已成功',
          status: '',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '123szge.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200302',
          owner: '已失败',
          status: '数据重复',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '123szge.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200502',
          owner: '待处理',
          status: '',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '21312adawd.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200402',
          owner: '处理中',
          status: '',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '21312adawd.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200602',
          owner: '已失败',
          status: '待处理',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '123szge.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200702',
          owner: '处理中',
          status: '',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '21312adawd.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200802',
          owner: '已成功',
          status: '',
          time: '2020-09-12 12:22:11'
        },
        {
          code: '123szge.xml',
          name: '6909687000054',
          specifications: '茅台王子酒',
          place: '20200902',
          owner: '已失败',
          status: '数据重复',
          time: '2020-09-12 12:22:11'
        },
      ]
    }
  },
  methods: {
    onSubmit() {},
    uploadFile() {},
    download() {}
  }
}
</script>

<style lang="scss" scoped>
.el-select .el-input {
  width: 130px;
}
</style>
