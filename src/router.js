import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lecture from './views/Lecture.vue'
import Info from './views/Info.vue'
import Resources from './views/Resources.vue'
import Assignment from './views/Assignment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        icon: 'home'
      }
    },
    {
      path: '/lectures',
      name: 'Lectures',
      component: Lecture,
      meta: {
        icon: 'calendar-text'
      }
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      meta: {
        icon: 'bulletin-board'
      }
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources,
      meta: {
        icon: 'view-list'
      }     
    },
    {
      path: '/assignments',
      name: 'Assignments',
      component: Assignment,
      meta: {
        icon: 'calendar-question'
      }
    }
  ]
})
