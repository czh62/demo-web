<template>
  <el-scrollbar wrap-class="wrap-container" view-class="view-container">
    <!-- unique-opened -->
    <el-menu
      class="app-menu menu-vertical"
      :default-active="$route.path"
      :router="false"
    >
      <sidebar-item :menus="authStore.dynamicMenuList" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import useAuthStore from '@/stores/modules/auth'

defineOptions({ name: 'AppMenu' })

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/menu.scss';
</style>
