<template>
  <SvgIcon
    class="collapse-icon"
    :name="globalStore.isCollapse ? 'collapse-right' : 'collapse-left'"
    @click="changeCollapse"
  />
</template>

<script setup lang="ts" name="LayoutHeaderCollapse">
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()
const changeCollapse = () =>
  globalStore.setGlobalState('isCollapse', !globalStore.isCollapse)
</script>

<style scoped lang="scss">
.collapse-icon {
  margin-right: 20px;
  font-size: 22px;
  cursor: pointer;
}
</style>
