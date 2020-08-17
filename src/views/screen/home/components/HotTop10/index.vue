<template>
  <div class="border-boxshadow shadow-icon item-wrap">
    <div class="title">公众查询热度TOP10</div>
    <div class="iconStyle">
      <i class="el-icon-d-arrow-right"></i>
    </div>
    <el-table :data="hotList" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle">
      <el-table-column label="热度关键词" prop="keyword" width="200px" show-overflow-tooltip />
      <el-table-column label="来源主要区域" prop="address" width="140px" show-overflow-tooltip />
      <el-table-column label="查询热度" prop="hot" show-overflow-tooltip />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: [
        {keyword: '茅台王子酒', address: '北京市', hot: 34812},
        {keyword: '牛栏山二锅头', address: '天津市', hot: 31095},
        {keyword: '红星二锅头', address: '山东省', hot: 27378},
        {keyword: '汾酒', address: '山西省', hot: 23661},
        {keyword: '剑南春水晶剑', address: '河南省', hot: 19944},
        {keyword: '郎酒', address: '河北省', hot: 16227},
        {keyword: '泸州老窖六年陈头曲', address: '广西省', hot: 12510},
        {keyword: '五粮液1618', address: '山东省', hot: 11510},
        {keyword: '洋河蓝色经典', address: '辽宁省', hot: 10510},
        // {keyword: '水井坊臻酿八号', address: '吉林省', hot: 9510},
      ]
    }
  },
  mounted() {},
  methods: {
    headerCellStyle({ row, rowIndex }) {
      return {
        borderTop: '1px solid rgba(2, 220, 252, 0.3)',
        borderBottom: '1px solid rgba(2, 220, 252, 0.3)',
        background: 'rgba(2, 220, 252, 0.1) !important',
        padding: '0',
        height: '20px',
        fontSize: '12px'
      }
    },
    rowStyle({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return {
          background: 'rgba(2, 220, 252, 0.1) !important'
        }
      }
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return {
        height: '21px',
        fontSize: '12px'
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/screen.scss';
.border-boxshadow {
  height: 292px;
  .title {
    font-size: 18px;
    color: #fff;
    margin-top: 12px;
    margin-bottom: 5px;
    >>> .el-table {
      .cell {
        line-height: 21px;
      }
    }
  }
}
</style>
