import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/await',
    name: 'await',
    component: () => import( /* webpackChunkName: "about" */ '../views/await.vue')
  },
  {
    path: '/export',
    name: 'export',
    component: () => import( /* webpackChunkName: "about" */ '../views/export.vue')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import( /* webpackChunkName: "about" */ '../views/tree.vue')
  },
  {
    path: '/antd',
    name: 'antd',
    component: () => import( /* webpackChunkName: "about" */ '../views/antd.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import( /* webpackChunkName: "about" */ '../views/table.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import( /* webpackChunkName: "about" */ '../views/loading.vue')
  },
  {
    path: '/layer',
    name: 'layer',
    component: () => import( /* webpackChunkName: "about" */ '../views/layer.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import( /* webpackChunkName: "about" */ '../views/dialog.vue')
  },
  {
    path: '/dialog2',
    name: 'dialog2',
    component: () => import( /* webpackChunkName: "about" */ '../views/dialog2.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import( /* webpackChunkName: "about" */ '../views/test.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import( /* webpackChunkName: "about" */ '../views/computed.vue')
  },
  {
    path: '/promise',
    name: 'promise',
    component: () => import( /* webpackChunkName: "about" */ '../views/promise.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import( /* webpackChunkName: "about" */ '../views/menu.vue')
  },
  {
    path: '/vwvh',
    name: 'vwvh',
    component: () => import( /* webpackChunkName: "about" */ '../views/vwvh.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import( /* webpackChunkName: "about" */ '../views/slot.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import( /* webpackChunkName: "about" */ '../views/upload.vue')
  },
  {
    path: '/axiosJson',
    name: 'axiosJson',
    component: () => import( /* webpackChunkName: "about" */ '../views/axiosJson.vue')
  },
  {
    path: '/openlayer',
    name: 'openlayer',
    component: () => import( /* webpackChunkName: "about" */ '../views/openlayer.vue')
  },
  {
    path: '/openlayer2',
    name: 'openlayer2',
    component: () => import( /* webpackChunkName: "about" */ '../views/openlayer2.vue')
  },
  {
    path: '/openlayer3',
    name: 'openlayer3',
    component: () => import( /* webpackChunkName: "about" */ '../views/openlayer3.vue')
  },
  {
    path: '/esriLoader',
    name: 'esriLoader',
    component: () => import( /* webpackChunkName: "about" */ '../views/esriLoader.vue')
  },
  {
    path: '/echatMapHK',
    name: 'echatMapHK',
    component: () => import( /* webpackChunkName: "about" */ '../views/echatMapHK.vue')
  },
  {
    path: '/echatMapJL',
    name: 'echatMapJL',
    component: () => import( /* webpackChunkName: "about" */ '../views/echatMapJL.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router