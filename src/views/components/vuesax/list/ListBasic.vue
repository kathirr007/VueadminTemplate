<!-- =========================================================================================
    File Name: ListBasic.vue
    Description: A basic list of items with title and subtitle
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Basic" code-toggler>
        
        <p>A basic list of items with <code>title</code> and <code>subtitle</code></p>

        <div class="demo-alignment">

            <vs-list>
                <vs-list-item title="One text"></vs-list-item>
                <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>
                <vs-list-item title="Some more text"></vs-list-item>
                <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
            </vs-list>

        </div>

        <template slot="codeContainer">
  &lt;vs-list&gt;
    &lt;vs-list-item title=&quot;One text&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item title=&quot;Another text&quot; subtitle=&quot;A little text&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item title=&quot;Some more text&quot;&gt;&lt;/vs-list-item&gt;
    &lt;vs-list-item title=&quot;Even more text&quot; subtitle=&quot;Another little text&quot;&gt;&lt;/vs-list-item&gt;
  &lt;/vs-list&gt;
        </template>

    </vx-card>
</template>