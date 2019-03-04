<template>
<section>
<slot name="header"></slot>
<div class="container" style="min-height: 200px">
  <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
  <!-- Course Infos -->
  <div v-if="isLoading === false">
  <div class="is-title has-text-centered">
    <h3 class="title is-4"><i class="mdi mdi-information-outline mdi-24px" />
    <span style="margin-left: 6px">课程信息</span></h3>
  </div>
  <div class="columns is-mobile is-centered">
  <table class="card table is-striped" style="width: 400px">
    <tbody>
      <tr v-for="info in infos.course" :key="info.key">
        <td class="is-bold">{{info.key}}</td>
        <td>{{info.value}}</td>
      </tr>
    </tbody>
  </table>
  </div>
  <!-- Evaluation -->
  <div class="is-title has-text-centered">
    <h3 class="title is-4"><i class="mdi mdi-calendar-check mdi-24px" />
    <span style="margin-left: 6px">考核方式</span></h3>
  </div>
  <div class="columns is-mobile is-centered">
  <table class="table is-bordered is-striped">
    <tbody>
      <tr v-for="info in infos.evaluation" :key="info.key">
        <td class="is-bold">{{info.name}}</td>
        <td>{{info.prop}}</td>
        <td>{{info.time}}</td>
        <td>{{info.desc}}</td>
      </tr>
    </tbody>
  </table>
  </div>
  <!-- Team -->
  <div class="is-title has-text-centered">
    <h3 class="title is-4"><i class="mdi mdi-account-group mdi-24px" />
    <span style="margin-left: 6px">教学团队</span></h3>
  </div>
  <h4 class="title is-5 is-title has-text-centered">
  教师
  </h4>
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-half-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd"
      style="min-width: 300px"
      v-for="p in infos.team.instructor.people" :key="p.name">
      <div class="card"><div class="card-content">
        <div class="media"><div class="media-left">
          <figure class="image is-48x48">
          <img class="is-rounded" :src="p.head" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{p.name}}</p>
          <p class="subtitle is-6">{{p.email}}</p>
        </div></div>
      </div></div>
    </div>
  </div>
  <h4 class="title is-5 is-title has-text-centered">
  助教们
  </h4>
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-half-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd"
      style="min-width: 220px"
      v-for="p in infos.team.tas.people" :key="p.name">
      <div class="card"><div class="card-content">
          <p class="title is-6">{{p.name}}</p>
          <p class="subtitle is-7"> {{p.email}}</p>
      </div>
      </div></div>
  </div>
  </div>
</div>
</section>
</template>

<script>
export default {
  name: 'info',
  data: () => ({
    isLoading: true,
    infos: {}
  }),
  mounted: function() {
    this.isLoading = true;
    this.$http.get(this.repo + 'info/courseInfo.json').then(res => {
      this.infos = res.data;
      this.isLoading = false;
    });
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
}

.is-bold {
  font-weight: bold;
}

.is-title {
  margin-top: 30px;
  margin-bottom: 30px;
}

</style>
