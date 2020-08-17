<template>
  <div class="titlePanelWrap">
    <div class="levelLine"></div>
    <div class="panel">
      <div class="title">
        <span class="vertical">{{ name }}</span>
      </div>
      <div class="panelContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.titlePanelWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.levelLine {
  height: 2px;
  background: rgba(49, 102, 217, 1);
}
.panel {
  width: 100%;
  border: 1px solid rgba(232, 232, 232, 1);
  border-top: none;
  flex-grow: 1;
  .title {
    height: 48px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(232, 232, 232, 1);
    .vertical {
      position: relative;
      font-size: 20px;
      font-weight: 500;
      color: rgba(30, 82, 193, 1);
      &::before {
        position: absolute;
        top: 2px;
        left: -10px;
        content: '';
        width: 2px;
        height: 18px;
        background: rgba(49, 102, 217, 1);
      }
    }
  }
}
.panelContent {
  padding: 20px;
  font-family: STSongti-SC-Regular, STSongti-SC;
  font-size: 12px;
}
</style>
