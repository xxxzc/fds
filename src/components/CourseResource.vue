<template>
<div>
<div class="content">
  <ul>
    <li v-for="c in resources" :key="c.name+c.author"><strong>{{c.name}}</strong> {{c.author}}</li>
  </ul>
</div>
</div>
</template>

<script>
export default {
  name: "CourseResource",
  data: () => ({
    resources: [],
    isLoading: true
  }),
  created: function() {
    this.isLoading = true;
    this.$http.get(this.repo + "info/morecourse.json").then(res => {
      this.resources = res.data;
    });
  }
}
</script>

<style scoped>

</style>
