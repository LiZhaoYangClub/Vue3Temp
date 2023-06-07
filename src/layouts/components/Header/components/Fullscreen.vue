<template>
  <div class="fullscreen">
    <SvgIcon
      :name="isFullscreen ? 'fullscreen-exit' : 'fullscreen'"
      class="cursor-pointer"
      :size="20"
      @click="toggle"
    />
  </div>
</template>

<script setup lang="ts" name="LayoutHeaderFullscreen">
import { useFullscreen } from '@vueuse/core'
const { toggle, isFullscreen } = useFullscreen()
</script>
