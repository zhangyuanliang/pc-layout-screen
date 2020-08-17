<template>
  <title-panel name="审核">
    <product-info :isProductInfo="true" :isApply="true"/>
    <div class="flexC" style="margin-top: 20px">
      <el-button size="mini" @click="goBack()">取消</el-button>
      <el-button type="danger" size="mini" @click="refuse()">拒绝通过</el-button>
      <el-button type="primary" size="mini" @click="pass()">审核通过</el-button>
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
    },
    refuse() {

    },
    pass() {

    }
  }
}
</script>

<style lang="scss" scoped></style>
