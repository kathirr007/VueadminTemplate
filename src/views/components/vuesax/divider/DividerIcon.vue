<!-- =========================================================================================
    File Name: DividerIcon.vue
    Description: Divider with icon
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>
        
        <p>To add an icon within the division we have the property <code>icon</code></p>
        
        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>.</p>
            <p>FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.</p>
        </vs-alert>

        <div class="op-block mt-5">

            <vs-divider icon-pack="feather" icon="icon-arrow-down" position="left"></vs-divider>
            <vs-divider icon-pack="feather" icon="icon-star" position="left-center" color="primary"></vs-divider>
            <vs-divider icon-pack="feather" icon="icon-check" position="center" color="success"></vs-divider>
            <vs-divider icon-pack="feather" icon="icon-x-circle" position="right-center" color="danger"></vs-divider>
            <vs-divider icon-pack="feather" icon="icon-alert-triangle" position="right" color="warning"></vs-divider>
            <vs-divider icon-pack="feather" icon="icon-clock" position="center" color="dark"></vs-divider>

        </div>

        <template slot="codeContainer">
&lt;vs-divider icon-pack=&quot;feather&quot; icon=&quot;icon-arrow-down&quot; position=&quot;left&quot;&gt;&lt;/vs-divider&gt;

&lt;vs-divider icon-pack=&quot;feather&quot; icon=&quot;icon-star&quot; position=&quot;left-center&quot; color=&quot;primary&quot;&gt;&lt;/vs-divider&gt;

&lt;vs-divider icon-pack=&quot;feather&quot; icon=&quot;icon-check&quot; position=&quot;center&quot; color=&quot;success&quot;&gt;&lt;/vs-divider&gt;

&lt;vs-divider icon-pack=&quot;feather&quot; icon=&quot;icon-x-circle&quot; position=&quot;right-center&quot; color=&quot;danger&quot;&gt;&lt;/vs-divider&gt;

&lt;vs-divider icon-pack=&quot;feather&quot; icon=&quot;icon-alert-triangle&quot; position=&quot;right&quot; color=&quot;warning&quot;&gt;&lt;/vs-divider&gt;

&lt;vs-divider icon-pack=&quot;feather&quot; icon=&quot;icon-clock&quot; position=&quot;center&quot; color=&quot;dark&quot;&gt;&lt;/vs-divider&gt;
        </template>

    </vx-card>
</template>