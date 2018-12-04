<template>
<div id="Lectures">
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Lectures
        </h1>
      </div>
    </div>
  </section>

  <!-- Lecture Table -->
  <div id="lecture-table" class="container card">
    <b-table :data="lectureData">
      <template slot-scope="props">
        <b-table-column field="date" label="Date">
          {{props.row.date}}
        </b-table-column>
        <b-table-column field="topic" label="Topic">
          {{props.row.topic}}
        </b-table-column>
        <b-table-column field="slide" label="Slide">
          {{props.row.slide}}
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
.hero {
  text-align: center
}

#lecture-table {
  margin-top: 20px
}
</style>

