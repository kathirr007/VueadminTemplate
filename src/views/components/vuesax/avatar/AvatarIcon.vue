<!-- =========================================================================================
    File Name: AvatarIcon.vue
    Description: Change icon of avatar
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>
        
        <p>You can change the main icon of the Avatar with the property <code>icon</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>Vuesax uses the <strong>Google Material Icons</strong> font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>. Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.</p>

            <p>This icon is only displayed when there is no property as <code>text</code> or <code>src</code></p>
        </vs-alert>

        <div class="demo-alignment mt-5">

            <vs-avatar icon-pack="feather" icon="icon-user" />
            <vs-avatar color="primary" icon-pack="feather" icon="icon-calendar" />
            <vs-avatar color="success" icon-pack="feather" icon="icon-inbox" />
            <vs-avatar color="danger" icon-pack="feather" icon="icon-camera" />
            <vs-avatar color="warning" icon-pack="feather" icon="icon-award" />
            <vs-avatar color="dark" icon-pack="feather" icon="icon-code" />

        </div>

        <template slot="codeContainer">
&lt;vs-avatar icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; /&gt;

&lt;vs-avatar color=&quot;primary&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-calendar&quot; /&gt;

&lt;vs-avatar color=&quot;success&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-inbox&quot; /&gt;

&lt;vs-avatar color=&quot;danger&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-camera&quot; /&gt;

&lt;vs-avatar color=&quot;warning&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-award&quot; /&gt;

&lt;vs-avatar color=&quot;dark&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-code&quot; /&gt;
        </template>

    </vx-card>
</template>