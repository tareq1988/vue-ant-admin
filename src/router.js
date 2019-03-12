import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import Admin from './views/Admin.vue'
import Dashboard from './views/Dashboard.vue'
import Users from './views/Users.vue'

import Login from './views/auth/Login.vue'
import Logout from './views/auth/Logout.vue'
import Signup from './views/auth/Signup.vue'
import ResetPassword from './views/auth/ResetPassword.vue'
import LostPassword from './views/auth/LostPassword.vue'
import Profile from './views/Profile.vue'
import ProfileEdit from './views/ProfileEdit.vue'
import ProfileSecurity from './views/ProfileSecurity.vue'
import Forbidden from './views/Forbidden.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
      path: '/',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [{
          path: '',
          component: Dashboard
        },
        {
          path: '/users',
          name: 'Users',
          component: Users
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile,
        }
      ]
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
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/lost-password',
      name: 'lost-password',
      component: LostPassword,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/reset-password/',
      name: 'reset-password',
      component: ResetPassword,
      meta: {
        guestOnly: true
      }
    },
    {
      path: "/forbidden",
      name: 'Forbidden',
      component: Forbidden
    },
    {
      path: "*",
      name: '404',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!store.getters.isAuthenticated) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }

  } else if (to.matched.some(record => record.meta.guestOnly)) {
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
