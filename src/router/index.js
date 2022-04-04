import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login'),
  },
  {
    // path: '/dashboard',
    // name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/dashboard')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
