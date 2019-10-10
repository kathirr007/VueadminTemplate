<!-- =========================================================================================
    File Name: InputLabelPlaceholder.vue
    Description: Add placeholder to input
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Label Placeholder" code-toggler>

        <span>The placeholder can become a label when the input is focused. Use the property <code>label-placeholder</code> for making this.</span>

        <div class="demo-alignment">
            <vs-input label-placeholder="Label-placeholder" v-model="value1" />
            <vs-input disabled="true" label-placeholder="Label-placeholder-disabled" v-model="value2" />
        </div>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input label-placeholder=&quot;Label-placeholder&quot; v-model=&quot;value1&quot;/&gt;
    &lt;vs-input disabled=&quot;true&quot; label-placeholder=&quot;Label-placeholder-disabled&quot; v-model=&quot;value2&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:&apos;&apos;,
      value2:&apos;&apos;
    }
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: ''
        }
    }
}
</script>