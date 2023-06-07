<template>
  <div class="flex items-center justify-center w-full h-full bg-white home">
    <img
      class="w-3/4 home-bg"
      src="@/assets/images/welcome.png"
      alt="welcome"
    />
  </div>
</template>

<script setup lang="ts" name="Home"></script>

<style lang="scss" scoped>
.home {
  background-color: var(--el-bg-color);
  border: 1px solid var(--el-border-color-light);
}
</style>
