<template>
  <div id="Resources">
    <slot name="header"></slot>
    <b-collapse class="container card">
      <div slot="trigger" slot-scope="props" class="card-header">
        <p class="card-header-title">更多阅读</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <course-resource/>
      </div>
    </b-collapse>
    <b-collapse class="container card">
      <div slot="trigger" slot-scope="props" class="card-header">
        <p class="card-header-title">Python 基础题库</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="columns">
          <div class="column is-one-fifth">
            <LearningMenu @select-tag="onTagChanged"></LearningMenu>
          </div>
          <div class="column">
            <problem-table :tag="selectedTag"></problem-table>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import LearningTree from "@/components/LearningTree";
import ProblemTable from "@/components/ProblemTable";
import CourseResource from "@/components/CourseResource";
import LearningMenu from "@/components/LearningMenu";
export default {
  name: "resources",
  components: {
    ProblemTable,
    LearningTree,
    CourseResource,
    LearningMenu
  },
  data: () => ({
    isOpen: false,
    selectedTag: ["输入输出"]
  }),
  methods: {
    onTagChanged(tag) {
      this.selectedTag = tag;
    }
  },
  created: function() {
    this.isOpen = document.documentElement.clientWidth >= 768;
    this.isOpen = false;
  }
};
</script>

<style scoped>
.card {
  margin-top: 30px;
}

.card-header {
  text-align: center;
}
</style>

