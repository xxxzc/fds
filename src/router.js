import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import(`@/views/${view}.vue`)
}

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: loadView('Home'),
      meta: {
        icon: 'home'
      }
    },
    {
      path: '/lectures',
      name: 'Lectures',
      component: loadView('Lecture'),
      meta: {
        icon: 'calendar-text'
      }
    },
    {
      path: '/info',
      name: 'info',
      component: loadView('Info'),
      meta: {
        icon: 'bulletin-board'
      }
    },
    {
      path: '/resources',
      name: 'Resources',
      component: loadView('Resource'),
      meta: {
        icon: 'view-list'
      }
    },
    {
      path: '/assignments',
      name: 'Assignments',
      component: loadView('Assignment'),
      meta: {
        icon: 'calendar-question'
      }
    }
  ]
})