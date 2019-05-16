<template>
  <div>
    <div class="lecture-table container" v-for="part in lectureData" :key="part.title">
      <div class="is-header is-title">
        <h3 class="title is-4">{{part.title}}</h3>
      </div>
      <div class="card">
        <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
        <b-table :data="part.lectures" striped hoverable>
          <template slot-scope="props">
            <b-table-column field="topic" label="主题" width="400">
              <p :class="{'is-bold': props.row.date === '---'}">{{props.row.topic}}</p>
            </b-table-column>
            <b-table-column field="slide" label="课件">
              <a
                v-for="slide in props.row.slides"
                :key="slide"
                :href="part.baseUrl + slide"
                target="_blank"
              >{{slide}}</a>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lecture-table",
  data: () => ({
    isLoading: true,
    lectureData: []
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
.lecture-table {
  max-width: 800px;
}

.card {
  min-height: 100px;
}

.is-header {
  margin-top: 30px;
  margin-bottom: 30px;
}

.is-bold {
  font-weight: bold;
}
</style>

