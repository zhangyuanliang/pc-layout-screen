<template>
  <div style="width:100%;height:100%">
    <ul class="statictic">
      <li class="statictic-item">
        <div class="title">生产企业数量</div>
        <div class="num">
          <span class="num-item" v-for="(item, index) in companyNum" :key="index">{{ item }}</span>
        </div>
      </li>
      <li class="statictic-item" @click="thisProClick()">
        <div class="title">白酒产品数量</div>
        <div class="num">
          <span class="num-item" v-for="(item, index) in productNum" :key="index">{{ item }}</span>
        </div>
      </li>
      <li class="statictic-item" @click="approvalNum()">
        <div class="title">白酒生产数量</div>
        <div class="num">
          <span class="num-item" v-for="(item, index) in productionNum" :key="index">{{ item }}</span>
        </div>
      </li>
    </ul>
    <echarts echartsHeight="400px" :echartsOption="echartsOption" @echartsClick="mapClick" />
  </div>
</template>

<script>
import 'echarts/map/js/china'
import Echarts from '@/components/echarts'
const targetArea = {
  coord: [116.98, 36.67],
  name: ''
};
export default {
  components: {
    Echarts,
  },
  data() {
    return {
      companyNum: '466',
      productNum: '4664',
      productionNum: '644',
      echartsOption: {
        tooltip: {
          trigger: 'item',
          formatter: params => {
            const nameText = params.data.nameText
            return nameText || ''
          }
        },
        legend: {
          icon: 'circle',
          itemWidth: 12,
          itemHeight: 8,
          textStyle: {
            color: '#fff'
          },
          left: '10%',
          bottom: '10%'
        },
        geo: {
          map: 'china',
          silent: true,
          zoom: 1.2,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(1, 54, 118, 0.5)',
              borderColor: 'rgba(2, 220, 252, 0.3)'
            },
            emphasis: {
              areaColor: 'rgba(1, 54, 118, 0.5);',
              borderColor: 'rgba(2, 220, 252, 0.3)'
            }
          },
          regions: [
            // {
            //   name: '山东',
            //   itemStyle: {
            //     areaColor: 'yellow',
            //     color: 'yellow'
            //   }
            // }
          ]
        },
        series: [
          {
            name: '生产企业',
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, // 箭头指向速度，值越小速度越快
              trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', // 箭头图标
              symbolSize: 5 // 图标大小
            },
            lineStyle: {
              normal: {
                width: 1, // 尾迹线条宽度
                opacity: 1, // 尾迹线条透明度
                curveness: 0.3, // 尾迹线条曲直度
                color: '#02DCFC'
              }
            },
            data: []
          },
          {
            name: '生产企业',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              // 涟漪特效
              period: 4, // 动画时间，值越小速度越快
              brushType: 'stroke', // 波纹绘制方式 stroke, fill
              scale: 4 // 波纹圆环最大限制，值越大波纹越大
            },
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                show: false,
                color: '#02DCFC'
              }
            },
            data: []
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                // offset:[5, 0],
                color: '#0f0',
                formatter: '{b}',
                textStyle: {
                  color: '#0f0'
                }
              },
              emphasis: {
                show: true,
                color: '#f60'
              }
            },
            symbol: 'pin',
            symbolSize: 20,
            // data: [{ name: targetArea.name, value: targetArea.coord }]
          }
        ]
      }
    }
  },
  methods: {
    mapClick() {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/screen.scss';
.statictic {
  display: flex;
  justify-content: center;
  margin-bottom: 54px;
  width: 100%;
  height: 90px;
  .statictic-item {
    flex: 1;
    text-align: center;
    color: #fff;
    cursor: pointer;
    .title {
      font-size: 20px;
    }
    .num {
      margin-top: 5px;
      .num-item {
        display: inline-block;
        width: 45px;
        height: 57px;
        line-height: 57px;
        background: #0073af;
        margin: 0 2px;
        font-size: 32px;
      }
    }
  }
}
</style>
