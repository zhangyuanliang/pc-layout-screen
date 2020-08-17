<template>
  <title-panel name="数据交换查询">
    <el-form
      :inline="true"
      :model="searchForm"
      label-position="right"
      label-width="90px"
      size="small"
      class="searchForm"
    >
      <el-form-item label="传输流水号:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="数据集类型:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="状态:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="" class="inputSelect">
        <el-input placeholder="" v-model="searchForm.type" class="input-with-select">
          <el-select v-model="searchForm.select" size="mini" slot="prepend" placeholder="请选择">
            <el-option label="发送方" value="1"></el-option>
            <el-option label="接受方" value="2"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="发生时间:">
        <el-input v-model="searchForm.user" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="code" label="传输流水号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="sender" label="发送方身份" show-overflow-tooltip></el-table-column>
        <el-table-column prop="acceptor" label="接收方身份" width="130" show-overflow-tooltip></el-table-column>
        <el-table-column prop="businessType" label="业务类型" width="130" show-overflow-tooltip></el-table-column>
        <el-table-column prop="dataType" label="数据集类型" width="130" show-overflow-tooltip></el-table-column>
        <el-table-column prop="time" label="发生时间" width="140" show-overflow-tooltip></el-table-column>
        <el-table-column prop="status" label="状态" width="130"></el-table-column>
        <el-table-column label="操作" width="140">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="download(scope.$index, scope.row)">下载数据</el-button>
            <el-button type="text" size="mini" @click="download(scope.$index, scope.row)">再次转发</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
        status: '',
        select: '1'
      },
      tableData: [
        {
          code: '51323985364003920200708151128704',
          sender: '鑫创追溯系统',
          acceptor: '全国酒业协同平台',
          businessType: '基础信息数据子集',
          dataType: '产品备案信息',
          time: '2020-07-08 15:11:29',
          status: '转发成功'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '鑫创追溯系统',
          acceptor: '全国酒业协同平台',
          businessType: '基础信息数据子集',
          dataType: '产品备案信息',
          time: '2020-07-08 15:11:29',
          status: '转发失败'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '鑫创追溯系统',
          acceptor: '全国酒业协同平台',
          businessType: '基础信息数据子集',
          dataType: '产品备案信息',
          time: '2020-07-08 15:11:29',
          status: '转发成功'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '鑫创追溯系统',
          acceptor: '全国酒业协同平台',
          businessType: '基础信息数据子集',
          dataType: '产品备案信息',
          time: '2020-07-08 15:11:29',
          status: '转发失败'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '鑫创追溯系统',
          acceptor: '全国酒业协同平台',
          businessType: '基础信息数据子集',
          dataType: '产品备案信息',
          time: '2020-07-08 15:11:29',
          status: '转发成功'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '销售终端378912-298721',
          acceptor: '鑫创追溯系统',
          businessType: '应用信息数据子集',
          dataType: '销售数据子集',
          time: '2020-07-08 15:11:29',
          status: '转发失败'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '销售终端378912-298721',
          acceptor: '鑫创追溯系统',
          businessType: '应用信息数据子集',
          dataType: '销售数据子集',
          time: '2020-07-08 15:11:29',
          status: '转发成功'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '销售终端378912-298721',
          acceptor: '鑫创追溯系统',
          businessType: '应用信息数据子集',
          dataType: '销售数据子集',
          time: '2020-07-08 15:11:29',
          status: '转发失败'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '销售终端378912-298721',
          acceptor: '鑫创追溯系统',
          businessType: '应用信息数据子集',
          dataType: '销售数据子集',
          time: '2020-07-08 15:11:29',
          status: '转发成功'
        },
        {
          code: '51323985364003920200708151128704',
          sender: '销售终端378912-298721',
          acceptor: '鑫创追溯系统',
          businessType: '应用信息数据子集',
          dataType: '销售数据子集',
          time: '2020-07-08 15:11:29',
          status: '转发失败'
        },
      ]
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>

<style lang="scss">
.inputSelect {
  width: 284px;
  .el-select {
    width: 90px;
  }
  .el-form-item__content {
    width: 100% !important;
  }
}
</style>
