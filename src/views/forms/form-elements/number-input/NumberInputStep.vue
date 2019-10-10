<!-- =========================================================================================
    File Name: NumberInputStep.vue
    Description: Add step support to increment and decrement
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Step" code-toggler>

        <span>To change the number to be added or decreased of the component, you can use the property <code>step</code></span>

        <div class="demo-alignment">
            <vs-input-number v-model="number0" :step="5"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number v-model=&quot;number0&quot; :step=&quot;5&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      number0:5,
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
            number0: 5,
        }
    }
}
</script>