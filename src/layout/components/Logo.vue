<template>
  <div class="logo-wrapper">
    <img src="@/assets/images/logo.svg" />
    <span v-if="!collapsed">BASE PROJECT</span>
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
  height: var(--height-logo);
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
    color: var(--color-text);
  }
}
</style>
