<template>
  <vx-card title="Dropdown Tree" code-toggler>
    <v-select-tree :data='treeData' v-model='initSelected' :multiple="true"/>

    <template slot="codeContainer">
&lt;template&gt;
  &lt;v-select-tree :data=&apos;treeData&apos; v-model=&apos;initSelected&apos; :multiple=&quot;true&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
import { VTree, VSelectTree}  from &apos;vue-tree-halower&apos;

export default {
  data() {
    return {
      initSelected: [&apos;node-1&apos;],
      treeData: [{
        title: &apos;node1&apos;,
        expanded: true,
        children: [{
          title: &apos;node 1-1&apos;,
          expanded: true,
          children: [{
            title: &apos;node 1-1-1&apos;
          }, {
            title: &apos;node 1-1-2&apos;
          }, {
            title: &apos;node 1-1-3&apos;
          }]
        }]
      }]
    }
  },
  components: {
    VTree,
    VSelectTree
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
@import &quot;@/assets/scss/vuesax/extraComponents/tree.scss&quot;;

.tree-box{
  background: #fff;
  position: relative;
  z-index: 9;

  .search-input {
    margin-top: 10px;
    width: 98%;
    display: block;
  }
}

.rmNode{
  background-color: rgba(var(--vs-danger),0.15);
  color: rgba(var(--vs-danger),1);
  line-height: 13px;
}
&lt;/style&gt;
    </template>
  </vx-card>
</template>

<script>
import { VTree, VSelectTree}  from 'vue-tree-halower'

export default {
  data() {
    return {
      initSelected: ['node-1'],
      treeData: [{
        title: 'node1',
        expanded: true,
        children: [{
          title: 'node 1-1',
          expanded: true,
          children: [{
            title: 'node 1-1-1'
          }, {
            title: 'node 1-1-2'
          }, {
            title: 'node 1-1-3'
          }]
        }]
      }]
    }
  },
  components: {
    VTree,
    VSelectTree
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/extraComponents/tree.scss";

.tree-box{
  background: #fff;
  position: relative;
  z-index: 9;

  .search-input {
    margin-top: 10px;
    width: 98%;
    display: block;
  }
}

.rmNode{
  background-color: rgba(var(--vs-danger),0.15) !important;
color: rgba(var(--vs-danger),1) !important;
  line-height: 13px !important;
}
</style>
