<!-- =========================================================================================
    File Name: PopupDefault.vue
    Description: Rendering of default pagination
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>To implement the popup we have the component <code>vs-popup</code></p>
        
        <div class="demo-alignment">

            <vs-button @click="popupActive=true" color="primary" type="filled">Open Default popup</vs-button>

            <vs-popup class="holamundo"  title="Lorem ipsum dolor sit amet" :active.sync="popupActive">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </vs-popup>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-button @click=&quot;popupActive=true&quot; color=&quot;primary&quot; type=&quot;border&quot;&gt;Open Default popup&lt;/vs-button&gt;

    &lt;vs-popup class=&quot;holamundo&quot; title=&quot;Lorem ipsum dolor sit amet&quot; :active.sync=&quot;popupActive&quot;&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
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