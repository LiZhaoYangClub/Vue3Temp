<!-- 纵向布局 -->
<template>
  <el-container class="layout">
    <el-aside>
      <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="flex items-center justify-center logo">
          <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
          <span v-show="!isCollapse" class="logo-text">Geeker Admin</span>
        </div>
        <el-scrollbar>
          <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :router="false"
            :unique-opened="true"
            :collapse-transition="false"
          >
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="LayoutVertical">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/modules/auth'
import { useGlobalStore } from '@/stores/modules/global'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'

const route = useRoute()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const isCollapse = computed(() => globalStore.isCollapse)
const menuList = computed(() => authStore.showMenuListGet)
const activeMenu = computed(
  () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
