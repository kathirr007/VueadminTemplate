<!-- =========================================================================================
    File Name: NumberInputDecimal.vue
    Description: Add support for decimal increment
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Decimal" code-toggler>

        <span>Number Input also supports decimal values</span>

        <div class="demo-alignment">
            <vs-input-number v-model="number0" :step="0.5"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number v-model=&quot;number0&quot; :step=&quot;0.5&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      number0:1.5,
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
            number0: 1.5,
        }
    }
}
</script>