import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lecture from './views/Lecture.vue'
import People from './views/People.vue'
import Syllabus from './views/Syllabus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: Lecture
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
    {
      path: '/syllabus',
      name: 'syllabus',
      component: Syllabus
    }
  ]
})
