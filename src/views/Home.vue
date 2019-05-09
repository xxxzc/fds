<template>
  <div id="home">
    <div class="hero is-primary" style="padding-top: 50px">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Foundations of Data Science</h1>
          <h2 class="subtitle">数据科学基础 课程主页</h2>
        </div>
      </div>
    </div>
    <section id="intro" class="container">
      <!-- science and data science -->
      <div class="columns hero-body">
        <div class="column">
          <h1 class="title has-text-primary">SCIENCE 科学</h1>
          <div class="is-size-5">
            The intellectual and practical activity encompassing
            the systematic study of
            the
            <strong>structure</strong> and
            <strong>behaviour</strong> of
            the physical and natural world through
            observation and experiment.
          </div>
          <div class="columns is-mobile is-multiline">
            <div class="column content is-size-5">
              <ul>
                <li>观察 (Observation)</li>
                <li>实验 (Experiment)</li>
                <li>验证 (Verification)</li>
              </ul>
            </div>
            <div class="column content is-size-5">
              <br>
              <p>
                <span class="tag is-medium is-rounded is-success">结构</span>
              </p>
              <p>
                <span class="tag is-medium is-rounded is-warning">行为</span>
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <h1 class="title has-text-primary">DATA SCIENCE 数据科学</h1>
          <div class="content is-size-5">
            The intellectual and practical activity encompassing
            the systematic study of the structure and behaviour of
            <strong>DATA</strong>
            through observation and experiment.
          </div>
          <div class="columns is-mobile is-multiline">
            <div class="column content is-size-5 is-7">
              <ul>
                <li>观察 (Observation on Data)</li>
                <li>实验 (Experiment on Data)</li>
                <li>验证 (Verification on Data)</li>
              </ul>
            </div>
            <div class="column">
              <img src="img/datascience.png">
            </div>
          </div>
        </div>
      </div>

      <!-- cross content -->
      <div class="columns hero-body" style="margin-top: -100px">
        <div class="column">
          <h1 class="title has-text-primary">跨学科</h1>
          <div class="has-text-centered" style="margin-top: 50px; margin-bottom: 0px">
            <img src="img/cross.png" width="320px">
          </div>
        </div>
        <div class="column">
          <h1 class="title has-text-primary">全过程</h1>
          <div class="has-text-centered" style="margin-top: 50px; margin-bottom: 0px">
            <img src="img/content.png" width="320px">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
</style>
