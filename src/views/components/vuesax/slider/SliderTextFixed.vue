<!-- =========================================================================================
    File Name: SliderTextFixed.vue
    Description: Add fixed text next to the value of slider
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Text Fixed" code-toggler>
        
        <p>Determine the text that will be fixed next to the value with the property <code>text-fixed</code></p>

        <div class="mt-5">
            <vs-slider color="success" text-fixed=% v-model="value1"/>
            <vs-slider color="danger" text-fixed=Min ticks step=25 v-model="value2"/>
            <vs-slider color="dark" text-fixed=K ticks max=5 v-model="value3"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-slider color=&quot;success&quot; text-fixed=% v-model=&quot;value1&quot;/&gt;
  &lt;vs-slider color=&quot;danger&quot; text-fixed=Min ticks step=25 v-model=&quot;value2&quot;/&gt;
  &lt;vs-slider color=&quot;dark&quot; text-fixed=K ticks max=5 v-model=&quot;value3&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value1:6,
      value2:25,
      value3:[2,4]
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
            value1:6,
            value2:25,
            value3:[2,4]
        }
    }
}
</script>