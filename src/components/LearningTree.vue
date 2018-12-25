<template>
  <div id="minder-container"></div>
</template>

<script>
import 'kity'
import 'kityminder-core'

export default {
  name: "LearningTree",
  data: () => ({
    learningtree: {},
    km: null
  }),
  created: function() {
  },
  mounted: function() {
    this.km = new kityminder.Minder({
      renderTo: '#minder-container'
    });
    this.km.on('selectionchange', this.onSelectionChange)
    this.refreshData();
  },
  methods: {
    refreshData() {
      let repo = "https://raw.githubusercontent.com/xxxzc/njufds-remote-files/master";
      this.$http.get(repo + '/json/Python_learning_tree.json').then(res => {
        this.learningtree = res.data;
        this.collapseAll(this.learningtree.root);
        this.learningtree.root.data.expandState = 'expand';
        this.learningtree.root.children[0].data.expandState = 'expand';
        this.learningtree.root.children[0].children[0].data.expandState = 'expand';
        this.km.importJson(this.learningtree);
      });
    },
    collapseAll(o) {
      if (o) {
        o.data.expandState = 'collapse';
        for (let c of o.children) {
          this.collapseAll(c);
        }
      }
    },
    getNodeTag(node) {
      if (node) {
        let tags = [node.getData().text];
        while (node.getParent()) {
          node = node.getParent();
          tags.push(node.getData('text'));
        }
        if (tags.length < 3) return '';
        let tag = tags.reverse().slice(2).join('-');
        return tag;
      }      
    },
    onSelectionChange() {
      let nodes = this.km.getSelectedNodes();
      if (nodes.length === 0) return;
      this.$emit('select-tag', this.getNodeTag(nodes[0]));
    }
  }
}
</script>

<style scoped>
#minder-container {
  height: 500px;
}
</style>
