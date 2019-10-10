<!-- =========================================================================================
    File Name: SliderRange.vue
    Description: Add range to your sliders
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Range" code-toggler>
        
        <p>With Range you can allow the user to select a range inside a range of allowed values. You can use the v-model property with <strong>Array</strong> and a minimum and maximum value represented as: <code>[min, max]</code></p>
        <div class="mt-5">
            <vs-slider color="warning" v-model="value1"/>
            <vs-slider color="danger" ticks step=10 v-model="value2"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-slider color=&quot;warning&quot; v-model=&quot;value1&quot;/&gt;
  &lt;vs-slider color=&quot;danger&quot; ticks step=10 v-model=&quot;value2&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:[60,90],
      value2:[30,40]
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
            value1: [60,90],
            value2: [30,40]
        }
    }
}
</script>