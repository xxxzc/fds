<template>
<div id="app">
  <nav class="navbar is-fixed-top" :class="{'is-expanded': isExpand, 'is-collapse': !isExpand}" ref="navbar" role="navigation">
    <div class="container">
    <div class="navbar-brand">
      <!-- <p class="navbar-item">
        <img src="./assets/nju.jpg" width="112" height="28">
      </p> -->
      <router-link id="brand-name" class="navbar-item" to="/">数据科学基础课程</router-link>
      <a class="navbar-item" href="https://github.com/xxxzc/fds" target="_blank">
        <b-icon icon="github-circle" size="is-medium" type="is-light"></b-icon>
      </a>
      <span
        class="navbar-burger burger"
        :class="{ 'is-active': isMenuActive }"
        @click="isMenuActive = !isMenuActive">
        <span/>
        <span/>
        <span/>
      </span>
    </div>
    <div class="navbar-menu" @click="isMenuActive = false" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-end">
        <router-link class="navbar-item" v-for="router in routerLinks" 
          :key="router.name" :to="router.to" 
          :class="{ 'is-selected': router.to == $route.path }">
            {{router.name}}
        </router-link>
      </div>
    </div>
    </div>
  </nav>
  <div class="is-overlay">
  <div style="height: 72px; background-color: #6A005F"></div>
  <keep-alive>
  <router-view/>
  </keep-alive>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
    </div>
  </footer>
</div>
</template>

<script>
export default {
  data: () => ({
    isMenuActive: false,
    isExpand: true,
    routerLinks: [
      { name: '大纲', to: '/syllabus' },
      { name: '课件', to: '/lectures' }, 
      { name: '作业', to: '/assignments'},
      { name: '人员', to: '/people'},
      { name: '资源', to: '/resources'}]
  }),
  methods: {
    handleScroll () {
      this.isExpand = screen.width >= 768 && window.scrollY < 60;
    }
  },
  created () {
    this.isExpand = screen.width >= 768;
    window.addEventListener('scroll', this.handleScroll, true);
  }
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
  border-bottom: 3px solid transparent;
  font-weight: bold;
  &.is-selected {
    border-bottom: 3px solid white;
  }
}

.icon-text {
  vertical-align: middle
}

.navbar {
  padding: 0px 10px 0px 10px;
  transition-delay: 0.5s;
  transition: all 0.5s ease-in-out;

  &.is-expanded {
    padding-top: 20px;
    padding-bottom: 20px;
    // background-color: $primary;
  }

  &.is-collapse {
    background-color: rgba(0, 0, 0, 0.45);
  }
}

</style>
