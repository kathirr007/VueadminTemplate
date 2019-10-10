<!-- =========================================================================================
    File Name: SwitchState.vue
    Description: Add Switch element using vs-switch
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="State" code-toggler>

        <p>To implement a switch element in the application, we add the component <code>vs-switch</code></p>

        <ul class="demo-alignment">
            <li>
                <label>true / active</label>
                <vs-switch v-model="switch1" />
            </li>
            <li>
                <label>false / inactive</label>
                <vs-switch v-model="switch2" />
            </li>
            <li>
                <label>disabled / active</label>
                <vs-switch disabled="true" v-model="switch3" />
            </li>
            <li>
                <label>disabled / inactive</label>
                <vs-switch disabled="true" v-model="switch4" />
            </li>
        </ul>
        
        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;ul class=&quot;switch-container&quot;&gt;
    &lt;li&gt;
      &lt;label&gt;true / active&lt;/label&gt;
      &lt;vs-switch v-model=&quot;switch1&quot; /&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label&gt;false / inactive&lt;/label&gt;
      &lt;vs-switch v-model=&quot;switch2&quot; /&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label&gt;disabled / active&lt;/label&gt;
      &lt;vs-switch disabled=&quot;true&quot; v-model=&quot;switch3&quot; /&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label&gt;disabled / inactive&lt;/label&gt;
      &lt;vs-switch disabled=&quot;true&quot; v-model=&quot;switch4&quot; /&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      switch1:true,
      switch2:false,
      switch3:true,
      switch4:false,
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
            switch1: true,
            switch2: false,
            switch3: true,
            switch4: false,
        }
    }
}
</script>