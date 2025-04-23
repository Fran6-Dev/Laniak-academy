import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/AboutUs.vue'
import Program from '../pages/Program.vue'
import Team from '../pages/Team.vue'
import Contact from '../pages/Contact.vue'
import References from '../pages/References.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/program',
    name: 'Program',
    component: Program
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/references',
    name: 'References',
    component: References
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 