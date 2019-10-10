<template>
  <vx-card title="Search Tree" code-toggler>
    <vs-input class="inputx tree-search-input float-left mr-2" placeholder="Search..." v-model.lazy="searchword" />
    <vs-button color="primary" type="filled" @click="search" class="mb-3">Search</vs-button>
    <v-tree ref='tree' :canDeleteRoot="true" :data='treeData' :draggable='true' :tpl='tpl' :halfcheck='true' :multiple="true"/>

    <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-input class=&quot;inputx tree-search-input float-left mr-2&quot; placeholder=&quot;Search...&quot; v-model.lazy=&quot;searchword&quot; /&gt;
  &lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; @click=&quot;search&quot; class=&quot;mb-3&quot;&gt;Search&lt;/vs-button&gt;
  &lt;v-tree ref=&apos;tree&apos; :canDeleteRoot=&quot;true&quot; :data=&apos;treeData&apos; :draggable=&apos;true&apos; :tpl=&apos;tpl&apos; :halfcheck=&apos;true&apos; :multiple=&quot;true&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
import { VTree, VSelectTree}  from &apos;vue-tree-halower&apos;

export default {
  data() {
    return {
      searchword: &apos;&apos;,
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
        }, {
          title: &apos;node 1-2&apos;,
          children: [{
            title: &quot;&lt;span style=&apos;color: red&apos;&gt;node 1-2-1&lt;/span&gt;&quot;
          }, {
            title: &quot;&lt;span style=&apos;color: red&apos;&gt;node 1-2-2&lt;/span&gt;&quot;
          }]
        }]
      }]
    }
  },
  methods: {
    search () {
      this.$refs.tree.searchNodes(this.searchword)
    },
    tpl (...args) {
      let {0: node, 2: parent, 3: index} = args
      let titleClass = node.selected ? &apos;node-title node-selected&apos; : &apos;node-title&apos;
      if (node.searched) titleClass += &apos; node-searched&apos;
      return &lt;span&gt;
        &lt;span class=&quot;tree-expand&quot; onClick={() =&gt; this.$refs.tree.addNode(node, {title: &apos;sync node&apos;})}&gt;+&lt;/span&gt;
         &lt;span class={titleClass} domPropsInnerHTML={node.title} onClick={() =&gt; {
           this.$refs.tree.nodeSelected(node)
         }}&gt;&lt;/span&gt;
      &lt;button class=&quot;btn-async text-warning border-none cursor-pointer px-2 py-1 mr-2 rounded&quot; onClick={() =&gt; this.asyncLoad(node)}&gt;async&lt;/button&gt;
      &lt;button class=&quot;btn-delete text-danger border-none cursor-pointer px-2 py-1 rounded&quot; onClick={() =&gt; this.$refs.tree.delNode(node, parent, index)}&gt;delete&lt;/button&gt;
      &lt;/span&gt;
    },
    async asyncLoad (node) {
      const {checked = false} = node
      this.$set(node, &apos;loading&apos;, true)
      let pro = new Promise(resolve =&gt; {
        setTimeout(resolve, 2000, [&apos;async node1&apos;, &apos;async node2&apos;])
      })
      this.$refs.tree.addNodes(node, await pro)
      this.$set(node, &apos;loading&apos;, false)
      if (checked) {
        this.$refs.tree.childCheckedHandle(node, checked)
      }
    },
  },
  components: {
    VTree,
    VSelectTree
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
@import &quot;@/assets/scss/vuesax/extraComponents/tree.scss&quot;;

button.btn-async{
  background: rgba(var(--vs-warning),0.15);
}

button.btn-delete{
  background: rgba(var(--vs-danger),0.15);
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
      searchword: '',
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
        }, {
          title: 'node 1-2',
          children: [{
            title: "<span style='color: red'>node 1-2-1</span>"
          }, {
            title: "<span style='color: red'>node 1-2-2</span>"
          }]
        }]
      }]
    }
  },
  methods: {
    search () {
      this.$refs.tree.searchNodes(this.searchword)
    },
    tpl (...args) {
      let {0: node, 2: parent, 3: index} = args
      let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
      if (node.searched) titleClass += ' node-searched'
      return <span>
        <span class="tree-expand" onClick={() => this.$refs.tree.addNode(node, {title: 'sync node'})}>+</span>
         <span class={titleClass} domPropsInnerHTML={node.title} onClick={() => {
           this.$refs.tree.nodeSelected(node)
         }}></span>
      <button class="btn-async text-warning border-none cursor-pointer px-2 py-1 mr-2 rounded" onClick={() => this.asyncLoad(node)}>async</button>
      <button class="btn-delete text-danger border-none cursor-pointer px-2 py-1 rounded" onClick={() => this.$refs.tree.delNode(node, parent, index)}>delete</button>
      </span>
    },
    async asyncLoad (node) {
      const {checked = false} = node
      this.$set(node, 'loading', true)
      let pro = new Promise(resolve => {
        setTimeout(resolve, 2000, ['async node1', 'async node2'])
      })
      this.$refs.tree.addNodes(node, await pro)
      this.$set(node, 'loading', false)
      if (checked) {
        this.$refs.tree.childCheckedHandle(node, checked)
      }
    },
  },
  components: {
    VTree,
    VSelectTree
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/extraComponents/tree.scss";

button.btn-async{
  background: rgba(var(--vs-warning),0.15);
}

button.btn-delete{
  background: rgba(var(--vs-danger),0.15);
}
</style>
