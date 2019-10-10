<!-- =========================================================================================
    File Name: PopupBackground.vue
    Description: Change background when popup opens
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Background" code-toggler>
        
        <p>You can change the background of the property with the property <code>background-color</code> or if you want to change the color of the popup you can use the property <code>background-color-popup</code></p>
        
        <div class="demo-alignment">
            <input v-model="colorx" type="color" name="" value="">
            <vs-button :color="colorx" @click="popupActive=true" type="filled">Open background popup</vs-button>

            <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Background" :active.sync="popupActive">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </vs-popup>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

      &lt;input v-model=&quot;colorx&quot; type=&quot;color&quot; name=&quot;&quot; value=&quot;&quot;&gt;
      &lt;vs-button :color=&quot;colorx&quot; @click=&quot;popupActive=true&quot; type=&quot;filled&quot;&gt;Open background popup&lt;/vs-button&gt;

      &lt;vs-popup background-color=&quot;rgba(255,255,255,.6)&quot; :background-color-popup=&quot;colorx&quot; class=&quot;&quot;  title=&quot;Background&quot; :active.sync=&quot;popupActive&quot;&gt;
        &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
      &lt;/vs-popup&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      colorx:&quot;#e1e1e1&quot;,
      popupActive: false,
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
            colorx:"#e1e1e1",
            popupActive: false,
        }
    }
}
</script>