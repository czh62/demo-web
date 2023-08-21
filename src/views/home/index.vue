<template>
  <div class="page-wrapper flex-vertical">
    <div class="app-container fill">
      <el-button type="primary" @click="handleClick">按钮</el-button>
      <el-table></el-table>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'PageHome' })

const handleClick = () => {
  ElMessage.success('success')
}
</script>

<style lang="scss" scoped></style>
