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
    <div class="navbar-menu" @click="handleMenuClick" :class="{ 'is-active': isMenuActive }">
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
    <keep-alive>
      <router-view>
        <section class="router-view-header hero is-primary" :class="{'is-mobile': isMobile}" slot="header">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{headerTitle}}
              </h1>
            </div>
          </div>
        </section>
      </router-view>
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
    isMobile: false,
    headerTitle: '',
    routerLinks: [
      { name: '大纲', to: '/syllabus' },
      { name: '课件', to: '/lectures' }, 
      { name: '作业', to: '/assignments'},
      { name: '人员', to: '/people'},
      { name: '资源', to: '/resources'}]
  }),
  methods: {
    handleScroll () {
      this.isExpand = !this.isMobile && window.scrollY < 60;
    },
    handleMenuClick () {
      this.isMenuActive = false;
    }
  },
  watch: {
    $route: function() {
      this.headerTitle = this.$route.name;
    }  
  },
  created () {
    this.isMobile = document.documentElement.clientWidth <= 768;
    this.isExpand = !this.isMobile;
    this.headerTitle = this.$route.name;
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

.hero {
  &.is-mobile {
    padding-top: 40px;
  }
}

.icon-text {
  vertical-align: middle
}

.navbar {
  padding: 0px 10px 0px 10px;
  transition-delay: 0.5s;
  transition: all 0.4s ease-in-out;

  &.is-expanded {
    padding-top: 20px;
    padding-bottom: 20px;
    // background-color: $primary;
  }

  &.is-collapse {
    background-color: rgba(50, 50, 50, 0.5);
  }
}

.router-view-header {
  text-align: center;
}

</style>
