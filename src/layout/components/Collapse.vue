<template>
  <div class="collapse-wrapper">
    <div class="collapse--wrapper__btn pointer" @click="appStore.collapsedChange">
    </div>
  </div>
</template>

<script setup>
import useAppStore from '../../stores/modules/app'

defineOptions({ name: 'AppCollapse' })

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.collapse-wrapper {
  height: 100%;
  width: 5px;
  position: absolute;
  right: 0px;
  top: 0;
  background-color: var(--color-background-mute);
  display: flex;
  align-items: center;

  .collapse--wrapper__btn {
    width: 100%;
    height: 50px;
    background-color: var(--vt-c-primary);
    line-height: 50px;
    color: #fff;
    overflow: hidden;
    position: relative;
  }
}
</style>