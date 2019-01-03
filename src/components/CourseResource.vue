<template>
<div>
  <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>

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
    this.$http.get(this.repo + "/csv/resource.csv").then(res => {
      this.resources = res.data.split('\n').map(row => row.split(','));
      this.isLoading = false;
    });
  }
}
</script>

<style scoped>

</style>
