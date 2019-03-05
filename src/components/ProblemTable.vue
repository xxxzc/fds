<template>
  <section>
    <b-field grouped>
      <b-input v-model="filter" placeholder="搜索关键词" style="width: 300px"></b-input>
    </b-field>
    <b-table :data="filteredProblems" narrowed
        hoverable :paginated="true" :per-page="10"
        :default-sort="['difficulty', 'asc']">
      <template slot-scope="props">
        <b-table-column field="name" label="题目名">
          {{props.row[0]}}
        </b-table-column>
        <b-table-column field="difficulty" label="难度" width="90" centered sortable :custom-sort="sortDifficulty">
          <b-tag :type="getDiffcultyTagType(props.row[1])" rounded>{{getDiffcultyTag(props.row[1])}}</b-tag>
        </b-table-column>
        <b-table-column field="description" label="简单描述">
          {{props.row[2]}}
        </b-table-column>
        <b-table-column field="key" label="知识点" style="max-width: 300px">
          <div class="buttons">
            <a v-for="(item, index) of props.row[3].split('|')" class="button is-small is-outlined" 
              :class="colors[index]" @click.stop="selectTag" :key="item">
                {{item}}
            </a>
          </div>
        </b-table-column>
        <b-table-column field="link" label="去做题">
          <a v-if="props.row[7][0] !== 'n'" :href="props.row[7]" target="_blank">
            <b-icon type="is-primary" icon="open-in-new"></b-icon>
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
    selectedTag: '',
    colors: ['is-info', 'is-success', 'is-warning', 'is-danger']
  }),
  created: function() {
    this.refreshData();
  },
  computed: {
    filteredProblems: function() {
      let problems = this.problemSet;
      if (this.filter.length > 0) {
        let filter = this.filter.toLocaleLowerCase();
        problems = problems.filter(problem => problem.some(x => x.toLocaleLowerCase().indexOf(filter) != -1))
      }
      if (this.selectedTag === '') return problems;
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
      this.$http.get('https://raw.githubusercontent.com/mooctest-code/public-problems/master/res/probleminfo.csv').then(res => {
        this.problemSet = res.data.split('\n').slice(1).map(row => row.split(','));
      });
    },
    getDiffcultyTag(score) {
      if (score < 3) return 'Easy';
      else if (score == 3) return 'Medium';
      else return 'Hard';
    },
    getDiffcultyTagType(score) {
      if (score < 3) return 'is-success';
      else if (score == 3) return 'is-warning';
      else return 'is-danger';
    },
    randomizeColor(item, items) {
      return this.colors[items.indexOf(item)%4];
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

