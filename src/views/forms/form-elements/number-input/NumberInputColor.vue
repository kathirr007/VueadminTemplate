<!-- =========================================================================================
    File Name: NumberInputColor.vue
    Description: Change color of numer input
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <span>You can change the color of the <strong>Input-Number</strong> with the property <code>color</code>. You are able to use the Main Colors or <strong>RGB</strong> and <strong>HEX</strong> colors.</span>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment">
            <vs-input-number color="danger" v-model="number1" />
            <vs-input-number color="success" v-model="number2" />
            <vs-input-number color="warning" v-model="number3" />
            <vs-input-number color="dark" v-model="number4" />
            <vs-input-number color="rgb(218, 24, 94)" v-model="number5" />
            <vs-input-number color="#ad3af9" v-model="number6" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number color=&quot;danger&quot; v-model=&quot;number1&quot;/&gt;
    &lt;vs-input-number color=&quot;success&quot; v-model=&quot;number2&quot;/&gt;
    &lt;vs-input-number color=&quot;warning&quot; v-model=&quot;number3&quot;/&gt;
    &lt;vs-input-number color=&quot;dark&quot; v-model=&quot;number4&quot;/&gt;
    &lt;vs-input-number color=&quot;rgb(218, 24, 94)&quot; v-model=&quot;number5&quot;/&gt;
    &lt;vs-input-number color=&quot;#ad3af9&quot; v-model=&quot;number6&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      number1:196,
      number2:88,
      number3:25,
      number4:12,
      number5:590,
      number6:32,
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
            number1: 196,
            number2: 88,
            number3: 25,
            number4: 12,
            number5: 590,
            number6: 32,
        }
    }
}
</script>