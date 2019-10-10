<!-- =========================================================================================
    File Name: AvatarColor.vue
    Description: Change color of avatars
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>You can change the Avatar's color by using the property <code>color</code>. If needed you could also change the text's color with the property <code>text-color</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is <code>Luis Daniel</code> and only the letters LD will be shown if the word contains spaces the initial of each one is added.</span>
        </vs-alert>

        <div class="demo-alignment mt-5">

            <vs-avatar color="primary" text="primary"/>
            <vs-avatar color="success" text="success"/>
            <vs-avatar color="danger" text="danger"/>
            <vs-avatar color="warning" text="warning"/>
            <vs-avatar color="dark" text="dark"/>
            <vs-avatar color="rgb(200, 21, 129)" text="RGB"/>
            <vs-avatar color="#18cd5b" text="HEX"/>
            <vs-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>

        </div>

        <template slot="codeContainer">
&lt;vs-avatar color=&quot;primary&quot; text=&quot;primary&quot;/&gt;
&lt;vs-avatar color=&quot;success&quot; text=&quot;success&quot;/&gt;
&lt;vs-avatar color=&quot;danger&quot; text=&quot;danger&quot;/&gt;
&lt;vs-avatar color=&quot;warning&quot; text=&quot;warning&quot;/&gt;
&lt;vs-avatar color=&quot;dark&quot; text=&quot;dark&quot;/&gt;
&lt;vs-avatar color=&quot;rgb(200, 21, 129)&quot; text=&quot;RGB&quot;/&gt;
&lt;vs-avatar color=&quot;#18cd5b&quot; text=&quot;HEX&quot;/&gt;
&lt;vs-avatar color=&quot;#26302a&quot; text-color=&quot;rgb(246, 190, 16)&quot; text=&quot;HEX RGB&quot;/&gt;
        </template>

    </vx-card>
</template>