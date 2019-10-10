<!-- =========================================================================================
    File Name: SliderIcon.vue
    Description: Rendering of Slider with Icon
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>
        
        <p>You can add an icon with the <code>icon</code> property to better representation the sliders to the user</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>.</p>
            <p>FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.</p>
        </vs-alert>

        <div class="mt-5">
            <vs-slider icon="volume_up" max=10 v-model="value1" />
            <vs-slider icon="group_add" ticks step=25 v-model="value2" />
            <vs-slider icon="star" ticks max=5 v-model="value3" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-slider icon=&quot;volume_up&quot; max=10 v-model=&quot;value1&quot;/&gt;
  &lt;vs-slider icon=&quot;group_add&quot; ticks step=25 v-model=&quot;value2&quot;/&gt;
  &lt;vs-slider icon=&quot;star&quot; ticks max=5 v-model=&quot;value3&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value1:6,
      value2:25,
      value3:[2,4]
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
            value1:6,
            value2:25,
            value3:[2,4]
        }
    }
}
</script>