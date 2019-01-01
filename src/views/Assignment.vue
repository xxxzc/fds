<template>
<div id="Resources">
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Assignments
        </h1>
      </div>
    </div>
  </section>
  <div class="container card">
    <b-table :data="assignmentData" hoverable>
      <template slot-scope="props">
        <b-table-column field="topic" label="Homework">
          <a :href="props.row.slide" target="_blank">
            {{props.row.topic}}
          </a>
        </b-table-column>
        <b-table-column field="description" label="Description" width="600">
          {{props.row.description}}
        </b-table-column>
        <b-table-column field="date" label="Due Date">
          {{props.row.date}}
        </b-table-column>
      </template>
    </b-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'assignments',
  data: () => ({
    assignmentData: [
      { 'date': '11/11', 'topic': 'Introduction', 'slide': 'a', 'description': '第一次作业' },
      { 'date': '11/18', 'topic': 'Data Exploration', 'slide': 'b', 'description': '第二次作业' },
      { 'date': '11/25', 'topic': 'Statistical Learning', 'slide': 'c', 'description': '第三次作业' },
      { 'date': '12/2', 'topic': 'Machine Learning', 'slide': 'd', 'description': '第四次作业' }
    ]
  })
}
</script>

<style scoped>
.hero {
  text-align: center
}

.card {
  margin-top: 20px
}
</style>

