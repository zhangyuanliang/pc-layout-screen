<template>
  <div class="panel">
    <div class="topBorder"></div>
    <div class="top">
      <div class="title">{{name}}</div>
      <div class="others">
        <div class="more">更多<i class="el-icon-d-arrow-right" style="margin-left: 5px"></i></div>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.topBorder {
  height: 2px;
  background: #3166d9;
}
.top {
  height: 40px;
  line-height: 40px;
  display: flex;
  .title {
    border-bottom: 1px solid #1e52c1;
    color: #1e52c1;
    font-family: STHeitiSC, STHeitiSC-Medium;
    padding: 0 10px;
  }
  .others {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #e6e6e6;
    padding-right: 10px;
  }
  .more {
    font-size: 12px;
    font-family: STSongti, STSongti-SC;
    text-align: left;
    color: #999999;
    cursor: pointer;
  }
}
.content {
  font-size: 12px;
  padding: 10px;
}
</style>
