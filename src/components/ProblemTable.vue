<template>
  <section>
    <b-table v-show="problems" :data="problems">
      <template slot-scope="props">
        <b-table-column field="name" label="题目名">
          {{props.row[0]}}
        </b-table-column>
        <b-table-column field="description" label="简单描述" width="280">
          {{props.row[5]}}
        </b-table-column>
        <b-table-column field="difficulty" label="难度">
          {{props.row[4]}}
        </b-table-column>
        <b-table-column field="key" label="知识点">
          <b-taglist>
          <b-tag v-for="tag in props.row[3].split('|')" 
            :key="tag" :type="randomizeColor(tag, props.row[3].split('|'))">
            {{tag}}
          </b-tag>
          </b-taglist>
        </b-table-column>
        <b-table-column field="link" label="去做题">
          <a>
            <b-icon icon="open-in-new"></b-icon>
          </a>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  name: "ProblemTable",
  props: ['problems'],
  data: () => ({

  }),
  methods: {
    randomizeColor(item, items) {
      let color = ['info', 'warning', 'success', 'danger'];
      return 'is-' + color[items.indexOf(item)%4];
    }
  }
}
</script>

<style scoped>

</style>

