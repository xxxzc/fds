<template>
  <div class="lecture-table container">
    <div class="is-header is-title">
      <h3 class="title is-4">{{part.title}}</h3>
    </div>
    <div class="card">
      <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
      <b-table :data="lectureData" striped hoverable>
        <template slot-scope="props">
          <b-table-column field="topic" label="主题" width="400">
            <p :class="{'is-bold': props.row.date === '---'}">{{props.row.topic}}</p>
          </b-table-column>
          <b-table-column field="slide" label="课件">
            <a
              v-for="slide in props.row.slides"
              :key="slide"
              :href="repo+slide"
              target="_blank"
            >{{slide.slice(9)}}</a>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "lecture-table",
  props: ["part"],
  data: () => ({
    isLoading: true,
    lectureData: []
  }),
  created: function() {
    this.isLoading = true;
    this.$http.get(this.repo + this.part.url).then(res => {
      this.lectureData = res.data;
      this.isLoading = false;
    });
  }
};
</script>

<style scoped>
.lecture-table {
  min-height: 100px;
  max-width: 800px;
}

.is-header {
  margin-top: 30px;
  margin-bottom: 30px;
}

.is-bold {
  font-weight: bold;
}
</style>

