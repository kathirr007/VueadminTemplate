<!-- =========================================================================================
    File Name: GridResponsiveLayout.vue
    Description: Create responsive layout using grid system
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Responsive layout" code-toggler>

        <p class="mb-5">There are some measures that can only be added in a specific size of the device, the directives are:</p>

        <vx-list :list="list"></vx-list>

        <div class="grid-demo__layout-container">
            <vs-row vs-w="12">
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
                    vs-lg="2" <!-- vs-sm="4" vs-xs="12" -->
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
                    vs-lg="8" <!-- vs-sm="4" vs-xs="12" -->
                </vs-col>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
                    vs-lg="2" <!-- vs-sm="4" vs-xs="12" -->
                </vs-col>
            </vs-row>
        </div>

        <template slot="codeContainer">

&lt;vs-row vs-w=&quot;12&quot;&gt;
  &lt;vs-col vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-lg=&quot;2&quot; vs-sm=&quot;4&quot; vs-xs=&quot;12&quot; &gt;
    vs-lg=&quot;2&quot; &lt;!-- vs-sm=&quot;4&quot; vs-xs=&quot;12&quot; --&gt;
  &lt;/vs-col&gt;
  &lt;vs-col vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-lg=&quot;8&quot; vs-sm=&quot;4&quot; vs-xs=&quot;12&quot;&gt;
    vs-lg=&quot;8&quot; &lt;!-- vs-sm=&quot;4&quot; vs-xs=&quot;12&quot; --&gt;
  &lt;/vs-col&gt;
  &lt;vs-col vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-lg=&quot;2&quot; vs-sm=&quot;4&quot; vs-xs=&quot;12&quot;&gt;
    vs-lg=&quot;2&quot; &lt;!-- vs-sm=&quot;4&quot; vs-xs=&quot;12&quot; --&gt;
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

        </template>
    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            list: [
                "<code>vs-lg</code> : is for large devices such as desktops or laptops (large)",
                "<code>vs-sm</code> : is for medium devices such as laptops or tablets",
                "<code>vs-xs</code> : is for small devices such as tablets (small) and phones",
            ]
        }
    },
}
</script>