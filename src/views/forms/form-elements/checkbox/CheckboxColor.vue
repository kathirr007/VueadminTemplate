<!-- =========================================================================================
    File Name: CheckboxColor.vue
    Description: Change color of checkbox
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <span>You can change the color of the checkBox with the property <code>color</code>. You are able to use the Main Colors or <strong>RGB</strong> and <strong>HEX</strong> colors.</span>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <ul class="demo-alignment">
            <li>
                <vs-checkbox v-model="checkBox1">Primary</vs-checkbox>
            </li>
            <li>
                <vs-checkbox color="success" v-model="checkBox2">Success</vs-checkbox>
            </li>
            <li>
                <vs-checkbox color="danger" v-model="checkBox3">Danger</vs-checkbox>
            </li>
            <li>
                <vs-checkbox color="warning" v-model="checkBox4">Warning</vs-checkbox>
            </li>
            <li>
                <vs-checkbox color="dark" v-model="checkBox5">Dark</vs-checkbox>
            </li>
            <li>
                <vs-checkbox color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vs-checkbox>
            </li>
            <li>
                <vs-checkbox color="#720ea8" v-model="checkBox7">Color HEX</vs-checkbox>
            </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;demo-alignment&quot;&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot;&gt;Primary&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox color=&quot;success&quot; v-model=&quot;checkBox2&quot;&gt;Success&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox color=&quot;danger&quot; v-model=&quot;checkBox3&quot;&gt;Danger&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox color=&quot;warning&quot; v-model=&quot;checkBox4&quot;&gt;Warning&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox color=&quot;dark&quot; v-model=&quot;checkBox5&quot;&gt;Dark&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox color=&quot;rgb(38, 187, 174)&quot; v-model=&quot;checkBox6&quot;&gt;Color RGB&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-checkbox color=&quot;#720ea8&quot; v-model=&quot;checkBox7&quot;&gt;Color HEX&lt;/vs-checkbox&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
          checkBox1: true,
          checkBox2: true,
          checkBox3: true,
          checkBox4: true,
          checkBox5: true,
          checkBox6: true,
          checkBox7: true,
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
            checkBox2: true,
            checkBox3: true,
            checkBox4: true,
            checkBox5: true,
            checkBox6: true,
            checkBox7: true,
        }
    }
}
</script>