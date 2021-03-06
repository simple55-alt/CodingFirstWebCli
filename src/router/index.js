import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Index',
    alias: '/',
    name: 'Index',
    component: () => import('@/views/Index/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('@/views/Register'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/LocalProblem',
    name: 'LocalProblem',
    component: () => import('@/views/Problem/Problem'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/VJudgeProblem',
    name: 'VJudgeProblem',
    component: () => import('@/views/Problem/Problem'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Submit',
    name: 'Submit',
    component: () => import('@/views/Submit/Submit'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Mall',
    name: 'Mall',
    component: () => import('@/views/Mall'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/ProductDetail',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('@/views/User'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Challenge',
    name: 'Challenge',
    component: () => import('@/views/Challenge'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/ChallengeBlock',
    name: 'ChallengeBlock',
    component: () => import('@/views/ChallengeBlock'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Status',
    name: 'Status',
    component: () => import('@/views/Status/Status'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: () => import('@/views/Chat'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Contest',
    name: 'Contest',
    component: () => import('@/views/Contest'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/ContestSignUp',
    name: 'ContestSignUp',
    component: () => import('@/views/ContestSignUp'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/ContestInfo',
    name: 'ContestInfo',
    component: () => import('@/views/ContestInfo/ContestInfo'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('@/views/Admin'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/CodeView',
    name: 'CodeView',
    component: () => import('@/views/CodeView'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/MainRank',
    name: 'MainRank',
    component: () => import('@/views/MainRank'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/HonorRank',
    name: 'HonorRank',
    component: () => import('@/views/HonorRank'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Discuss',
    name: 'Discuss',
    component: () => import('@/views/Discuss'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/EditUser',
    name: 'EditUser',
    component: () => import('@/views/EditUser'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/CheckIn',
    name: 'CheckIn',
    component: () => import('@/views/CheckIn'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Message',
    name: 'Message',
    component: () => import('@/views/Message'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Verify',
    name: 'Verify',
    component: () => import('@/views/Verify'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/VideoLesson',
    name: 'VideoLesson',
    component: () => import('@/views/VideoLesson'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/AccessDenied',
    name: 'AccessDenied',
    component: () => import('@/components/AccessDenied'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Test',
    name: 'Test',
    // component: () => import('@/views/Register_des'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
