<template>
  <div id="Lectures">
    <slot name="header"></slot>
    <LectureTable v-for="part in sources" :key="part.title" :title="part.title" :url="part.url"></LectureTable>
  </div>
</template>

<script>
import LectureTable from "@/components/LectureTable";

export default {
  name: "lecture",
  components: { LectureTable },
  data: () => ({
    sources: [
      {
        title: "数据科学理论",
        url: "info/theroy.json"
      },
      {
        title: "数据科学方法",
        url: "info/method.json"
      }
    ]
  }),
  created: function() {
    this.isLoading = true;
    this.$http.get(this.repo + "info/lectures.json").then(res => {
      this.lectureData = res.data;
      this.isLoading = false;
    });
  }
};
</script>

<style scoped>
</style>

