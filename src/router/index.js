import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsIndex from '../views/PostsIndex.vue'
import PostsNew from '../views/PostsNew.vue'
import UserSignup from '../views/UserSignup.vue'
import UserLogin from '../views/UserLogin.vue'
import UserLogout from '../views/UserLogout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts',
    name: 'posts-index',
    component: PostsIndex
  },
  {
    path: '/posts/new',
    name: 'posts-new',
    component: PostsNew
  },
  {
    path: '/signup',
    name: 'signup',
    component: UserSignup
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/logout',
    name: 'logout',
    component: UserLogout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
