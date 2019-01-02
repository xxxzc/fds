<template>
<div>
  <slot name="header"></slot>
  <div class="container card">
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
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
    syl: '',
    isLoading: true
  }),
  mounted: function () {
    this.isLoading = true;
    // get syllabus markdown file
    this.$http.get('https://raw.githubusercontent.com/xxxzc/fds/master/public/README.md').then(res => {
      let MarkDownIt = require('markdown-it');
      let md = new MarkDownIt();
      this.syl = md.render(res.data);
      this.$refs.markdownContent.innerHTML = this.syl;
      this.isLoading = false;
    });
  }
}
</script>

<style scoped>
.card {
  margin-top: 20px;
  min-height: 100px;
}

</style>
