<template>
  <div>
    <batch-catalog-section :path="toPath"/>
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
      toPath: '/company/manageData/batchCatalog/batchTraceDetail'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
