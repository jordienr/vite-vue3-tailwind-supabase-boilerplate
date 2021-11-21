import { createWebHistory, createRouter, RouteLocationNormalized } from "vue-router";
import { supa } from "../supabase";
import LogIn from "../views/LogIn.vue";

const routes = [
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    meta: {
      public: true
    }
  },
  {
    path: "/register",
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta:  {
      public: false
    }

  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta:  {
      public: false
    }
  },
   {
     path: '/logout',
     name: 'LogOut',
     beforeEnter: async () => {
       const { error } = await supa.auth.signOut()
       console.log('Logout error:', error)
       window.location.reload()
     },
     meta: {
       public: false
     },
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getNextRoute = (to: RouteLocationNormalized) => {
  const isLoggedIn = supa.auth.user() !== null;
  const routeIsPublic = to.meta.public;

  if (isLoggedIn && routeIsPublic) return '/'
  else if (!isLoggedIn && !routeIsPublic) return '/login'
  else if (!isLoggedIn && routeIsPublic) return to.path
  else return to.path
}

router.beforeEach((to, from, next) => {
  const nextRoute = getNextRoute(to)

  if (nextRoute === to.path) next()
  else next(nextRoute)
})

export default router;