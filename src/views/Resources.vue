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
    ></IEcharts>
    </div>
  </b-collapse>
</div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js';
export default {
  name: 'resources',
  components: {
    IEcharts
  },
  data: () => ({
    loading: true,
    instance: null,
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
            fontSize: 16
          },
          formatter: function(o) {
            if (o.data.name === '题目') {
              return o.data.name + ': ' + o.data.children.length;
            }
            return o.data.name;
          }
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
    refreshData() {
      this.$http.get(
        'https://raw.githubusercontent.com/xxxzc/njufds-remote-files/master/json/Python_learning_tree.json'
      ).then(res => {
        this.process(res.data.root);
        this.loading = false;
        this.options.series[0].data = [res.data.root];
      })
    },
    process(o) {
      if (!o || !o.data) {
        return;
      }
      o.name = o.data.text;
      // o.collapsed = o.name === "题目";
      if (o.children.length > 0) {
        for(let i of o.children) {
          this.process(i);
        }
      }
    },
    onReady(instance, echarts) {
      this.instance = instance;
    },
    onClick(event, instance, echarts) {
      // console.log(event)
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

