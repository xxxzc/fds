<template>
  <div id="Lectures">
    <slot name="header"></slot>
    <LectureTable></LectureTable>
  </div>
</template>

<script>
import LectureTable from "@/components/LectureTable";

export default {
  name: "lecture",
  components: { LectureTable }
};
</script>

<style scoped>
</style>

