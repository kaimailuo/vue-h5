import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bank',
    name: 'bank',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bank" */ '../views/bank/Bank.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine/Mine.vue')
  },
  {
    path: '/record',
    name: 'record',
    component: () => import(/* webpackChunkName: "mine-record" */ '../views/mine/record/Record.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
