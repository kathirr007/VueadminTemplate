<!-- =========================================================================================
    File Name: NumberInputSize.vue
    Description: Change size of number input
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Size" code-toggler>

        <span>To change the size of the component, you can use the property <code>size</code>. The allowed values are: <code>medium</code>, <code>small</code>, and <code>mini</code></span>

        <div class="demo-alignment">
            <vs-input-number v-model="number0" />
            <vs-input-number size="medium" v-model="number1" />
            <vs-input-number size="small" v-model="number2" />
            <vs-input-number size="mini" v-model="number3" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number v-model=&quot;number0&quot;/&gt;
    &lt;vs-input-number size=&quot;medium&quot; v-model=&quot;number1&quot;/&gt;
    &lt;vs-input-number size=&quot;small&quot; v-model=&quot;number2&quot;/&gt;
    &lt;vs-input-number size=&quot;mini&quot; v-model=&quot;number3&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      number0:95,
      number1:21,
      number2:67,
      number3:2
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
            number0: 95,
            number1: 21,
            number2: 67,
            number3: 2
        }
    }
}
</script>