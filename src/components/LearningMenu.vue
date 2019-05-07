<template>
  <div>
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
    <aside v-if="!isLoading" class="menu container" style="width: 100%" @click="handleClick">
      <b-collapse
        v-for="tier1 in learningtree.root.children"
        :key="tier1.data.id"
        v-bind:open.sync="tier1.data.open"
      >
        <div slot="trigger" slot-scope="props" class="card-header" role="button">
          <p class="card-header-title">{{tier1.data.text}}</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
        </div>
        <ul class="menu-list">
          <li v-for="tier2 in tier1.children" :key="tier2.data.id">
            <a
              :value="tier2"
              :class="{'is-active': selectedNode.data.text === tier2.data.text}"
            >{{tier2.data.text}}</a>
          </li>
        </ul>
      </b-collapse>
    </aside>
  </div>
</template>

<script>
export default {
  name: "learning-menu",
  data: () => ({
    learningtree: {},
    isLoading: true,
    selectedParent: { data: { text: "基础语法" }, children: [] },
    selectedNode: { data: { text: "输入输出" } }
  }),
  created: function() {
    this.refreshData();
  },
  methods: {
    refreshData() {
      this.isLoading = true;
      this.$http
        .get(
          "https://raw.githubusercontent.com/mooctest-code/public-problems/master/res/python_learning_tree.km"
        )
        .then(res => {
          this.learningtree = res.data;
          this.resetOpen(this.learningtree.root);
          this.updateSelectedNode(this.learningtree.root, "输入输出");
          this.isLoading = false;
        });
    },
    resetOpen(node) {
      node.data.open = false;
      for (let child of node.children) {
        if (child.children) this.resetOpen(child);
        else child.data.open = false;
      }
    },
    getAllTags(node) {
      let tags = [];
      tags.push(node.data.text);
      if (node.children) {
        for (let child of node.children) {
          tags = tags.concat(this.getAllTags(child));
        }
      }
      return tags;
    },
    updateSelectedNode(node, text, depth = 0) {
      for (let child of node.children) {
        if (child.data.text === text) {
          this.resetOpen(this.selectedParent);
          this.selectedParent = node;
          this.selectedNode = child;
          this.$emit("select-tag", this.getAllTags(child));
          child.data.open = true;
          node.data.open = true;
        } else if (child.children && depth < 2) {
          this.updateSelectedNode(child, text, depth + 1);
        }
      }
    },
    handleClick(e) {
      this.updateSelectedNode(this.learningtree.root, e.srcElement.innerText);
    }
  }
};
</script>

<style scoped>
.menu-list {
  margin-top: 4px;
}
</style>
