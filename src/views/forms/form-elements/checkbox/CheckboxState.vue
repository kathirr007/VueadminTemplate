<!-- =========================================================================================
    File Name: CheckboxState.vue
    Description: Add checkbox using vs-checkbox
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="State" code-toggler>

        <span>To add a checkBox, we have the <code>vs-checkbox</code> component which expects a principal parameter <code>v-model</code> that would be our value.</span>

        <ul class="demo-alignment">
            <li>
                <vs-checkbox v-model="checkBox1">Primary - active</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox2">Primary - inactive</vs-checkbox>
            </li>
            <li>
                <vs-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vs-checkbox>
            </li>
            <li>
                <vs-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vs-checkbox>
            </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;centerx&quot;&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot;&gt;Primary - active&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox2&quot;&gt;Primary - inactive&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox disabled=&quot;true&quot; v-model=&quot;checkBox3&quot;&gt;Primary - active - disabled&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox disabled=&quot;true&quot; v-model=&quot;checkBox4&quot;&gt;Primary - inactive - disabled&lt;/vs-checkbox&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:true,
      checkBox4:false,
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
            checkBox1: true,
            checkBox2: false,
            checkBox3: true,
            checkBox4: false,
        }
    }
}
</script>
