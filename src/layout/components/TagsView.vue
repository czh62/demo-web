<template>
  <div class="tags-view-wrapper">
    <el-scrollbar>
      <div class="tags-wrapper">
        <template v-for="tag in tagsViewStore.tagsViewList" :key="tag.path">
          <el-tag
            class="tags-view--tag"
            :class="{ 'view-active': active === tag.path }"
            type="info"
            :closable="tag.close"
            @click="tagsClick(tag)"
            @close="tagsClose(tag.path)"
            >{{ tag.title }}</el-tag
          >
        </template>
      </div>
    </el-scrollbar>
    <div class="more-wrapper">
      <el-dropdown @command="handleCommand">
        <el-icon class="pointer"><ArrowDown /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="current" icon="Remove">关闭当前</el-dropdown-item>
            <el-dropdown-item command="left" icon="DArrowLeft">关闭左侧</el-dropdown-item>
            <el-dropdown-item command="right" icon="DArrowRight">关闭右侧</el-dropdown-item>
            <el-dropdown-item command="other" divided icon="CircleClose">关闭其他</el-dropdown-item>
            <el-dropdown-item command="clear" icon="SwitchButton">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useTagsViewStore from '@/stores/modules/tags-view'

defineOptions({ name: 'AppTagsView' })

const route = useRoute()
const router = useRouter()
const tagsViewStore = useTagsViewStore()

const active = ref(route.fullPath)

const tagsClick = item => {
  router.push(item.path)
}

const tagsClose = path => {
  tagsViewStore.remove(path, active.value === path)
}

const handleCommand = command => {
  switch (command) {
    case 'current':
      tagsViewStore.remove(active.value, true)
      break
    case 'left':
      tagsViewStore.clearLeft(active.value)
      break
    case 'right':
      tagsViewStore.clearRight(active.value)
      break
    case 'other':
      tagsViewStore.clearOther(active.value)
      break
    case 'clear':
      tagsViewStore.clear(active.value)
      break

    default:
      break
  }
}

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
  () => route.fullPath,
  () => {
    if (route.meta.isFull) return
    active.value = route.fullPath
    const tabsParams = {
      icon: route.meta.icon,
      title: route.meta.title,
      path: route.fullPath,
      name: route.name,
      close: !route.meta.isAffix,
      keepAlive: route.meta.isKeepAlive
    }
    tagsViewStore.insert(tabsParams)
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.tags-view-wrapper {
  display: flex;
  justify-content: space-between;

  .tags-wrapper {
    display: flex;
    flex-wrap: nowrap;
    // border-left: 1px solid var(--color-border);

    .tags-view--tag {
      line-height: 27px;
      padding: 0 15px;
      font-size: 12px;
      cursor: pointer;
      border-radius: 0;
      height: 27px;
      border: 0;
      background-color: var(--vt-c-empty);
      border-right: 1px solid var(--color-border);

      &.view-active {
        color: var(--vt-c-primary);
      }
    }
  }

  .more-wrapper {
    height: 27px;
    padding: 0 10px;
    background-color: var(--color-background-soft);
    display: flex;
    align-items: center;

    .el-text {
      font-size: 12px;
    }
  }
}
</style>
