<template>
  <div class="widget-wrapper" @click="toggle">
    <SvgIcon color="var(--c-text-secondary)" :icon="icon" size="24px" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFullscreen } from '@vueuse/core'
import SvgIcon from '@/components/SvgIcon/index.vue'

defineOptions({ name: 'AppFullscreenSwitch' })

const { isFullscreen, enter, exit, toggle } = useFullscreen()

const icon = computed(() => isFullscreen.value ? 'fullscreen-exit' : 'fullscreen')
</script>
