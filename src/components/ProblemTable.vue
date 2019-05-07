<template>
  <section>
    <b-field grouped>
      <b-input v-model="filter" placeholder="搜索关键词" style="width: 300px"></b-input>
    </b-field>
    <b-table
      v-if="filteredProblems.length > 0"
      :data="filteredProblems"
      narrowed
      hoverable
      :paginated="true"
      :per-page="10"
      :default-sort="['difficulty', 'asc']"
    >
      <template slot-scope="props">
        <b-table-column field="name" width="160" label="题目名">{{props.row[0]}}</b-table-column>
        <b-table-column field="description" width="260" label="简单描述">{{props.row[1]}}</b-table-column>
        <b-table-column
          field="difficulty"
          label="难度"
          width="90"
          centered
          sortable
          :custom-sort="sortDifficulty"
        >
          <b-tag :type="getDiffcultyTagType(props.row[2])" rounded>{{getDiffcultyTag(props.row[2])}}</b-tag>
        </b-table-column>
        <b-table-column field="key" label="知识点" style="max-width: 300px">
          <div class="buttons">
            <a
              v-for="(item, index) of props.row[3].split('|')"
              class="button is-small is-outlined"
              :class="colors[index]"
              @click.stop="selectTag"
              :key="item"
            >{{item}}</a>
          </div>
        </b-table-column>
        <b-table-column field="link" label="去做题">
          <a
            v-if="props.row[5].length === 9"
            :href="'http://code.mooctest.net/#/exercise/edit/' + props.row[5]"
            target="_blank"
          >
            <b-icon type="is-primary" icon="open-in-new"></b-icon>
          </a>
          <p v-else>暂无</p>
        </b-table-column>
      </template>
    </b-table>
    <div v-else class="subtitle is-5">Oops，当前分类下没有题目。</div>
  </section>
</template>

<script>
export default {
  name: "ProblemTable",
  props: {
    tag: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    problemSet: [],
    filter: "",
    selectedTag: "",
    colors: ["is-info", "is-success", "is-warning", "is-danger"]
  }),
  created: function() {
    this.refreshData();
  },
  computed: {
    filteredProblems: function() {
      let problems = this.problemSet;
      if (this.filter.length > 0) {
        let filter = this.filter.toLocaleLowerCase();
        problems = problems.filter(problem =>
          problem.some(x => x.toLocaleLowerCase().indexOf(filter) != -1)
        );
      }
      if (!this.selectedTag) return problems;

      return problems.filter(problem =>
        this.selectedTag.some(x => problem[3].indexOf(x) != -1)
      );
    }
  },
  watch: {
    tag: function() {
      this.selectedTag = this.tag;
    }
  },
  methods: {
    refreshData() {
      this.$http
        .get(
          "https://raw.githubusercontent.com/mooctest-code/public-problems/master/probleminfo.csv"
        )
        .then(res => {
          this.problemSet = res.data.split("\n").map(row => row.split(","));
          this.problemSet = this.problemSet.slice(
            1,
            this.problemSet.length - 1
          );
        });
    },
    getDiffcultyTag(score) {
      if (score < 3) return "Easy";
      else if (score == 3) return "Medium";
      else return "Hard";
    },
    getDiffcultyTagType(score) {
      if (score < 3) return "is-success";
      else if (score == 3) return "is-warning";
      else return "is-danger";
    },
    randomizeColor(item, items) {
      return this.colors[items.indexOf(item) % 4];
    },
    sortDifficulty(a, b, isAsc) {
      if (a[2] === b[2]) return 0;
      else {
        if (a[2] < b[2]) isAsc = ~isAsc;
        return isAsc * 2 - 1;
      }
    },
    selectTag(e) {
      this.selectedTag = [e.srcElement.innerText];
    }
  }
};
</script>

<style scoped>
</style>

