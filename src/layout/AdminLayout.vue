<template>
  <div>
    <page-header :isAdmin="true"/>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
export default {
  name: 'AdminLayout',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style></style>
