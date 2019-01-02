<template>
<div id="Lectures">
  <slot name="header"></slot>
  <div id="lecture-table" class="container card">
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
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
    isLoading: true,
    lectureData: []
  }),
  created: function() {
    this.isLoading = true;
    this.$http.get(this.repo + '/json/lectures.json').then(res => {
      this.lectureData = res.data;
      this.isLoading = false;
    });
  }
}
</script>

<style scoped>
#lecture-table {
  margin-top: 20px;
  min-height: 100px;
}
</style>

