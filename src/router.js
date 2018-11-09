import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lecture from './views/Lecture.vue'
import People from './views/People.vue'
import Syllabus from './views/Syllabus.vue'
import Resources from './views/Resources.vue'
import Assignment from './views/Assignment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lectures',
      name: 'lectures',
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
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources      
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: Assignment    
    }
  ]
})
