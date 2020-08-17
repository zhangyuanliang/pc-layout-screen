<template>
  <div class="header">
    <div class="title">
      <img src="./images/emblem.png" alt="" class="img" />
      <span class="text">全国酒业防伪追溯协同平台</span>
    </div>
    <div class="time">{{ date }}</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
data() {
  return {
    date: moment(new Date()).format('YYYY年MM月DD日')
  }
},
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 106px;
  background: url('./images/head.png') no-repeat;
  background-size: auto 100%;
  background-position: center;
  position: relative;
  color: #fff;
  .title {
    display: flex;
    align-items: center;
    line-height: 70px;
    .img {
      height: 50px;
      margin-right: 15px;
    }
    .text {
      font-size: 40px;
    }
  }
  .time {
    height: 22px;
    line-height: 22px;
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translate(-50%, 0);
  }
}
</style>
