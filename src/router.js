import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Signup from './views/Signup.vue'
import ResetPassword from './views/ResetPassword.vue'
import LostPassword from './views/LostPassword.vue'
import Profile from './views/Profile.vue'
import ProfileEdit from './views/ProfileEdit.vue'
import ProfileSecurity from './views/ProfileSecurity.vue'
import Data from './views/Data.vue';
import DataFilter from './views/DataFilter.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
      {
        path: '/data',
        name: 'data',
        component: Data,
        meta: { requiresAuth: true },
      },
      {
        path: '/datafilter',
        name: 'datafilter',
        component: DataFilter,
        meta: { requiresAuth: true },
      },
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true },
      },
      {
        path: '/profile',
        component: Profile,
        meta: { requiresAuth: true },
        // children: [
        //   // {
        //   //   path: '/profile-edit',
        //   //   name: 'profile',
        //   //   component: ProfileEdit
        //   // },
        //   {
        //     path: 'profile-edit',
        //     // name: 'ProfileEdit',
        //     component: ProfileEdit
        //   },
        //   {
        //     path: 'security',
        //     component: ProfileSecurity
        //   }
        // ]
      },
      {
        path: '/ProfileEdit',
        name: 'ProfileEdit',
        component: ProfileEdit
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { guestOnly: true }
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup,
        meta: { guestOnly: true }
      },
      {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: { requiresAuth: true },
      },
      {
        path: '/lost-password',
        name: 'lost-password',
        component: LostPassword,
        meta: { guestOnly: true }
      },
      {
        path: '/reset-password/',
        name: 'reset-password',
        component: ResetPassword,
        meta: { guestOnly: true }
      },
    ]
  })


  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
  
      if (!store.getters.isAuthenticated) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  
    if (to.matched.some(record => record.meta.guestOnly)) {
      if (store.getters.isAuthenticated) {
        next({
          path: '/'
        })
      } else {
        next()
      }
    } else {
      next()
    }
  
  })
  export default router;