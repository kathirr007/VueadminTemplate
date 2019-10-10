<!-- =========================================================================================
    File Name: CheckboxArrayValue.vue
    Description: Create array using checked checkboxes
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Array Values" code-toggler>

        <span>You can have several checkBoxs linked to the same array only by using <code>v-model</code> with a value of <strong>array</strong>.</span>

        <ul class="demo-alignment">
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="luis">Luis</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="carols">Carols</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="summer">Summer</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox1" vs-value="lyon">Lyon</vs-checkbox>
            </li>
            
            <li class="op-block">
                {{checkBox1}}
            </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;centerx&quot;&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot; vs-value=&quot;luis&quot;&gt;Luis&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot; vs-value=&quot;carols&quot;&gt;Carols&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot; vs-value=&quot;summer&quot;&gt;Summer&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot; vs-value=&quot;lyon&quot;&gt;Lyon&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li class=&quot;modelx&quot;&gt;
      {{ "\{\{ checkBox1 \}\}" }}
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      checkBox1: [&apos;luis&apos;]
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
            checkBox1: ['luis']
        }
    }
}
</script>