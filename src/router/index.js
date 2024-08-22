import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from '@/views/AddProject.vue'
import EditProject from '@/views/EditProject.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddProject',
      component: AddProject
    },
    {
      path: '/Projects/:id',
      name: 'EditProject',
      component: EditProject, 
      props: true
    }
  ]
})

export default router
