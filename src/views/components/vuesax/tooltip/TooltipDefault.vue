<!-- =========================================================================================
    File Name: ToolptipDefault.vue
    Description: Rendering of default Tooltip
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>To add a tooltip we have the component <code>vx-tooltip</code></p>

        <div class="demo-alignment">
            <vx-tooltip text="Tooltip Default">
                <vs-switch v-model="switch1" />
            </vx-tooltip>

            <vx-tooltip text="Tooltip Default">
                <vs-input-number v-model="number1" />
            </vx-tooltip>

            <vx-tooltip text="Tooltip Default">
                <vs-button color="primary" type="border">Button</vs-button>
            </vx-tooltip>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vx-tooltip text=&quot;Tooltip Default&quot;&gt;
    &lt;vs-switch v-model=&quot;switch1&quot; /&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip text=&quot;Tooltip Default&quot;&gt;
    &lt;vs-input-number v-model=&quot;number1&quot; /&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip text=&quot;Tooltip Default&quot;&gt;
    &lt;vs-button color=&quot;primary&quot; type=&quot;border&quot;&gt;Button&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      switch1:true,
      number1:10,
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
            number1: 10,
        }
    }
}
</script>
