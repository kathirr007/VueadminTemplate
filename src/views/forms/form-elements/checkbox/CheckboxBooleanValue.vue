<!-- =========================================================================================
    File Name: CheckboxBooleanValue.vue
    Description: Checkboxes and boolean value in data
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Boolean Value" code-toggler>

        <span>In most cases you will need a boolean data type while working with checkBoxes. For making this possible you have to link a boolean value in <code>v-model</code></span>

        <ul class="demo-alignment">
            <li>
                <vs-checkbox v-model="checkBox1">{{checkBox1}}</vs-checkbox>
            </li>
            <li>
                <vs-checkbox v-model="checkBox2">{{checkBox2}}</vs-checkbox>
            </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;centerx&quot;&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot;&gt;{{ &quot;\{\{ checkBox1 \}\}&quot; }}&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox2&quot;&gt;{{ &quot;\{\{ checkBox2 \}\}&quot; }}&lt;/vs-checkbox&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      checkBox1: true,
      checkBox2: false,
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
        }
    }
}
</script>