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
      //   redirect: "/share-feedback",
      name: LandingPage,
      component: LandingPage,
    },
   
    { path: "/login", name: "login-page", component: LoginVue },
    { path: "/signup", name: "signup-page", component: SignupPageVue},
    {
        path: "/dashboard",
        //   redirect: "/Dashboard",
        name: Dashboard,
        component: Dashboard,
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

export default router;
