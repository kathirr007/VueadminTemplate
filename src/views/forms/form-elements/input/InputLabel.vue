<!-- =========================================================================================
    File Name: InputLabel.vue
    Description: Give label to inputs using label prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Label" code-toggler>

        <span>Add a label to the input with the property <code>label</code></span>

        <div class="demo-alignment">
            <vs-input label="Name" placeholder="Your Name" v-model="value1" />
            <vs-input type="password" label="Password" placeholder="Your Password" v-model="value2" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;centerx labelx&quot;&gt;
      &lt;vs-input label=&quot;Name&quot; placeholder=&quot;Your Name&quot; v-model=&quot;value1&quot;/&gt;
      &lt;vs-input type=&quot;password&quot; label=&quot;Password&quot; placeholder=&quot;Your Password&quot; v-model=&quot;value2&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:&apos;&apos;,
      value2:&apos;&apos;
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
            value2: ''
        }
    }
}
</script>