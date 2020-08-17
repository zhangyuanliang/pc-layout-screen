<template>
  <div class="layout">
    <screen-header />
    <div class="router-view-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import ScreenHeader from '@/components/ScreenHeader'
export default {
  data() {
    return {
      routerViewShow: false
    }
  },
  mounted() {},
  methods: {},
  components: {
    ScreenHeader
  }
}
</script>

<style lang="scss" scoped>
.layout {
  flex: 1;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 1920px;
  height: 1080px;
  background-color: #003675;
  background-image: url('../assets/img/bg.png');
  display: flex;
  flex-direction: column;
  overflow: auto;
  color: #fff;
  font-family: PingFangSC-Regular, PingFang SC;
  .router-view-content {
    width: 100%;
    flex: 1;
    display: flex;
    > div {
      width: 100%;
    }
  }
}
</style>
