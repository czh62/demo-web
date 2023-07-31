<template>
  <el-scrollbar :class="{'has-logo': showLogo, 'has-version': showVersion}">
    <!-- unique-opened -->
    <el-menu class="app-menu menu-vertical" :class="{'app-menu__collapsed' : collapsed}" :default-active="activeMenu" :router="false" :collapse="collapsed" :collapse-transition="false">
      <sidebar-item :menus="menus" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { computed, inject } from 'vue'
import SidebarItem from './SidebarItem.vue'
import useAuthStore from '@/stores/modules/auth'
import { useRoute } from 'vue-router'

defineOptions({ name: 'AppMenu' })

const route = useRoute()
const authStore = useAuthStore()
const menus = computed(() => authStore.getFilterMenuList())
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path))

const showLogo = inject('showLogo')
const showVersion = inject('showVersion')
const collapsed = inject('collapsed')
</script>

<style lang="scss" scoped>
@import '@/assets/styles/menu.scss';
</style>
