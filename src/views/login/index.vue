<template>
  <div class="flex items-center justify-center p-4 login-container">
    <div class="w-full h-full login-box">
      <SwitchDark class="dark" />
      <div class="login-left">
        <img
          class="login-left-img"
          src="@/assets/images/login_left.png"
          alt="login"
        />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">Ak-Admin</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import LoginForm from './components/loginForm.vue'
import SwitchDark from '@/components/SwitchDark/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
