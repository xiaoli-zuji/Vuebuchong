import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入文件
const $attrs02 = () => import('../views/02-$attrs/father.vue')
const Dongtai = () => import('../views/04-动态组件/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/texing01',
    component: () => import('../views/01-特性继承/father.vue')
  },
  {
    path: '/$attrs02',
    component: $attrs02
  },
  {
    path: '/$listeners',
    component: () => import('../views/03-$listeners/father.vue')
  },
  {
    path: '/dongtai',
    component: Dongtai
  },
  {
    path: '/chacao',
    component: () => import('../views/05-插槽/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
