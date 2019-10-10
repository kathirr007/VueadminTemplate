<!-- =========================================================================================
    File Name: ProgressHeight.vue
    Description: Change height of progressbar with height prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Height" code-toggler>
        
        <p>You can change the height of the loading bar with the property height</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
                <p>By default the property <code>height</code> is <strong>5</strong>(5px)</p>
            </vs-alert> 

        <div class="mt-5">
            <vs-progress :height="2" :percent="100" color="primary"></vs-progress>
            <vs-progress :height="4" :percent="80" color="warning"></vs-progress>
            <vs-progress :height="8" :percent="60" color="danger"></vs-progress>
            <vs-progress :height="12" :percent="40" color="success"></vs-progress>
        </div>

        <template slot="codeContainer">
&lt;vs-progress :height=&quot;2&quot; :percent=&quot;100&quot; color=&quot;primary&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :height=&quot;4&quot; :percent=&quot;80&quot; color=&quot;warning&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :height=&quot;8&quot; :percent=&quot;60&quot; color=&quot;danger&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :height=&quot;12&quot; :percent=&quot;40&quot; color=&quot;success&quot;&gt;&lt;/vs-progress&gt;
        </template>

    </vx-card>
</template>