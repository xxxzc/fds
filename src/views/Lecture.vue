<template>
<div id="Lectures">
  <slot name="header"></slot>
  <!-- Lecture Table -->
  <div id="lecture-table" class="container card">
    <b-table :data="lectureData" striped>
      <template slot-scope="props">
        <b-table-column field="date" label="Date">
          {{props.row.date}}
        </b-table-column>
        <b-table-column field="topic" label="Topic">
          {{props.row.topic}}
        </b-table-column>
        <b-table-column field="slide" label="Slide">
          <a :href="props.row.slide" target="_blank">
            <b-icon icon="file-powerpoint-box" type="is-dark"></b-icon>
          </a>
        </b-table-column>
      </template>
    </b-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'lecture',
  data: () => ({
    lectureData: [
      { 'date': '11/11', 'topic': 'Introduction', 'slide': 'a' },
      { 'date': '11/18', 'topic': 'Data Exploration', 'slide': 'b' },
      { 'date': '11/25', 'topic': 'Statistical Learning', 'slide': 'c' },
      { 'date': '12/2', 'topic': 'Machine Learning', 'slide': 'd' }
    ]
  })
}
</script>

<style scoped>
#lecture-table {
  margin-top: 20px
}
</style>

