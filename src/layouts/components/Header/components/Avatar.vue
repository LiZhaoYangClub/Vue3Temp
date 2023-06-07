<template>
  <el-dropdown trigger="click">
    <div class="avatar">
      <img src="@/assets/images/avatar.gif" alt="avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-icon><User /></el-icon>个人信息
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><Edit /></el-icon>修改密码
        </el-dropdown-item>
        <el-dropdown-item divided @click="logout">
          <el-icon><SwitchButton /></el-icon>登出
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="LayoutHeaderAvatar">
import { LOGIN_URL } from '@/config'
import { useRouter } from 'vue-router'
import { logoutApi } from '@/api/modules/login'
import { useUserStore } from '@/stores/modules/user'
import { ElMessageBox, ElMessage } from 'element-plus'
import { User, Edit, SwitchButton } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/stores/modules/global'
import { useTabsStore } from '@/stores/modules/tabs'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'
import { useAuthStore } from '@/stores/modules/auth'

const router = useRouter()
const userStore = useUserStore()
const tabsStore = useTabsStore()
const globalStore = useGlobalStore()
const keepAliveStore = useKeepAliveStore()
const authStore = useAuthStore()

// 退出登录
const logout = () => {
  ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    // 1.执行退出登录接口
    await logoutApi()

    clearLogout()

    // 3.重定向到登陆页
    router.replace(LOGIN_URL)
    ElMessage.success('退出登录成功！')
  })
}

// 彻底清除缓存
const clearLogout = () => {
  // 2.清除 Token
  userStore.clear()
  // 清除tabs
  tabsStore.clear()
  // 还原默认设置
  globalStore.clear()
  // 清除 keepAlive
  keepAliveStore.clear()
  // 清除 auth
  authStore.clear()
}

// 轻度退出
// const lightLogout = () => {
//   // 2.清除 Token
//   userStore.clear()
//   // 清除 auth
//   authStore.clear()
// }
</script>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
