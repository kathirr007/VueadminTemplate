<!-- =========================================================================================
    File Name: DropdownDefault.vue
    Description: Rendering of default dropdown
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>You can change the color of the component with the property <code>color</code></p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="mt-5 demo-alignment">

            <input type="color" v-model="colorx">

            <vs-dropdown :color="colorx">
                <a class="flex items-center" href="#">
                    Dropdown hover
                    <i class="material-icons">expand_more</i>
                </a>

                <vs-dropdown-menu>

                    <vs-dropdown-item>
                        option 1
                    </vs-dropdown-item>

                    <vs-dropdown-item>
                        option 2
                    </vs-dropdown-item>

                    <vs-dropdown-item divider>
                        option 3
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>

        </div>

        <template slot="codeContainer">
&lt;template&gt;

    &lt;div class=&quot;demo-alignment&quot;&gt;

      &lt;input type=&quot;color&quot; v-model=&quot;colorx&quot;&gt;

      &lt;vs-dropdown :color=&quot;colorx&quot;&gt;
        &lt;a class=&quot;flex items-center&quot; href=&quot;#&quot;&gt;
          Dropdown hover
          &lt;i class=&quot;material-icons&quot;&gt;expand_more&lt;/i&gt;
        &lt;/a&gt;

        &lt;vs-dropdown-menu&gt;

          &lt;vs-dropdown-item&gt;
            option 1
          &lt;/vs-dropdown-item&gt;

          &lt;vs-dropdown-item&gt;
            option 2
          &lt;/vs-dropdown-item&gt;

          &lt;vs-dropdown-item divider&gt;
            option 3
          &lt;/vs-dropdown-item&gt;
        &lt;/vs-dropdown-menu&gt;
      &lt;/vs-dropdown&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    colorx: &apos;#c80948&apos;
  }),
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        colorx: '#c80948'
    }),
}
</script>