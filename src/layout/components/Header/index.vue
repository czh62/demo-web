<template>
  <div class="header-wrapper">
    <CollapseBlock />
    <Breadcrumb />
  </div>
  <TagsView v-if="showTagsView" />
</template>

<script setup>
import { inject } from 'vue'
import CollapseBlock from './components/CollapseBlock.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import TagsView from './components/TagsView.vue'

defineOptions({ name: 'AppLayoutHeader '})

const showTagsView = inject('showTagsView')
</script>

<style lang="scss" scoped></style>
