<!-- =========================================================================================
    File Name: ButtonColor.vue
    Description: Change color of buttons
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>There are cases in which we need something more personalized like a specific color, you can change the color of the button with the property <code>color</code> giving it as a value the color</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>If you need a gradient type button, to assign the color you have to use the property <code>gradient-color-secondary</code></span>
        </vs-alert>

        <div class="demo-alignment">

            <input type="color" v-model="colorx" name="" value="">
            <input type="color" v-model="colorx2" name="" value="">
            <vs-button :color="colorx" type="filled">Color</vs-button>
            <vs-button :color="colorx" type="border">Color</vs-button>
            <vs-button :color="colorx" type="flat">Color</vs-button>
            <vs-button :color="colorx" type="line">Color</vs-button>
            <vs-button :color="colorx" :gradient-color-secondary="colorx2" type="gradient">Color</vs-button>
            <vs-button :color="colorx" type="relief">Color</vs-button>

        </div>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;&quot;&gt;
    &lt;input type=&quot;color&quot; v-model=&quot;colorx&quot; name=&quot;&quot; value=&quot;&quot;&gt;
    &lt;input type=&quot;color&quot; v-model=&quot;colorx2&quot; name=&quot;&quot; value=&quot;&quot;&gt;
    &lt;vs-button :color=&quot;colorx&quot; type=&quot;filled&quot;&gt;Color&lt;/vs-button&gt;
    &lt;vs-button :color=&quot;colorx&quot; type=&quot;border&quot;&gt;Color&lt;/vs-button&gt;
    &lt;vs-button :color=&quot;colorx&quot; type=&quot;flat&quot;&gt;Color&lt;/vs-button&gt;
    &lt;vs-button :color=&quot;colorx&quot; type=&quot;line&quot;&gt;Color&lt;/vs-button&gt;
    &lt;vs-button :color=&quot;colorx&quot; :gradient-color-secondary=&quot;colorx2&quot; type=&quot;gradient&quot;&gt;Color&lt;/vs-button&gt;
    &lt;vs-button :color=&quot;colorx&quot;  type=&quot;relief&quot;&gt;Color&lt;/vs-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      colorx:&apos;#9ecc38&apos;,
      colorx2:&apos;#3EC9D6&apos;
    }
  },
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            colorx: '#9ecc38',
            colorx2: '#3EC9D6'
        }
    },
}
</script>
