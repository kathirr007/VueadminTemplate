<!-- =========================================================================================
    File Name: SwitchColor.vue
    Description: Change color of switch
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <span>You can choose the default <strong>Switch</strong>. You are able to use the Main Colors or <strong>RGB</strong> and <strong>HEX</strong> colors.</span>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <ul class="demo-alignment">
            <li>
                <label>Primary</label>
                <vs-switch v-model="switch1" />
            </li>
            <li>
                <label>Success</label>
                <vs-switch color="success" v-model="switch2" />
            </li>
            <li>
                <label>Danger</label>
                <vs-switch color="danger" v-model="switch3" />
            </li>
            <li>
                <label>Warning</label>
                <vs-switch color="warning" v-model="switch4" />
            </li>
            <li>
                <label>Dark</label>
                <vs-switch color="dark" v-model="switch5" />
            </li>
            <li class="con-input-color">
                <label>Color: <span>{{color}}</span></label>
                <vs-switch :color="color" v-model="switch6" />
            </li>
            <li style="align-self: flex-end">
                <input v-model="color" type="color">
            </li>
        </ul>
        
        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;ul class=&quot;con-s&quot;&gt;
    &lt;li&gt;
      &lt;label&gt;Primary&lt;/label&gt;
      &lt;vs-switch v-model=&quot;switch1&quot; /&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label&gt;Success&lt;/label&gt;
      &lt;vs-switch color=&quot;success&quot; v-model=&quot;switch2&quot; /&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label&gt;Danger&lt;/label&gt;
      &lt;vs-switch color=&quot;danger&quot; v-model=&quot;switch3&quot; /&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label&gt;Warning&lt;/label&gt;
      &lt;vs-switch color=&quot;warning&quot; v-model=&quot;switch4&quot; /&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label&gt;Dark&lt;/label&gt;
      &lt;vs-switch color=&quot;dark&quot; v-model=&quot;switch5&quot; /&gt;
    &lt;/li&gt;
    &lt;li class=&quot;con-input-color&quot;&gt;
      &lt;label&gt;Color: &lt;span&gt;{{color}}&lt;/span&gt;&lt;/label&gt;
      &lt;input v-model=&quot;color&quot; type=&quot;color&quot;&gt;
      &lt;vs-switch :color=&quot;color&quot; v-model=&quot;switch6&quot; /&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      color:&apos;#5a3cc4&apos;,
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
      switch6:true,
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
            color: '#5a3cc4',
            switch1: true,
            switch2: true,
            switch3: true,
            switch4: true,
            switch5: true,
            switch6: true,
        }
    }
}
</script>