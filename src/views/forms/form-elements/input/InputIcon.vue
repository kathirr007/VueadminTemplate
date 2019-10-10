<!-- =========================================================================================
    File Name: InputIcon.vue
    Description: Add icon to input using icon prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>

        <span>The input can have icons. Use the property <code>vs-icon</code>. You can also also manipulate the icon's position with the property <code>vs-icon-after</code></span>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>Vuesax uses the <strong>Google Material Icons</strong> font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page.</a></span>
        </vs-alert>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>FontAwesome and other fonts library are supported. Simply use the <code>vs-icon-pack</code> with <code>fa</code> or <code>fas</code>. You still need to include the Font Awesome icons in your project.</span>
        </vs-alert><br>

        <div class="demo-alignment">
            <vs-input icon-pack="feather" icon="icon-search" label-placeholder="Search" v-model="value1" class="is-label-placeholder" />
            <vs-input icon-pack="feather" icon="icon-edit-2" icon-after="true" label-placeholder="icon-after" vs-placeholder="Nombre" v-model="value2" />
            <vs-input icon-pack="feather" icon="icon-plus" label-placeholder="Label-placeholder" v-model="value3" />
            <vs-input icon-pack="feather" icon="icon-shopping-cart" vs-icon-after="true" label-placeholder="Label-placeholder" v-model="value4" />
            <vs-input icon-pack="feather" icon="icon-alert-circle" label-placeholder="icon-disabled" disabled="true" v-model="value5" />
            <vs-input icon-pack="feather" icon="icon-mail" label-placeholder="icon-no-border" v-model="value6" icon-no-border />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;centerx&quot;&gt;
        &lt;vs-input icon-pack=&quot;feather&quot; icon=&quot;icon-search&quot; label-placeholder=&quot;Search&quot; v-model=&quot;value1&quot; class=&quot;is-label-placeholder&quot; /&gt;
        &lt;vs-input icon-pack=&quot;feather&quot; icon=&quot;icon-edit-2&quot; icon-after=&quot;true&quot; label-placeholder=&quot;icon-after&quot; vs-placeholder=&quot;Nombre&quot; v-model=&quot;value2&quot; /&gt;
        &lt;vs-input icon-pack=&quot;feather&quot; icon=&quot;icon-plus&quot; label-placeholder=&quot;Label-placeholder&quot; v-model=&quot;value3&quot; /&gt;
        &lt;vs-input icon-pack=&quot;feather&quot; icon=&quot;icon-shopping-cart&quot; vs-icon-after=&quot;true&quot; label-placeholder=&quot;Label-placeholder&quot; v-model=&quot;value4&quot; /&gt;
        &lt;vs-input icon-pack=&quot;feather&quot; icon=&quot;icon-alert-circle&quot; label-placeholder=&quot;icon-disabled&quot; disabled=&quot;true&quot; v-model=&quot;value5&quot; /&gt;
        &lt;vs-input icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; label-placeholder=&quot;icon-no-border&quot; v-model=&quot;value6&quot; icon-no-border /&gt;
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
      value7:&apos;&apos;,
      value8: &apos;&apos;
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
            value7: '',
            value8: ''
        }
    }
}
</script>
