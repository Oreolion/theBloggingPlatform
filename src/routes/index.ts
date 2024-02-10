import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Dashboard from "../layouts/dashboard.vue";
import NotFound from "../pages/NotFound.vue";
import SignupPageVue from "../pages/Signup.vue";
import LoginVue from "../pages/Login.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      //   redirect: "/landing-page",
      name: "landing-page",
      component: LandingPage,
      
    },

    { path: "/login", name: "login-page", component: LoginVue },
    { path: "/signup", name: "signup-page", component: SignupPageVue },
    {
      path: "/dashboard",
      //   redirect: "/Dashboard",
      name: "dash-board",
      component: Dashboard,
      meta: { requiresAuth: true },

    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

const isLoggedIn = () => !!localStorage.getItem("isLoggedIn");

// global navigation guard
router.beforeEach(async (to, from, next) => {

  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else if (isLoggedIn() && to.name === "login-page") {
    next({ path: "/dashboard" });
  }  else if (isLoggedIn() && to.name === "signup-page") {
    next({ path: "/dashboard" });
  }
  else {
    next();
  }


});

export default router;
