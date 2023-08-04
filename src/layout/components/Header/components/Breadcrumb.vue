<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator-icon="ArrowRight">
      <TransitionGroup name="breadcrumb" mode="out-in" tag="el-breadcrumb-item">
        <template v-if="breadcrumbList">
          <el-breadcrumb-item to="/" v-if="breadcrumbList[0].meta.title !== '系统首页'">
            <el-text tag="b">{{ $t('router.home_page') }}</el-text>
					</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
						<el-text>{{ $t(item.meta.title) }}</el-text>
					</el-breadcrumb-item>
        </template>
      </TransitionGroup>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useAuthStore from '@/stores/modules/auth'

defineOptions({ name: 'AppBreadcrumb' })

const route = useRoute()
const authStore = useAuthStore()

const breadcrumbList = computed(() => authStore.getBreadcrumblist()[route.matched[route.matched.length - 1].path])
</script>

<style lang="scss" scoped>
.breadcrumb-enter-active {
	transition: all 0.2s;
}

.breadcrumb-enter-from, .breadcrumb-leave-active {
	opacity: 0;
	transform: translateX(10px);
}
</style>
