<template>
  <div class="border-boxshadow shadow-icon item-wrap">
    <span class="charts-title">生产企业接入状况TOP10</span>
    <div class="iconStyle" @click="moreClick()">
      <i class="el-icon-d-arrow-right"></i>
    </div>
    <echarts :echartsOption="echartsOption" @echartsClick="mapClick" echartsHeight="225px" />
  </div>
</template>

<script>
import Echarts from '@/components/echarts'
export default {
  data() {
    return {
      titleDate: '',
      typeDiff: '0',
      stockDialogVisible: false,
      type: '0',
      echartsOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '8%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: [0, 0.01],
          axisLabel: {
            // interval: 10,
            rotate: 45,
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: false
          },
          data: ['茅台酒业', '红星酒业', '牛栏山', '五粮液', '剑南春', '杜康', '山西汾酒', '水井坊', '古井贡', '泸州老窖']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              width: 1,
              type: 'dashed',
              color: 'rgba(2,220,252, 0.5)'
            }
          },
          axisLabel: {
            color: '#fff'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [200, 150, 130, 120, 110, 90, 80, 70, 60, 40],
            type: 'bar',
            showBackground: false,
            barWidth: '8px',
            color: '#02DCFC'
          }
        ]
      }
    }
  },
  mounted() {},
  methods: {
    moreClick() {},
    mapClick() {},
  },
  components: {
    Echarts
  }
}
</script>

<style lang="scss">
@import '@/styles/screen.scss';
</style>
