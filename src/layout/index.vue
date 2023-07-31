<template>
  <div class="app-wrapper app-vertical">
    <el-container>
      <el-aside>
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
        </el-header>
        <el-main><router-view /></el-main>
        <el-footer>2023 ©️ MAGIC BOX TECHNOLOGY BY jhrestart2022 WECHAT.</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './components/Menu.vue'

defineOptions({ name: 'AppLayoutWrapper' })
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;

  .el-container {
    height: 100%;
    position: relative;

    .el-aside {
      transition: width 0.28s;
    }

    .el-main {
      padding: 0;
      margin-left: 20px;
    }
  }
}
</style>