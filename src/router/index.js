import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  // },
  {
    path: '/app',
    name: 'App',
    component: () => import('../App.vue'),
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '/main',
        name: 'Main',
        component: () => import('../views/Main.vue')
      }
    ]
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Main',
    meta: {
      keepAlive: true
    },
    component: () => import('../views/Main.vue')
  },
  {
    path: '/app2',
    name: 'App2',
    component: () => import('../App2.vue'),
    children: [
      {
        path: '/recruitmentList',
        name: 'RecruitmentList',
        component: () => import('../views/RecruitmentList')
      },
      {
        path: '/resumeList',
        name: 'ResumeList',
        component: () => import('../views/ResumeList')
      }
    ]
  },
  {
    path: '/recruitmentList2',
    name: 'RecruitmentList2',
    meta: {
      keepAlive: true
    },
    component: () => import('../views/RecruitmentList2')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/Content.vue')
  },
  {
    path: '/resumeDisplay',
    name: 'ResumeDisplay',
    component: () => import('../views/ResumeDisplay.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/contentUpdate',
    name: 'ContentUpdate',
    component: () => import('../views/ContentUpdate.vue')
  },
  {
    path: '/admin',
    name: 'Login',
    meta: {
      keepAlive: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
