<!-- =========================================================================================
    File Name: NumberInputMinMax.vue
    Description: Give minimum and maximum value to number input
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Min - Max" code-toggler>

        <span>You can restrict the maximum number or the minimum with the properties <code>min</code>, <code>max</code></span>

        <div class="demo-alignment">
            <vs-input-number min="13" max="21" v-model="number1" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number min=&quot;13&quot; max=&quot;21&quot; v-model=&quot;number1&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      number1:21,
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
            number1: 21,
        }
    }
}
</script>