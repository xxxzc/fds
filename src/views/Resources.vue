<template>
<div id="Resources">
  <!-- <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Resources
        </h1>
      </div>
    </div>
  </section> -->
  <b-collapse class="container card">
    <div slot="trigger" slot-scope="props" class="card-header">
      <p class="card-header-title">Python 学习路线图</p>
      <a class="card-header-icon">
          <b-icon
              :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
      </a>
    </div>
    <learning-tree @select-tag="onTagChanged"/>

    <div class="card-content">
    <problem-table :tag="selectedTag"></problem-table>
    </div>
  </b-collapse>
</div>
</template>

<script>
import LearningTree from '@/components/LearningTree'
import ProblemTable from '@/components/ProblemTable'
export default {
  name: 'resources',
  components: {
    ProblemTable, LearningTree
  },
  data: () => ({
    selectedTag: '输入输出'
  }),
  methods: {
    onTagChanged(tag) {
      this.selectedTag = tag;
    }
  }
}
</script>

<style scoped>
.hero {
  text-align: center
}

.card {
  margin-top: 10px
}

.card-header {
  text-align: center
}
</style>

