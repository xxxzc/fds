<template>
<div id="Lectures">
  <slot name="header"></slot>
  <div id="lecture-table" class="container card">
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
    <b-table :data="lectureData" striped hoverable>
      <template slot-scope="props">
        <b-table-column field="date" label="时间" centered>
          <p v-if="props.row.date !== '---'">
          {{props.row.date}}
          </p>
        </b-table-column>
        <b-table-column field="topic" label="主题" centered>
          <p :class="{'is-bold': props.row.date === '---'}">
          {{props.row.topic}}
          </p>
        </b-table-column>
        <b-table-column field="slide" label="课件" centered>
          <a v-for="slide in props.row.slides" :key="slide" :href="slide" target="_blank">
            {{slide.slice(10)}}
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
    this.$http.get(this.repo + 'infos/lectures.json').then(res => {
      this.lectureData = res.data;
      this.isLoading = false;
    });
  }
}
</script>

<style scoped>
#lecture-table {
  margin-top: 40px;
  min-height: 100px;
  max-width: 800px;
}

.is-bold {
  font-weight: bold;
}
</style>

