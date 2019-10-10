<template>
  <vx-card title="Async Tree" code-toggler>
    <v-tree ref="tree" :data='treeData' :multiple='false' @node-check='nodechecked' @async-load-nodes='asyncLoad'/>

    <template slot="codeContainer">
&lt;tempalte&gt;
  &lt;v-tree ref=&quot;tree&quot; :data=&apos;treeData&apos; :multiple=&apos;false&apos; @node-check=&apos;nodechecked&apos; @async-load-nodes=&apos;asyncLoad&apos;/&gt;
&lt;/tempalte&gt;

&lt;script&gt;
import { VTree, VSelectTree}  from &apos;vue-tree-halower&apos;

export default {
  data() {
    return {
      initSelected: [&apos;node-1&apos;],
      treeData: [{
        title: &apos;node1&apos;,
        expanded: false,
        async: true
      }]
    }
  },
  methods: {
    nodechecked (node, v) {
      alert(&apos;that a node-check envent ...&apos; + node.title + v)
    },
    async asyncLoad (node) {
      const {checked = false} = node
      this.$set(node, &apos;loading&apos;, true)
      let pro = await new Promise(resolve =&gt; {
        setTimeout(resolve, 2000, [{title: &apos;test1&apos;, async: true}, {title: &apos;test2&apos;, async: true}, {title: &apos;test3&apos;}])
      })
      if (!node.hasOwnProperty(&apos;children&apos;)) {
        this.$set(node, &apos;children&apos;, [])
      }
      node.children.push(...pro)
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
        expanded: false,
        async: true
      }]
    }
  },
  methods: {
    nodechecked (node, v) {
      alert('that a node-check envent ...' + node.title + v)
    },
    async asyncLoad (node) {
      const {checked = false} = node
      this.$set(node, 'loading', true)
      let pro = await new Promise(resolve => {
        setTimeout(resolve, 2000, [{title: 'test1', async: true}, {title: 'test2', async: true}, {title: 'test3'}])
      })
      if (!node.hasOwnProperty('children')) {
        this.$set(node, 'children', [])
      }
      node.children.push(...pro)
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
