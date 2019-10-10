<!-- =========================================================================================
    File Name: ListHeader.vue
    Description: Create list with header
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Header" code-toggler>
        
        <p>A <code>vs-list-header</code> separator with custom <code>color</code></p>

        <div class="demo-alignment">

            <vs-list>
                <vs-list-header title="Group 1"></vs-list-header>
                
                <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
                <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
                <vs-list-header title="Group 2" color="success"></vs-list-header>
                <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
                <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
            </vs-list>

        </div>

        <template slot="codeContainer">
&lt;vs-list&gt;
  &lt;vs-list-header title=&quot;Group 1&quot;&gt;&lt;/vs-list-header&gt;

  &lt;vs-list-item title=&quot;Snickerdoodle&quot; subtitle=&quot;An excellent companion&quot;&gt;&lt;/vs-list-item&gt;
  &lt;vs-list-item title=&quot;Sapporo Haru&quot; subtitle=&quot;An excellent polish restaurant, quick delivery and hearty, filling meals&quot;&gt;&lt;/vs-list-item&gt;
  &lt;vs-list-header title=&quot;Group 2&quot; color=&quot;success&quot;&gt;&lt;/vs-list-header&gt;
  &lt;vs-list-item title=&quot;Enid&apos;s&quot; subtitle=&quot;At night a bar, during the day a delicious brunch spot.&quot;&gt;&lt;/vs-list-item&gt;
  &lt;vs-list-item title=&quot;Veronika Ossi&quot; subtitle=&quot;Has not watched anything recently&quot;&gt;&lt;/vs-list-item&gt;
&lt;/vs-list&gt;
        </template>

    </vx-card>
</template>