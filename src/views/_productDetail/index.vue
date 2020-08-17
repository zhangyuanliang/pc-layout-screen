<template>
  <title-panel name="产品详情">
    <product-info :isProductInfo="true"/>
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
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped></style>
