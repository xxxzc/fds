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
    // eslint-disable-next-line
    this.km = new kityminder.Minder({
        renderTo: '#minder-container'
    });
    this.km.on('selectionchange', this.onSelectionChange);
    this.refreshData();
  },
  methods: {
    refreshData() {
      this.$http.get(this.repo + '/km/Python_learning_tree.km').then(res => {
        this.learningtree = res.data;
        this.expandFirstThreeLevel(this.learningtree.root, 0);
        this.learningtree.root.children[0].children[0].data.expandState = 'expand';
        this.km.importJson(this.learningtree);
      });
    },
    expandFirstThreeLevel(o, depth) {
      if (o) {
        o.data.expandState = depth < 2 ? 'expand' : 'collapse';
        for (let c of o.children) {
          this.expandFirstThreeLevel(c, depth+1);
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
  height: 600px;
}
</style>
