<!-- =========================================================================================
    File Name: InputDefault.vue
    Description: Default input using vs-input
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <span>The input is a functional part in an application, For implementing it we have the <code>vs-input</code> component.</span>

        <div class="demo-alignment">
            <vs-input class="inputx" placeholder="Placeholder" v-model="value1" />
            <vs-input disabled class="inputx" placeholder="Disabled" v-model="value2" />
        </div>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;centerx default-input&quot;&gt;
    &lt;vs-input class=&quot;inputx&quot; placeholder=&quot;Placeholder&quot; v-model=&quot;value1&quot; /&gt;
    &lt;vs-input disabled class=&quot;inputx&quot; placeholder=&quot;Disabled&quot; v-model=&quot;value2&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value1: &apos;&apos;,
      value2: &apos;&apos;
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
        }
    }
}
</script>