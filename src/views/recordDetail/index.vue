<template>
  <title-panel name="备案详情">
    <product-info />
    <div class="flexC" style="margin-top: 20px">
      <el-button size="mini" @click="goBack()">返回</el-button>
    </div>
  </title-panel>
</template>

<script>
import TitlePanel from '@/components/TitlePanel'
import ProductInfo from '@/components/ProductInfo'
export default {
  components: {
    TitlePanel,
    ProductInfo
  },
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped></style>
