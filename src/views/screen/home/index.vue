<template>
<div class="screen">
  <div class="warning-wrap flex-column-container flex1">
    <div class="warning-trend flex-cc">
      <wine-record-distribute />
    </div>
    <div class="warning-rank flex-cc">
      <wine-statistic />
    </div>
    <div class="yq-hot flex-cc">
      <hot-top10 />
    </div>
    <div class="province-map warrper">
      <company-map/>
    </div>
    <div class="yq-rank flex-cc">
      <data-exchange/>
    </div>
    <div class="store-rank flex-cc">
      <data-source/>
    </div>
    <div class="overdue flex-cc">
      <company-join/>
    </div>
    <div class="will-overdue flex-cc">
      <company-num-static/>
    </div>
  </div>

</div>
</template>

<script>
import WineRecordDistribute from './components/WineRecordDistribute'
import WineStatistic from './components/WineStatistic'
import HotTop10 from './components/HotTop10'
import CompanyMap from './components/CompanyMap'
import DataExchange from './components/DataExchange'
import DataSource from './components/DataSource'
import CompanyJoin from './components/CompanyJoin'
import CompanyNumStatic from './components/CompanyNumStatic'

export default {
  components: {
    WineRecordDistribute,
    WineStatistic,
    HotTop10,
    CompanyMap,
    DataExchange,
    DataSource,
    CompanyJoin,
    CompanyNumStatic
  },
  data() {
    return {

    }
  },
  mounted() {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.warning-wrap {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(3, 290px);
  grid-template-areas: 'warning-trend map store-rank' 'warning-rank map overdue' 'yq-hot rank-table will-overdue';
  gap: 20px 20px;
  margin-top: 20px;
}
.warning-trend {
  grid-area: warning-trend;
}
.warning-rank {
  grid-area: warning-rank;
}
.yq-hot {
  grid-area: yq-hot;
}
.province-map {
  grid-area: map;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rank-table {
  grid-area: rank-table;
}
.store-rank {
  grid-area: store-rank;
}
.overdue {
  grid-area: overdue;
}
.will-overdue {
  grid-area: will-overdue;
}
.flex-cc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.warrper {
  position: relative;
}
.nav-list {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.nav-item {
  width: 140px;
  text-align: center;
  font-size: 14px;
  float: left;
  position: relative;
  overflow: hidden;
  margin-right: 12px;
  height: 39px;
  line-height: 39px;
  cursor: pointer;
  .nav-link {
    display: block;
    height: 37px;
    line-height: 37px;
    color: #fff;
    background: rgba(2, 220, 252, 0.1);
    border: 1px solid rgba(2, 220, 252, 0.6);
    .link-text {
      display: inline-block;
    }
    &:before {
      position: absolute;
      left: -11px;
      top: -11px;
      display: inline-block;
      content: ' ';
      width: 20px;
      height: 20px;
      background: #0b3c80;
      border: 1px solid rgba(2, 220, 252, 0.6);
      transform: rotate(45deg);
    }
    &:after {
      position: absolute;
      bottom: -11px;
      right: -11px;
      display: inline-block;
      content: ' ';
      width: 20px;
      height: 20px;
      background: #003675;
      border: 1px solid rgba(2, 220, 252, 0.6);
      transform: rotate(45deg);
    }
  }
  .bg {
    width: 140px;
    display: block;
    height: 37px;
    line-height: 37px;
    color: #fff;
    background: rgba(2, 220, 252, 0.5);
  }
}

</style>
