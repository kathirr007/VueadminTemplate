<!-- =========================================================================================
    File Name: SwitchText.vue
    Description: Add text to switch
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Text" code-toggler>
        <span>You can add a descriptive text with the slot <code>on</code> or <code>off</code>. You can also join the text with the icons.</span>
        <ul class="demo-alignment">
            <li>
                <vs-switch v-model="switch1">
                    <span slot="on">On</span>
                    <span slot="off">Off</span>
                </vs-switch>
            </li>
            <li>
                <vs-switch color="success" v-model="switch2">
                    <span slot="on">Accept</span>
                    <span slot="off">Cancel</span>
                </vs-switch>
            </li>
            <li>
                <vs-switch color="danger" vs-icon-off="close" v-model="switch3">
                    <span slot="on">Remove</span>
                </vs-switch>
            </li>
            <li>
                <vs-switch color="warning" vs-icon-on="error_outline" v-model="switch4">
                    <span slot="off">Prevent</span>
                </vs-switch>
            </li>
            <li>
                <vs-switch color="dark" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" v-model="switch5">
                    <span slot="on">YES</span>
                    <span slot="off">NO</span>
                </vs-switch>
            </li>
        </ul>
        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;con-s&quot;&gt;
    &lt;li&gt;
      &lt;vs-switch v-model=&quot;switch1&quot;&gt;
        &lt;span slot=&quot;on&quot;&gt;On&lt;/span&gt;
        &lt;span slot=&quot;off&quot;&gt;Off&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch color=&quot;success&quot; v-model=&quot;switch2&quot;&gt;
        &lt;span slot=&quot;on&quot;&gt;Accept&lt;/span&gt;
        &lt;span slot=&quot;off&quot;&gt;Cancel&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch color=&quot;danger&quot; vs-icon-off=&quot;close&quot; v-model=&quot;switch3&quot;&gt;
        &lt;span slot=&quot;on&quot;&gt;Remove&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch color=&quot;warning&quot; vs-icon-on=&quot;error_outline&quot; v-model=&quot;switch4&quot;&gt;
        &lt;span slot=&quot;off&quot;&gt;Prevent&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch color=&quot;dark&quot; icon-pack=&quot;feather&quot; vs-icon-on=&quot;icon-check-circle&quot; vs-icon-off=&quot;icon-slash&quot; v-model=&quot;switch5&quot;&gt;
        &lt;span slot=&quot;on&quot;&gt;YES&lt;/span&gt;
        &lt;span slot=&quot;off&quot;&gt;NO&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
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
            switch2: true,
            switch3: true,
            switch4: true,
            switch5: true,
        }
    }
}
</script>