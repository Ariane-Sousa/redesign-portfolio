import { createRouter, createWebHistory } from "vue-router"
import About from "@/views/About.vue"
import Projects from "@/views/Projects.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: About,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
  ],
})

export default router
