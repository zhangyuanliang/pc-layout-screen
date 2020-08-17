<template>
  <div>
    <batch-catalog-section :isAdmin="true" :path="toPath"/>
  </div>
</template>

<script>
import BatchCatalogSection from '@/components/BatchCatalogSection'

export default {
  components: {
    BatchCatalogSection
  },
  data() {
    return {
      toPath: '/businessManage/basicData/batchCatalog/batchTraceDetail'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
