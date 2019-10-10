<!-- =========================================================================================
    File Name: ButtonIcon.vue
    Description: Add icon to button
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>
        
        <p>You can add an icon to the button with the property <code>icon</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>. Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.</span>
        </vs-alert>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5 mb-3">
            <span>You can change the position of the icon so that it is after the text with the property <code>icon-after</code></span>
        </vs-alert>

        <div class="demo-alignment">

            <vs-button color="primary" type="border" icon-pack="feather" icon="icon-home">Home</vs-button>
            <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-star">Star</vs-button>
            <vs-button color="success" type="flat" icon-pack="feather" icon="icon-check">Done</vs-button>
            <vs-button color="dark" type="line" icon-pack="feather" icon="icon-menu" icon-after>menu</vs-button>
            <vs-button color="danger" type="gradient" icon-pack="feather" icon="icon-heart" icon-after>favorite</vs-button>
            <vs-button disabled color="primary" type="border" icon-pack="feather" icon="icon-home">Disabled</vs-button>

        </div>

        <template slot="codeContainer">
&lt;vs-button color=&quot;primary&quot; type=&quot;border&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-home&quot;&gt;Home&lt;/vs-button&gt;
&lt;vs-button color=&quot;warning&quot; type=&quot;filled&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-star&quot;&gt;Star&lt;/vs-button&gt;
&lt;vs-button color=&quot;success&quot; type=&quot;flat&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-check&quot;&gt;Done&lt;/vs-button&gt;
&lt;vs-button color=&quot;dark&quot; type=&quot;line&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-menu&quot; icon-after&gt;menu&lt;/vs-button&gt;
&lt;vs-button color=&quot;danger&quot; type=&quot;gradient&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-heart&quot; icon-after&gt;favorite&lt;/vs-button&gt;
&lt;vs-button disabled color=&quot;primary&quot; type=&quot;border&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-home&quot;&gt;Disabled&lt;/vs-button&gt;
        </template>

    </vx-card>
</template>