import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Dashboard from "../layouts/dashboard.vue";
import PostAnalyticsVue from "../pages/PostAnalytics.vue";
import NoContentPage from "../components/NoContentPage.vue";
import NotFound from "../pages/NotFound.vue";
import SignupPageVue from "../pages/Signup.vue";
import LoginVue from "../pages/Login.vue";
import AccountProfile from "../pages/AccountProfile.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },

    { path: "/login", name: "login-page", component: LoginVue },
    { path: "/signup", name: "signup-page", component: SignupPageVue },
    {
      path: "/dashboard",
      name: "dash-board",
      component: Dashboard,
      meta: { requiresAuth: true },
    //   children: [
    //   ],
    },
    {
        path: "/dashboardfeeds/:post.userId",
        name: "blog-user-post",
        component: () => import("/src/pages/BlogUserPost.vue"),
        meta: { requiresAuth: true },
      },
    {
        path: "/dashboard/postanalytics",
        name: "post-analytics",
        component: PostAnalyticsVue,
        meta: { requiresAuth: true },

      },
    {
        path: "/dashboard/nocontent",
        name: "no-content-page",
        component: NoContentPage,
        meta: { requiresAuth: true },

      },
      {
        path: "/dashboard/accountprofile",
        name: "account-profile",
        component: AccountProfile,
        meta: { requiresAuth: true },

      },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

// global navigation guard
router.beforeEach(async (to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("isLoggedIn");

  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else if (
    isLoggedIn &&
    (to.name === "login-page" ||
      to.name === "signup-page" ||
      to.name === "landing-page")
  ) {
    next({ path: "/dashboard" });
  } else {
    next();
  }
});

export default router;
