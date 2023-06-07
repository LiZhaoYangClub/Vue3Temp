<template>
  <el-config-provider :locale="zhCn" size="default" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup name="App">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useTheme } from './hooks/useTheme'

const buttonConfig = reactive({ autoInsertSpace: false })

// init theme
const { initTheme } = useTheme()
initTheme()
</script>
