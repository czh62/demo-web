<template>
  <div class="widget-wrapper" @click="clean">
    <SvgIcon color="var(--c-text-secondary)" icon="clean" size="24px" />
  </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus'
import SvgIcon from '@/components/SvgIcon/index.vue'

defineOptions({ name: 'AppClean' })

const clean = () => {
  ElMessageBox.confirm(
    '清除缓存将会重置系统配置并刷新页面，请提前做好数据备份。是否继续？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
  .then(() => {
    localStorage.removeItem('keep-alive')
    localStorage.removeItem('tags-view')
    localStorage.removeItem('app')
    location.reload()
  })
  .catch(() => {})
}

</script>
