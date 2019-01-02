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
      name: 'Home',
      component: Home
    },
    {
      path: '/lectures',
      name: 'Lectures',
      component: Lecture
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/syllabus',
      name: 'Syllabus',
      component: Syllabus
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources      
    },
    {
      path: '/assignments',
      name: 'Assignments',
      component: Assignment    
    }
  ]
})
