<template>
  <div class="app-wrapper app-vertical">
    <el-container>
      <el-aside :class="{ 'aside-collapsed': collapsed, 'show-collapse-bar': !showHeader }">
        <Logo v-if="showLogo" />
        <Menu :collapsed="collapsed" />
        <Version v-if="showVersion" />
        <!-- 当页面显示header时，使用块形折叠组件[CollapseBlock] -->
        <CollapseBar v-if="!showHeader" />
      </el-aside>
      <el-container>
        <el-header v-if="showHeader" :class="{ 'has-tags-view': showTagsView }">
          <div class="header-wrapper">
            <CollapseBlock />
            <Breadcrumb />
          </div>
          <TagsView />
        </el-header>
        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive :include="keepAliveStore.keepAliveName">
                <component :is="Component" :key="route.path" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
        <el-footer v-if="showFooter">2023 ©️ BASE VUE PROJECT USE VITE.</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'
import useLayoutStore from '@/stores/modules/layout'
import useAppStore from '@/stores/modules/app'
import useKeepAliveStore from '../stores/modules/keep-alive'
import Menu from './components/Menu.vue'
import Logo from './components/Logo.vue'
import Version from './components/Version.vue'
import CollapseBar from './components/CollapseBar.vue'
import CollapseBlock from './components/CollapseBlock.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import TagsView from './components/TagsView.vue'

defineOptions({ name: 'AppLayoutWrapper' })

const keepAliveStore = useKeepAliveStore()
const layoutStore = useLayoutStore()
const showHeader = computed(() => layoutStore.showHeader)
const showFooter = computed(() => layoutStore.showFooter)
const showLogo = computed(() => layoutStore.showLogo)
const showVersion = computed(() => layoutStore.showVersion)
const showTagsView = computed(() => layoutStore.showTagsView)

const appStore = useAppStore()
const collapsed = computed(() => appStore.collapsed)

//provide子组件里将会使用到的数据，为了能更好的追踪数据流向，不要在非layout目录inject这些数据
provide('showLogo', showLogo)
provide('showHeader', showHeader)
provide('showVersion', showVersion)
provide('collapsed', collapsed)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/layout.scss';
</style>
