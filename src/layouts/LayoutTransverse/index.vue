<!-- 横向布局 -->
<template>
  <el-container class="layout">
    <el-header>
      <div class="flex items-center justify-center logo">
        <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
        <span class="logo-text">Geeker Admin</span>
      </div>
      <el-menu
        mode="horizontal"
        :default-active="activeMenu"
        :router="false"
        :unique-opened="true"
      >
        <!-- 不能直接使用 SubMenu 组件，无法触发 el-menu 隐藏省略功能 -->
        <template v-for="subItem in menuList" :key="subItem.path">
          <el-sub-menu
            v-if="subItem.children?.length"
            :key="subItem.path"
            :index="subItem.path + 'el-sub-menu'"
          >
            <template #title>
              <SvgIcon
                :name="subItem.meta.icon"
                :size="18"
                style="margin-right: 5px"
              />
              <span>{{ subItem.meta.title }}</span>
            </template>
            <SubMenu :menu-list="subItem.children" />
          </el-sub-menu>
          <el-menu-item
            v-else
            :key="subItem.path + 'el-menu-item'"
            :index="subItem.path"
            @click="handleClickMenu(subItem)"
          >
            <SvgIcon
              :name="subItem.meta.icon"
              :size="18"
              style="margin-right: 5px"
            />
            <template #title>
              <span>{{ subItem.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
      <ToolBarRight />
    </el-header>
    <Main />
  </el-container>
</template>

<script setup lang="ts" name="LayoutTransverse">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/modules/auth'
import { useRoute, useRouter } from 'vue-router'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import type { MenuOptions } from '#/global'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const menuList = computed(() => authStore.showMenuListGet)
const activeMenu = computed(
  () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
)

const handleClickMenu = (subItem: MenuOptions) => {
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, '_blank')
  router.push(subItem.path)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
