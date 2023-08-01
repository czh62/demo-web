<template>
  <div class="app-wrapper app-vertical">
    <el-container>
      <el-aside :style="{ width: collapsed? '69px' : '220px' }">
        <Logo v-if="showLogo" />
        <Menu :collapsed="collapsed" />
        <Version v-if="showVersion" />
        <Collapse />
      </el-aside>
      <el-container>
        <el-header v-if="showHeader">
        </el-header>
        <el-main><router-view /></el-main>
        <el-footer v-if="showFooter">2023 ©️ MAGIC BOX TECHNOLOGY BY jhrestart2022 WECHAT.</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'
import useLayoutStore from '@/stores/modules/layout'
import useAppStore from '@/stores/modules/app'
import Menu from './components/Menu.vue'
import Logo from './components/Logo.vue'
import Version from './components/Version.vue'
import Collapse from './components/Collapse.vue'

defineOptions({ name: 'AppLayoutWrapper' })

const layoutStore = useLayoutStore()
const showHeader = computed(() => layoutStore.showHeader)
const showFooter = computed(() => layoutStore.showFooter)
const showLogo = computed(() => layoutStore.showLogo)
const showVersion = computed(() => layoutStore.showVersion)

const appStore = useAppStore()
const collapsed = computed(() => appStore.collapsed)

provide('showLogo', showLogo)
provide('showVersion', showVersion)
provide('collapsed', collapsed)

</script>

<style lang="scss" scoped>
@import '@/assets/styles/layout.scss';
</style>