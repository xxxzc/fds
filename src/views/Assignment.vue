<template>
<div>
  <slot name="header"></slot>
  <div id="assignment-table" class="container card">
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
    <b-table :data="assignmentData" hoverable>
      <template slot-scope="props">
        <b-table-column field="title" label="Homework">
          <a :href="props.row.link" target="_blank">
            {{props.row.title}}
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
    isLoading: true,
    assignmentData: []
  }),
  created: function() {
    this.isLoading = true;
    this.$http.get(this.repo + '/json/assignments.json').then(res => {
      this.assignmentData = res.data;
      this.isLoading = false;
    });
  }
}
</script>

<style scoped>
#assignment-table {
  margin-top: 20px;
  min-height: 100px;
  max-width: 1000px;
}
</style>

