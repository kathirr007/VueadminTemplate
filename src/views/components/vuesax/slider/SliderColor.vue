<!-- =========================================================================================
    File Name: SliderColor.vue
    Description: Change color of slider
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>You can change the slider's color with the property color. You can also add the main <code>colors</code> like: <code>primary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>dark</code></p>

        <div class="mt-5">
            <input type="color" v-model="colorx" name="" >
            <vs-slider :color="colorx" v-model="value1"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;input type=&quot;color&quot; v-model=&quot;colorx&quot; name=&quot;&quot; &gt;
  &lt;vs-slider :color=&quot;colorx&quot; v-model=&quot;value1&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      colorx:'#db7d12',
      value1:24,
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
            colorx:'#db7d12',
            value1:24,
        }
    }
}
</script>