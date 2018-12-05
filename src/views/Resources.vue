<template>
<div id="Resources">
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Resources
        </h1>
      </div>
    </div>
  </section>
  <b-collapse class="container card">
    <div slot="trigger" slot-scope="props" class="card-header">
      <p class="card-header-title">Python 学习路线图</p>
      <a class="card-header-icon">
          <b-icon
              :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
      </a>
    </div>
    <div class="card-content tree">
    <IEcharts
      :option="options"
      :loading="loading"
      @ready="onReady"
      @click="onClick"
      :resiable="true"
    ></IEcharts>
    </div>

    <div class="card-content">
    <problem-table :problems="selectedProblems"></problem-table>
    </div>
  </b-collapse>
</div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/lite.js';
import 'echarts/lib/chart/map';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import ProblemTable from '@/components/ProblemTable'
export default {
  name: 'resources',
  components: {
    IEcharts, ProblemTable
  },
  data: () => ({
    loading: true,
    instance: null,
    problemTree: {},
    selectedProblems: [],
    options: {
      title: {
        show: false,
        text: 'Pyhon 学习路线图',
        textStyle: {
          aligh: 'center'
        },
        left: 'center'
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {
            show: true
          },
          restore: {
            show: true
          }
        }
      },
      tooltip: {
        trigger: 'item',
        triggeron: 'mousemove'
      },
      series: [{
        type: 'tree',
        data: [],
        symbolSize: 14,
        orient: 'LR',
        roam: 'move',
        label: {
          normal: {
            position: 'left',
            verticalAlign: 'middle',
            aligh: 'right',
            fontSize: 16,
            formatter: function(o) {
              if (o.depth === 0) return o.data.name;
              return o.data.name + ': ' + o.data.pcnt;
            }
          },
        },
        leaves: {
          label: {
            normal: {
              position: 'right',
              verticalAlign: 'middle',
              aligh: 'left'
            }
          }
        },
        expandAndCollapse: true,
        initialTreeDepth: 1,
        animationDuration: 300,
        animationDurationUpdate: 500
      }]
    }
  }),
  created: function() {
    this.refreshData()
  },
  methods: {
    fetchData(url) {
      return new Promise((resolve, reject) => {
        this.$http.get(url).then(response => {
          resolve(response.data);
        }).catch(response => {
          reject('Failed to Fetch Data from ' + url);
        })
      })
    },
    refreshData() {
      let repo = "https://raw.githubusercontent.com/xxxzc/njufds-remote-files/master";
      Promise.all([
          this.fetchData(repo + '/json/Python_learning_tree.json'),
          this.fetchData(repo + '/csv/ProblemInfo.csv')
        ]).then(datasets => {
          let root = datasets[0].root;
          root.name = root.data.text;
          root.depth = 0;
          root.route = '';
          root.problems = [];
          root.childIdx = {};
          this.addPropsToTree(root);
          
          // add problems to node
          let fatherOfDep2 = {}; 
          for (let i of root.children) {
            for (let j of i.children) {
              fatherOfDep2[j.name] = i.name;
            }
          }
          for (let x of datasets[1].split('\n').slice(1)) {
            for (let i of x.split(',')[3].split('|')) {
              // for each knowledge point
              let routes = i.split('-');
              let name = fatherOfDep2[routes[0]];
              if (root.childIdx[name] === undefined)
                continue;
              let obj = root.children[root.childIdx[name]];
              for (let r of routes) {
                if (obj.childIdx[r] === undefined)
                  this.addChild(r, obj);
                obj = obj.children[obj.childIdx[r]];
              }
              if (!obj) continue;
              obj.problems.push(x);
            }           
          }

          // count number of problems of each node
          this.countProblems(root);

          this.loading = false;
          this.options.series[0].data = [root];
      });
    },
    countProblems(o) {
      if (!o.children) {
        o.pcnt = o.problems.length;
        return o.problems;
      }
      let problems = [];
      for (let i of o.children) {
        problems.push(...this.countProblems(i));
      }
      problems.push(...o.problems);
      o.pcnt = (new Set(problems)).size;
      return problems;
    },
    collectProblems(o) {
      if (!o.children) return o.problems;
      let problems = [];
      for (let i of o.children) {
        problems.push(...this.collectProblems(i));
      }
      problems.push(...o.problems);
      return [...new Set(problems)];
    },
    addChild(name, obj) {
      let child = {}
      child.children = [];
      this.setProps(child, name, obj);
      obj.children.push(child);
      obj.childIdx[child.name] = obj.children.length - 1;     
    },
    setProps(i, name, o) {
      i.name = name;
      i.depth = o.depth + 1;
      i.collapsed = true;
      i.route = o.route + '-' + i.name;
      i.father = o.name;
      i.childIdx = {};
      i.problems = [];   
    },
    addPropsToTree(o) {
      let idx = 0;
      for(let i of o.children) {
        this.setProps(i, i.data.text, o);
        o.childIdx[i.name] = idx;
        idx += 1;
        if (!i.children) continue;
        this.addPropsToTree(i);
      }
    },
    onReady(instance) {
      this.instance = instance;
    },
    onClick(event, instance) {
      if (event.data.depth > 1) {
        this.selectedProblems = this.collectProblems(event.data).map(x => x.split(','));
      } else {
        this.selectedProblems = [];
      }
      if (event.data.depth == 1) {
        for (let i of this.options.series[0].data[0].children) {
          if (i.name !== event.data.name)
            i.collapsed = true;
          else i.collapsed = !i.collapsed;
        }
        instance.setOption({
          series: [{
            data: this.options.series[0].data
          }]
        })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  text-align: center
}

.card {
  margin-top: 20px
}

.tree {
  height: 600px
}

.card-header {
  text-align: center
}
</style>

