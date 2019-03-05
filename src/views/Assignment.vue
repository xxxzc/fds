<template>
<div>
  <slot name="header"></slot>
  <div id="assignment-table" class="container">
    <b-message type="is-info">
      <p>请在这个学期内尽量完成 <a href="http://code.mooctest.net" target="_blank">code.mooctest.net</a> 
      习题集中的练习题（切勿 Copy！），我们会陆续增加新题目。</p>
      <p>可以参考本站 <router-link to="/resources">资源</router-link> 
      中的 Python 学习路线图自主学习 Python 并完成上述练习。</p>
    </b-message>
    <div class="card" style="margin-top: 40px; min-height: 100px;">
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
    <b-table :data="assignmentData.assignment" hoverable>
      <template slot-scope="props">
        <b-table-column field="title" label="作业" width="200">
          <a :href="repo + props.row.link" target="_blank">
            {{props.row.title}}
          </a>
        </b-table-column>
        <b-table-column field="description" label="描述">
          {{props.row.description}}
        </b-table-column>
        <b-table-column field="date" label="截止日期" width="160">
          {{props.row.date}}
        </b-table-column>
      </template>
    </b-table>
    </div>
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
    this.$http.get(this.repo + 'info/assignments.json').then(res => {
      this.assignmentData = res.data;
      this.isLoading = false;
    });
  }
}
</script>

<style scoped>
#assignment-table {
  margin-top: 40px;
  max-width: 1000px;
}
</style>

