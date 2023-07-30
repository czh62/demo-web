<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside width="200px">
        菜单列表
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>