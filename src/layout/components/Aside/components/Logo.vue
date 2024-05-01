<template>
  <div class="logo-wrapper">
    <img src="@/assets/images/logo.png"  alt="logo"/>
    <el-text truncated v-if="!collapsed">Menu</el-text>
  </div>
</template>

<script setup>
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
    width: 32px;
  }

  span {
    font-size: 18px;
    color: var(--el-text-color);
  }
}
</style>
