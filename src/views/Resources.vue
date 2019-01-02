<template>
<div id="Resources">
  <slot name="header"></slot>
  <b-collapse class="container card" v-bind:open.sync="isOpen">
    <div slot="trigger" slot-scope="props" class="card-header">
      <p class="card-header-title">Python 学习路线图</p>
      <a class="card-header-icon">
          <b-icon
              :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
      </a>
    </div>
    <learning-tree v-if="isOpen" @select-tag="onTagChanged"/>

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
    isOpen: true,
    selectedTag: '输入输出'
  }),
  methods: {
    onTagChanged(tag) {
      this.selectedTag = tag;
    }
  },
  created: function() {
    this.isOpen = document.documentElement.clientWidth >= 768;
  }
}
</script>

<style scoped>
.card {
  margin-top: 20px
}

.card-header {
  text-align: center
}
</style>

