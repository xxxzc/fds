<template>
  <section>
    <b-table :data="filteredProblems" hoverable>
      <template slot-scope="props">
        <b-table-column field="name" label="题目名">
          {{props.row[0]}}
        </b-table-column>
        <b-table-column field="description" label="简单描述" width="280">
          {{props.row[2]}}
        </b-table-column>
        <b-table-column field="difficulty" label="难度">
          {{props.row[1]}}
        </b-table-column>
        <b-table-column field="key" label="知识点">
          <b-taglist>
          <b-tag v-for="tag in props.row[3].split('|')" 
            :key="tag" :type="randomizeColor(tag, props.row[3].split('|'))">
            {{tag}}
          </b-tag>
          </b-taglist>
        </b-table-column>
        <b-table-column field="link" label="去做题">
          <a href="http://code.mooctest.net/#/exercise" target="_blank">
            <b-icon icon="open-in-new"></b-icon>
          </a>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  name: "ProblemTable",
  props: {
    tag: {
      type: String,
      default: '输入输出'
    }
  },
  data: () => ({
    problemSet: [],
  }),
  created: function() {
    this.refreshData();
  },
  computed: {
    filteredProblems: function() {
      if (this.tag === '') return [];
      return this.problemSet.filter(problem => problem[3].indexOf(this.tag) != -1);
    }
  },
  methods: {
    refreshData() {
      this.$http.get(this.repo + '/csv/ProblemInfo.csv').then(res => {
        this.problemSet = res.data.split('\n').slice(1).map(row => row.split(','));
      });
    },
    randomizeColor(item, items) {
      let color = ['info', 'warning', 'success', 'danger'];
      return 'is-' + color[items.indexOf(item)%4];
    }
  }
}
</script>

<style scoped>

</style>

