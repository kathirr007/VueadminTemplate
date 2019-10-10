<!-- =========================================================================================
    File Name: DividerColor.vue
    Description: Change Divider line color
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>You can change the color of the divider line with the property <code>color</code>, you can use the main colors or <strong>RGB</strong> and <strong>HEX</strong>.</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="op-block mt-5">

            <vs-divider color="Default"> Default </vs-divider>
            <vs-divider color="primary"> Primary </vs-divider>
            <vs-divider color="success"> Success </vs-divider>
            <vs-divider color="danger"> Danger </vs-divider>
            <vs-divider color="warning"> Warning </vs-divider>
            <vs-divider color="dark"> Dark </vs-divider>
            <vs-divider color="rgb(29, 222, 194)"> RGB </vs-divider>
            <vs-divider color="#ad289f"> HEX </vs-divider>

        </div>

        <template slot="codeContainer">
&lt;vs-divider&gt;Default&lt;/vs-divider&gt;

&lt;vs-divider color=&quot;primary&quot;&gt;Primary&lt;/vs-divider&gt;

&lt;vs-divider color=&quot;success&quot;&gt;Success&lt;/vs-divider&gt;

&lt;vs-divider color=&quot;danger&quot;&gt;Danger&lt;/vs-divider&gt;

&lt;vs-divider color=&quot;warning&quot;&gt;Warning&lt;/vs-divider&gt;

&lt;vs-divider color=&quot;dark&quot;&gt;Dark&lt;/vs-divider&gt;

&lt;vs-divider color=&quot;rgb(29, 222, 194)&quot;&gt;RGB&lt;/vs-divider&gt;

&lt;vs-divider color=&quot;#ad289f&quot;&gt;HEX&lt;/vs-divider&gt;
        </template>

    </vx-card>
</template>