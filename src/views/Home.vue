<template>
<div id="home">
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          The Foundation of Data Science
        </h1>
        <h2 class="subtitle">
          数据科学基础 课程主页
        </h2>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">课程简介</p>
          <p class="subtitle"></p>
          <div class="content">
            <!-- Content -->
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">通知</p>
          <p class="subtitle"></p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">资源</p>
          <p class="subtitle"></p>
        </article>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style scoped>
.hero {
  padding-top: 40px;
}

.container {
  margin-top: 20px
}
</style>
