<!-- =========================================================================================
    File Name: TabsAlignments.vue
    Description: Align your tabs using alignments prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Alignments" code-toggler>

        <p>Change the alignment of the buttons with the property alignments. Allowed values are:</p>

        <vx-list :list="['center', 'right', 'fixed']" class="mt-3"></vx-list>

        <div class="mt-5">
            <h6 class="mb-3"> Default </h6>
            <vs-tabs>
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

        <div class="mt-5">
            <h6 class="mb-3"> Center </h6>
            <vs-tabs alignment="center">
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

        <div class="mt-5">
            <h6 class="mb-3"> Right </h6>
            <vs-tabs alignment="right">
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

        <div class="mt-5">
            <h6 class="mb-3"> Fixed </h6>
            <vs-tabs alignment="fixed">
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;mt-5&quot;&gt;
    &lt;h3&gt; Default &lt;/h3&gt;
    &lt;vs-tabs&gt;
      &lt;vs-tab label=&quot;Home&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Documents&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Contributors&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Ecosystem&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
    &lt;/vs-tabs&gt;
  &lt;/div&gt;

  &lt;div class=&quot;mt-5&quot;&gt;
    &lt;h3&gt; Center &lt;/h3&gt;
    &lt;vs-tabs alignment=&quot;center&quot;&gt;
      &lt;vs-tab label=&quot;Home&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Documents&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Contributors&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Ecosystem&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
    &lt;/vs-tabs&gt;
  &lt;/div&gt;

  &lt;div class=&quot;mt-5&quot;&gt;
    &lt;h3&gt; Right &lt;/h3&gt;
    &lt;vs-tabs alignment=&quot;right&quot;&gt;
      &lt;vs-tab label=&quot;Home&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Documents&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Contributors&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Ecosystem&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
    &lt;/vs-tabs&gt;
  &lt;/div&gt;

  &lt;div class=&quot;mt-5&quot;&gt;
    &lt;h3&gt; Fixed &lt;/h3&gt;
    &lt;vs-tabs alignment=&quot;fixed&quot;&gt;
      &lt;vs-tab label=&quot;Home&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Documents&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Contributors&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
      &lt;vs-tab label=&quot;Ecosystem&quot;&gt;
        &lt;div&gt;&lt;/div&gt;
      &lt;/vs-tab&gt;
    &lt;/vs-tabs&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>
