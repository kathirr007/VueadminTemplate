<!-- =========================================================================================
    File Name: BreadcrumbDefault.vue
    Description: Default breadcrumb
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>Use the <code>items</code> in order to programatically generate the breadcrumb links</p>

        <div class="demo-alignment">

            <vs-breadcrumb
            :items="
                [
                    { title: 'Dashboard', url: '/' },
                    { title: 'Link 1', url: '/blog' },
                    { title: 'Link 2', disabled: true },
                    { title: 'Active', active: true }
                ]"
            ></vs-breadcrumb>

        </div>

        <template slot="codeContainer">
&lt;vs-breadcrumb
:items=&quot;
   [
     {
       title: &apos;Dashboard&apos;,
       url: &apos;/&apos;
     },
     {
       title: &apos;Link 1&apos;,
       url: &apos;/blog&apos;
     },
     {
       title: &apos;Link 2&apos;,
       disabled: true
     },
     {
       title: &apos;Active&apos;,
       active: true
     }
   ]&quot;
&gt;&lt;/vs-breadcrumb&gt;
        </template>

    </vx-card>
</template>
