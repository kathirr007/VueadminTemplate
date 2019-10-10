<!-- =========================================================================================
    File Name: SwitchIcon.vue
    Description: Add icon to switch
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icons" code-toggler>

        <p>We can add a representative icon inside our switch with the property <code>vs-icon</code>.</p>
        <p>If you only need to add the icon in one of the states you can do it with the property <code>vs-icon-on</code> or <code>vs-icon-off</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>Vuesax uses the <strong>Google Material Icons</strong> font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page.</a></span>
        </vs-alert>

        <ul class="demo-alignment">
            <li>
                <label>Primary</label>
                <vs-switch v-model="switch1" icon-pack="feather" vs-icon-off="icon-bell" vs-icon-on="icon-check" />
            </li>
            <li>
                <label>Success</label>
                <vs-switch color="success" v-model="switch2" icon-pack="feather" vs-icon="icon-check" />
            </li>
            <li>
                <label>Danger</label>
                <vs-switch color="danger" v-model="switch3" icon-pack="feather" vs-icon="icon-x" />
            </li>
            <li>
                <label>Warning</label>
                <vs-switch color="warning" v-model="switch4" icon-pack="feather" vs-icon="icon-alert-circle" />
            </li>
            <li>
                <label>Dark</label>
                <vs-switch color="dark" v-model="switch5" icon-pack="feather" vs-icon="icon-volume-x" />
            </li>
            <li>
                <label>rgb(color) / #color</label>
                <vs-switch color="rgb(51, 53, 83)" v-model="switch6" icon-pack="feather" vs-icon="icon-camera" />
            </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
    &lt;ul class=&quot;demo-alignment&quot;&gt;
        &lt;li&gt;
            &lt;label&gt;Primary&lt;/label&gt;
            &lt;vs-switch v-model=&quot;switch1&quot; icon-pack=&quot;feather&quot; vs-icon-off=&quot;icon-bell&quot; vs-icon-on=&quot;icon-check&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label&gt;Success&lt;/label&gt;
            &lt;vs-switch color=&quot;success&quot; v-model=&quot;switch2&quot; icon-pack=&quot;feather&quot; vs-icon=&quot;icon-check&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label&gt;Danger&lt;/label&gt;
            &lt;vs-switch color=&quot;danger&quot; v-model=&quot;switch3&quot; icon-pack=&quot;feather&quot; vs-icon=&quot;icon-x&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label&gt;Warning&lt;/label&gt;
            &lt;vs-switch color=&quot;warning&quot; v-model=&quot;switch4&quot; icon-pack=&quot;feather&quot; vs-icon=&quot;icon-alert-circle&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label&gt;Dark&lt;/label&gt;
            &lt;vs-switch color=&quot;dark&quot; v-model=&quot;switch5&quot; icon-pack=&quot;feather&quot; vs-icon=&quot;icon-volume-x&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label&gt;rgb(color) / #color&lt;/label&gt;
            &lt;vs-switch color=&quot;rgb(51, 53, 83)&quot; v-model=&quot;switch6&quot; icon-pack=&quot;feather&quot; vs-icon=&quot;icon-camera&quot; /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false,
      switch6:false
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
            switch1: false,
            switch2: false,
            switch3: false,
            switch4: false,
            switch5: false,
            switch6: false
        }
    }
}
</script>