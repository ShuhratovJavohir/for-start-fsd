import { createRouter, createWebHistory } from "vue-router";
import UserPage from "@/pages/user/ui/UserPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "UserPage",
      component: UserPage,
    },
  ],
});

export default router;
