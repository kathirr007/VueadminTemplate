<!-- =========================================================================================
    File Name: PopupFullscreen.vue
    Description: Open popup in fullscreen
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Fullscreen" code-toggler>
        
        <p>the popup can be full screen you just have to add the property <code>fullscreen</code></p>
        
        <div class="demo-alignment">
            <vs-button @click="popupActive=true" color="primary">Open fullscreen popup</vs-button>
            <vs-popup fullscreen title="fullscreen" :active.sync="popupActive">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </vs-popup>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;
      &lt;vs-button @click=&quot;popupActive=true&quot; color=&quot;primary&quot;&gt;Open fullscreen popup&lt;/vs-button&gt;
      &lt;vs-popup fullscreen title=&quot;fullscreen&quot; :active.sync=&quot;popupActive&quot;&gt;
        &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
      &lt;/vs-popup&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
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
            popupActive: false,
        }
    }
}
</script>