export const staticRouter = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: []
  }
]

export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403/index.vue'),
    meta: { title: 'Page403' }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404/index.vue'),
  }
]