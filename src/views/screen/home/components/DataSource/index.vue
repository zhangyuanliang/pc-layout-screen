<template>
  <div class="border-boxshadow shadow-icon item-wrap">
    <span class="charts-title">备案数据来源分布</span>
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
      echartsOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: [
          '#3DDCFC',
          '#FA9D1C',
          '#F96938',
        ],
        series: [
          {
            name: '数据来源',
            type: 'pie',
            radius: '55%',
            emphasis: {
              label: {
                show: true,
                fontSize: '26',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 848, name: '阿里追溯系统' },
              { value: 548, name: '爱创追溯系统' },
              { value: 135, name: '嘉华追溯系统' },
            ],
            label: {
              // formatter: '{a} {c}'
            }
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
