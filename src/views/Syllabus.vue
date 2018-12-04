<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Syllabus
        </h1>
      </div>
    </div>
  </section>

  <div class="container card">
    <div class="card-content content" ref="markdownContent">
    {{syl}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'syllabus',
  data: () => ({
    syl: "# Hello"
  }),
  created: function () {
    // get syllabus markdown file
    this.$http.get('https://raw.githubusercontent.com/xxxzc/fds/master/public/README.md').then(res => {
      let MarkDownIt = require('markdown-it');
      let md = new MarkDownIt();
      this.syl = md.render(res.data);
      this.$refs.markdownContent.innerHTML = this.syl
    });
  }
}
</script>

<style scoped>
.hero {
  text-align: center
}

.card {
  margin-top: 20px;
}

</style>
