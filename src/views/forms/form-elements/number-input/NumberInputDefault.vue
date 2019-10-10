<!-- =========================================================================================
    File Name: NumberInput.vue
    Description: Rendering default number input using vs-number-input
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>If you need to add a component that handles a single number, use the component <code>vs-input-number</code></p>
        <p>You can also change the increment and decrement button icons using the properties <code>icon-inc</code> and <code>icon-dec</code> respectively</p>

        <div class="demo-alignment">
            <vs-input-number v-model="number" />
            <vs-input-number :disabled="true" v-model="number1" />
            <vs-input-number v-model="number2" icon-inc="expand_less" icon-dec="expand_more"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number v-model=&quot;number&quot;/&gt;
    &lt;vs-input-number :disabled=&quot;true&quot; v-model=&quot;number1&quot;/&gt;
    &lt;vs-input-number v-model=&quot;number2&quot; icon-inc=&quot;expand_less&quot; icon-dec=&quot;expand_more&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      number:34,
      number1:48,
      number2:50
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
            number: 34,
            number1: 48,
            number2:50
        }
    }
}
</script>