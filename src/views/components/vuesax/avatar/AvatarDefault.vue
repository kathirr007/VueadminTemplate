<!-- =========================================================================================
    File Name: AvatarDefault.vue
    Description: Rendering of default avatar
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>Often you need to add an user's avatar to your app. In order to make this we have the component <code>vs-avatar</code></p>
        <p>To add an internal text value such as <code>Luis</code> use the <code>text</code> property</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is <code>Luis Daniel</code> and only the letters LD will be shown if the word contains spaces the initial of each one is added.</span>
        </vs-alert>

        <div class="demo-alignment mt-5">

            <vs-avatar />
            <vs-avatar text="Luis Daniel"/>
            <vs-avatar text="Luisd"/>
            <vs-avatar src="https://i.imgur.com/ezM6SJ5.png"/>

        </div>

        <template slot="codeContainer">
&lt;vs-avatar /&gt;
&lt;vs-avatar text=&quot;Luis Daniel&quot;/&gt;
&lt;vs-avatar text=&quot;Luisd&quot;/&gt;
&lt;vs-avatar src=&quot;https://i.imgur.com/ezM6SJ5.png&quot;/&gt;
        </template>

    </vx-card>
</template>
