<!-- =========================================================================================
    File Name: InputColor.vue
    Description: Chnage border color of inputs
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <span>You can change the color of the borders when the focus the input with the property <code>color</code>. You are able to use the <router-link to="/colors">Main Colors</router-link> or <strong>strong</strong> and <strong>HEX</strong> colors.</span>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5 mb-3">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment">
            <vs-input label-placeholder="Default" v-model="value1" class="mb-2" />
            <vs-input color="success" label-placeholder="Success" v-model="value2" class="mb-2" />
            <vs-input color="danger" label-placeholder="Danger" v-model="value3" class="mb-2" />
            <vs-input color="warning" label-placeholder="Warning" v-model="value4" class="mb-2" />
            <vs-input color="dark" label-placeholder="Dark" v-model="value5" />
            <vs-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6" />
            <vs-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value7" />
        </div>

        <template slot="codeContainer">

&lt;template&gt;
    &lt;div class=&quot;demo-alignment&quot;&gt;
      &lt;vs-input label-placeholder=&quot;Default&quot; v-model=&quot;value1&quot;/&gt;
      &lt;vs-input color=&quot;success&quot; label-placeholder=&quot;Success&quot; v-model=&quot;value2&quot;/&gt;
      &lt;vs-input color=&quot;danger&quot; label-placeholder=&quot;Danger&quot; v-model=&quot;value3&quot;/&gt;
      &lt;vs-input color=&quot;warning&quot; label-placeholder=&quot;Warning&quot; v-model=&quot;value4&quot;/&gt;
      &lt;vs-input color=&quot;dark&quot; label-placeholder=&quot;Dark&quot; v-model=&quot;value5&quot;/&gt;
      &lt;vs-input color=&quot;rgb(213, 14, 151)&quot; label-placeholder=&quot;RGB: rgb(213, 14, 151)&quot; v-model=&quot;value6&quot;/&gt;
      &lt;vs-input color=&quot;#11e988&quot; label-placeholder=&quot;HEX: #11e988&quot; v-model=&quot;value7&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:&apos;&apos;,
      value2:&apos;&apos;,
      value3:&apos;&apos;,
      value4:&apos;&apos;,
      value5:&apos;&apos;,
      value6:&apos;&apos;,
      value7:&apos;&apos;
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
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: ''
        }
    }
}
</script>