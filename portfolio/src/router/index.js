import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Projects from "@/views/Projects.vue"
import Experiences from "@/views/Experiences.vue"
import Education from "@/views/Education.vue"
import Contacts from "@/views/Contacts.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/",
      name: "projects",
      component: Projects,
    },
    {
      path: "/",
      name: "experiences",
      component: Experiences,
    },
    {
      path: "/",
      name: "education",
      component: Education,
    },
    {
      path: "/",
      name: "contacts",
      component: Contacts,
    },
  ],
})

export default router
