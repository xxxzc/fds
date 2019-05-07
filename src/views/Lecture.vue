<template>
  <div id="Lectures">
    <slot name="header"></slot>
    <LectureTable v-for="part in sources" :key="part.title" :part="part"></LectureTable>
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
  })
};
</script>

<style scoped>
</style>

