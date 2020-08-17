<template>
  <div class="border-boxshadow width-100">
    <div class="title">
      <span>数据交换（7月21日上传基础数据153次，应用数据17801次）</span>
      <span style="font-size: 14px">每2s刷新一次</span>
    </div>
    <el-table :data="dataList" :header-cell-style="headerCellStyle" :row-style="rowStyle">
      <el-table-column label="交换流水号" align="center" prop="exchangeNum" show-overflow-tooltip />
      <el-table-column label="发送方" align="center" prop="sender" show-overflow-tooltip />
      <el-table-column label="接收方" align="center" prop="acceptor" show-overflow-tooltip />
      <el-table-column label="交换数据集" align="center" prop="dataIntegration" show-overflow-tooltip />
      <el-table-column label="发生时间" align="center" prop="time" show-overflow-tooltip />
      <el-table-column label="状态" align="center" prop="status" show-overflow-tooltip />
    </el-table>
  </div>
</template>

<script>
import mockData from './data.js'

export default {
  data() {
    return {
      dataList: [],
      circleTotalCount: 1,
      currentIndex: 0
    }
  },
  mounted() {
    this.circleData()
  },
  methods: {
    circleData() {
      this.circleTotalCount = Math.ceil(mockData.length / 5)
      setInterval(() => {
        const start = this.currentIndex * 5
        const end = this.currentIndex * 5 + 5
        this.dataList = mockData.slice(start, end)
        this.currentIndex++
        if (this.currentIndex === this.circleTotalCount) {
          this.currentIndex = 0
        }
      }, 2000)
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/screen.scss';
.width-100 {
  width: 100%;
}
.border-boxshadow {
  height: 290px;
  margin: 0 20px;
  .title {
    font-size: 18px;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>
