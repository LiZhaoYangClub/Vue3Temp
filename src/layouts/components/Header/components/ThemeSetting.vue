<template>
  <div class="theme-setting">
    <SvgIcon
      name="theme"
      class="cursor-pointer toolBar-icon"
      :size="20"
      @click="openDrawer"
    />
    <ThemeDrawer />
  </div>
</template>

<script setup lang="ts" name="ThemeSetting">
import mittBus from '@/utils/mittBus'
import ThemeDrawer from './ThemeDrawer/index.vue'

const openDrawer = () => {
  mittBus.emit('openThemeDrawer')
}
</script>
