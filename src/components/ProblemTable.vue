<template>
  <section>
    <b-field grouped>
      <b-input v-model="filter" placeholder="搜索关键词" style="width: 300px"></b-input>
    </b-field>
    <b-table :data="filteredProblems" 
        hoverable :paginated="true" :per-page="10"
        :default-sort="['difficulty', 'asc']">
      <template slot-scope="props">
        <b-table-column field="name" label="题目名">
          {{props.row[0]}}
        </b-table-column>
        <b-table-column field="description" label="简单描述" width="280">
          {{props.row[2]}}
        </b-table-column>
        <b-table-column field="difficulty" label="难度" sortable :custom-sort="sortDifficulty">
          {{props.row[1]}}
        </b-table-column>
        <b-table-column field="key" label="知识点">
          <b-field grouped group-multiline>
            <div class="control" v-for="tag in props.row[3].split('|')" @click.stop="selectTag"
                :key="tag">
              <b-tag :type="randomizeColor(tag, props.row[3].split('|'))">
                {{tag}}
              </b-tag>
            </div>
          </b-field>
        </b-table-column>
        <b-table-column field="link" label="去做题">
          <a v-if="props.row[7] === 'null'" :href="props.row[7]" target="_blank">
            <b-icon icon="open-in-new"></b-icon>
          </a>
          <p v-else>暂无</p>
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
      default: ''
    }
  },
  data: () => ({
    problemSet: [],
    filter: '',
    selectedTag: ''
  }),
  created: function() {
    this.refreshData();
  },
  computed: {
    filteredProblems: function() {
      if (this.tag === '') return this.problemSet;
      let problems = this.problemSet;
      if (this.filter.length > 0) {
        let filter = this.filter.toLocaleLowerCase();
        problems = problems.filter(problem => problem.some(x => x.toLocaleLowerCase().indexOf(filter) != -1))
      }
      return problems.filter(problem => problem[3].indexOf(this.selectedTag) != -1);
    }
  },
  watch: {
    tag: function() {
      this.selectedTag = this.tag;
    }
  },
  methods: {
    refreshData() {
      this.$http.get(this.repo + '/infos/ProblemInfo.csv').then(res => {
        this.problemSet = res.data.split('\n').slice(1).map(row => row.split(','));
      });
    },
    randomizeColor(item, items) {
      let color = ['info', 'warning', 'success', 'danger'];
      return 'is-' + color[items.indexOf(item)%4];
    },
    sortDifficulty(a, b, isAsc) {
      if (a[1] === b[1]) return 0;
      else {
        if (a[1] < b[1])
          isAsc = ~isAsc;
        return isAsc * 2 - 1;
      }
    },
    selectTag(e) {
      this.selectedTag = e.srcElement.innerText;
    }
  }
}
</script>

<style scoped>

</style>

