<!-- =========================================================================================
    File Name: PopupInnerPopup.vue
    Description: create inner popup
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Inner Popup" code-toggler>
        
        <p>You can add one popup inside another</p>
        
        <div class="demo-alignment">

            <vs-button @click="popupActive2=true" color="primary" type="filled">Open Popup</vs-button>

            <vs-popup classContent="popup-example" title="Lorem ipsum dolor sit amet" :active.sync="popupActive2">
                <vs-input class="inputx mb-3" placeholder="Placeholder" v-model="value1" />
                <vs-input disabled class="inputx mb-3" placeholder="Disabled" v-model="value2" />
                <vs-button @click="popupActive3=true" color="primary" type="filled">Open Inner Popup</vs-button>

                <vs-popup title="Inner popup" :active.sync="popupActive3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </vs-popup>
            </vs-popup>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-button @click=&quot;popupActive2=true&quot; color=&quot;primary&quot; type=&quot;filled&quot;&gt;Open Popup&lt;/vs-button&gt;

    &lt;vs-popup classContent=&quot;popup-example&quot; title=&quot;Lorem ipsum dolor sit amet&quot; :active.sync=&quot;popupActive2&quot;&gt;
      &lt;vs-input class=&quot;inputx mb-3&quot; placeholder=&quot;Placeholder&quot; v-model=&quot;value1&quot; /&gt;
      &lt;vs-input disabled class=&quot;inputx mb-3&quot; placeholder=&quot;Disabled&quot; v-model=&quot;value2&quot; /&gt;
      &lt;vs-button @click=&quot;popupActive3=true&quot; color=&quot;primary&quot; type=&quot;filled&quot;&gt;Open Inner Popup&lt;/vs-button&gt;

      &lt;vs-popup title=&quot;Inner popup&quot; :active.sync=&quot;popupActive3&quot;&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/p&gt;
      &lt;/vs-popup&gt;
    &lt;/vs-popup&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value1: &apos;&apos;,
      value2: &apos;&apos;,
      popupActive2: false,
      popupActive3: false
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
            value1: '',
            value2: '',
            popupActive2: false,
            popupActive3: false
        }
    }
}
</script>