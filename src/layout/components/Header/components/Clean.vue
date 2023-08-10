<template>
  <div class="widget-wrapper" @click="clean">
    <SvgIcon color="var(--c-text-secondary)" icon="clean" size="24px" />
  </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'AppClean' })

const { t } = useI18n()

const clean = () => {
  ElMessageBox.confirm(
    t('message_box.clean'),
    t('common.tips'),
    {
      confirmButtonText: t('common.confirm'),
      cancelButtonText: t('common.cancel'),
      type: 'warning',
      buttonSize: 'default'
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
