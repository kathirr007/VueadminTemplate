<!-- =========================================================================================
    File Name: InputSize.vue
    Description: Change size of input
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Size" code-toggler>

        <span>Control the size of input using <code>size</code>. The allowed values are: <code>large</code> and <code>small</code></span>

        <div class="demo-alignment">
            <vs-input size="large" class="inputx" placeholder="Size large" v-model="value1" />
            <vs-input class="inputx" placeholder="Size Default" v-model="value2" />
            <vs-input size="small" class="inputx" placeholder="Size small" v-model="value3" />
        </div>

        <template slot="codeContainer">

&lt;template&gt;
    &lt;div class=&quot;centerx&quot;&gt;
       &lt;vs-input size=&quot;large&quot; class=&quot;inputx&quot; placeholder=&quot;Size large&quot; v-model=&quot;value1&quot;/&gt;
       &lt;vs-input class=&quot;inputx&quot; placeholder=&quot;Size Default&quot; v-model=&quot;value2&quot;/&gt;
       &lt;vs-input size=&quot;small&quot; class=&quot;inputx&quot; placeholder=&quot;Size small&quot; v-model=&quot;value3&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:&apos;&apos;,
      value2:&apos;&apos;,
      value3:&apos;&apos;
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
            value3: ''
        }
    }
}
</script>