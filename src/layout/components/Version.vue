<template>
  <div class="version-wrapper">
    <span v-if="!collapsed">CURRENT VERSION {{ versionContent }}</span>
    <span v-else>v{{ versionContent }}</span>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

defineOptions({ name: 'AppVersion' })

const versionContent = ref('1.0.0')
const collapsed = inject('collapsed')
</script>

<style lang="scss" scoped>
.version-wrapper {
  width: 100%;
  height: var(--height-version);
  line-height: var(--height-version);
  font-size: 10px;
  color: var(--vt-c-text-light-2);
  text-align: center;
}
</style>
