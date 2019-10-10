<!-- =========================================================================================
    File Name: ProgressColor.vue
    Description: Change color of progress with color prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>Nice colors for your progress bar</p>    

        <div class="mt-5">
            <vs-progress :percent="100" color="primary"></vs-progress>
            <vs-progress :percent="90" color="warning"></vs-progress>
            <vs-progress :percent="75" color="danger"></vs-progress>
            <vs-progress :percent="60" color="success"></vs-progress>
            <vs-progress :percent="45" color="dark"></vs-progress>
            <vs-progress :percent="30" color="rgb(164, 69, 15)"></vs-progress>
            <vs-progress :percent="15" color="#24c1a0"></vs-progress>
        </div>

        <template slot="codeContainer">
&lt;vs-progress :percent=&quot;100&quot; color=&quot;primary&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :percent=&quot;90&quot; color=&quot;warning&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :percent=&quot;75&quot; color=&quot;danger&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :percent=&quot;60&quot; color=&quot;success&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :percent=&quot;45&quot; color=&quot;dark&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :percent=&quot;30&quot; color=&quot;rgb(164, 69, 15)&quot;&gt;&lt;/vs-progress&gt;
&lt;vs-progress :percent=&quot;15&quot; color=&quot;#24c1a0&quot;&gt;&lt;/vs-progress&gt;
        </template>

    </vx-card>
</template>