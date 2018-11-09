<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation">
      <div class="container">
      <div class="navbar-brand">
        <!-- <p class="navbar-item">
          <img src="./assets/nju.jpg" width="112" height="28">
        </p> -->
        <router-link id="brand-name" class="navbar-item" to="/">数据科学基础课程</router-link>
        <span
          class="navbar-burger burger"
          :class="{ 'is-active': isMenuActive }"
          @click="isMenuActive = !isMenuActive">
          <span/>
          <span/>
          <span/>
        </span>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <router-link class="navbar-item" v-for="router in routerLinks" :key="router.name" :to="router.to" :class="{ 'is-active': router.to == $route.path }">{{router.name}}</router-link>
        </div>
      </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMenuActive: false,
    routerLinks: [
      { name: '大纲', to: '/syllabus' },
      { name: '课件', to: '/lectures' }, 
      { name: '作业', to: '/assignments'},
      { name: '人员', to: '/people'},
      { name: '资源', to: '/resources'}]
  })
}
</script>


<style lang="scss">
$primary: #6A005F;

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#brand-name {
  font-weight: bold
}

.navbar-item {
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  &.is-active {
    color: $primary;
    border-bottom: 3px solid $primary;
  }
}

</style>
