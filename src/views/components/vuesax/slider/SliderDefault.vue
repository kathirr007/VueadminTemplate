<!-- =========================================================================================
    File Name: SliderDefault.vue
    Description: Rendering of default Slider
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>To implement a <strong>Slider</strong> we have the <code>vs-slider</code> component</p>

        <div class="mt-5">
            <vs-slider v-model="value1"/>
            <vs-slider disabled="true" v-model="value2"/>
            <vs-slider max=200 v-model="value3"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-slider v-model=&quot;value1&quot; /&gt;
  &lt;vs-slider disabled=&quot;true&quot; v-model=&quot;value2&quot; /&gt;
  &lt;vs-slider max=200 v-model=&quot;value3&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value1: 67,
      value2: 34,
      value3: 60
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
            value1: 67,
            value2: 34,
            value3: 60
        }
    }
}
</script>