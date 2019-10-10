<!-- =========================================================================================
    File Name: AlertTitle.vue
    Description: Alert with title
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Title" code-toggler>
        
        <p>Add a title to the alert with the property <code>title</code></p>

        <vs-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true" class="mt-5 text-warning">
        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </vs-alert>

        <template slot="codeContainer">
&lt;vs-alert title=&quot;Lorem ipsum dolor sit amet&quot; color=&quot;rgb(231, 154, 23)&quot; active=&quot;true&quot; class=&quot;mt-5 text-warning&quot;&gt;
    Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
&lt;/vs-alert&gt;
        </template>

    </vx-card>
</template>