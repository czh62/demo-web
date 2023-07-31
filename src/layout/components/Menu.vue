<template>
  <el-scrollbar wrap-class="wrap-container" view-class="view-container">
    <!-- unique-opened -->
    <el-menu class="app-menu menu-vertical" :default-active="activeMenu" :router="false">
      <sidebar-item :menus="menus" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
import useAuthStore from '@/stores/modules/auth'
import { useRoute } from 'vue-router'

defineOptions({ name: 'AppMenu' })

const route = useRoute()
const authStore = useAuthStore()
const menus = computed(() => authStore.getFilterMenuList())
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path))
</script>

<style lang="scss" scoped>
@import '@/assets/styles/menu.scss';
</style>
