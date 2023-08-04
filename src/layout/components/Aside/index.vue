<template>
  <Logo v-if="showLogo" />
  <Menu :collapsed="collapsed" />
  <Version v-if="showVersion" />
  <!-- 当页面显示header时，使用块形折叠组件[CollapseBlock] -->
  <CollapseBar v-if="!showHeader" />
</template>

<script setup>
import { inject } from 'vue'
import Menu from '../Menu/index.vue'
import Logo from './components/Logo.vue'
import Version from './components/Version.vue'
import CollapseBar from './components/CollapseBar.vue'

defineOptions({ name: 'AppLayoutAside' })

const showLogo = inject('showLogo')
const collapsed = inject('collapsed')
const showVersion = inject('showVersion')
const showHeader = inject('showHeader')
</script>

<style lang="scss" scoped></style>
