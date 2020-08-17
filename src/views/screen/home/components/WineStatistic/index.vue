<template>
  <div class="border-boxshadow shadow-icon item-wrap">
    <span class="charts-title">白酒香型统计</span>
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
          '#EC49CE',
          'orange',
          '#3566F5',
          '#3DDCFC',
          '#33BF83',
          '#3566F5',
          '#FCCB47',
          '#33BF83',
          '#3566F5',
          '#FA9E1E'
        ],
        series: [
          {
            name: '白酒香型',
            type: 'pie',
            radius: ['50%', '70%'],
            emphasis: {
              label: {
                show: true,
                fontSize: '26',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 848, name: '米香型' },
              { value: 548, name: '清香型' },
              { value: 548, name: '兼香型' },
              { value: 548, name: '凤香型' },
              { value: 135, name: '特香型' },
              { value: 335, name: '酱香型' },
              { value: 310, name: '浓香型' },
              { value: 548, name: '豉香型' },
              { value: 234, name: '药香型' }
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
    mapClick() {}
  },
  components: {
    Echarts
  }
}
</script>

<style lang="scss">
@import '@/styles/screen.scss';
</style>
