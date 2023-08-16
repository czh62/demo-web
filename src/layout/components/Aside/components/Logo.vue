<template>
  <div class="logo-wrapper">
    <img src="@/assets/images/logo.svg" />
    <el-text truncated v-if="!collapsed">BASE PROJECT</el-text>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineOptions({ name: 'AppLogo' })

const collapsed = inject('collapsed')
</script>

<style lang="scss" scoped>
.logo-wrapper {
  width: 100%;
  height: var(--h-logo);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 40px;
  }

  span {
    font-size: 18px;
    color: var(--el-text-color);
  }
}
</style>
