<template>
  <div class="collpase-wrapper--block" @click="appStore.collapsedChange">
    <SvgIcon :icon="icon" size="20px" />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import useAppStore from '@/stores/modules/app'

defineOptions({ name: 'AppCollapseBlock' })

const collapsed = inject('collapsed')

const appStore = useAppStore()
const icon = computed(() => collapsed.value ? 'collapse-off' : 'collapse-on')
</script>

<style lang="scss" scoped>
.collpase-wrapper--block {
  height: var(--h-header);
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
