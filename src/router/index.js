import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import addProject from '../views/addProject'
import editProject from "../views/editProject";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'addProject',
    component: addProject
  },
  {
    path: '/projects/:id',
    name: 'editProject',
    component: editProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
