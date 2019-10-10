<!-- =========================================================================================
  File Name: ContextMenuSimple.vue
  Description: Simple context menu Demo
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card title="Simple" code-toggler>
    <vs-button @contextmenu.prevent="$refs.menu.open">Right click on me</vs-button>
    <vue-context ref="menu">
        <li>
          <a href="" @click="optionClicked($event.target.innerText)">Option 1</a>
        </li>
        <li>
          <a href="" @click="optionClicked($event.target.innerText)">Option 2</a>
        </li>
    </vue-context>
    <template slot="codeContainer">
&lt;template&gt;
    &lt;vs-button @contextmenu.prevent=&quot;$refs.menu.open&quot;&gt;Right click on me&lt;/vs-button&gt;
    &lt;vue-context ref=&quot;menu&quot;&gt;
        &lt;ul class=&quot;bordered-items p-0&quot;&gt;
            &lt;li @click=&quot;optionClicked($event.target.innerText)&quot;&gt;Option 1&lt;/li&gt;
            &lt;li @click=&quot;optionClicked($event.target.innerText)&quot;&gt;Option 2&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/vue-context&gt;
&lt;/template&gt;

&lt;script&gt;
import { VueContext } from 'vue-context';

export default {
    components: {
        VueContext
    },
    methods: {
        optionClicked(text) {
            this.$vs.notify({
                title: 'Context Menu',
                text: text,
                icon: 'feather',
                iconPack: 'icon-alert-circle',
                color: 'primary'
            })
        }
    }
}
&lt;/script&gt;
    </template>
  </vx-card>
</template>

<script>
import { VueContext } from 'vue-context';

export default{
  components: {
    VueContext
  },
  methods: {
    optionClicked(text) {
      this.$vs.notify({
        title:'Context Menu',
        text: text,
        icon: 'feather',
        iconPack: 'icon-alert-circle',
        color:'primary'
      })
    }
  }
}
</script>
