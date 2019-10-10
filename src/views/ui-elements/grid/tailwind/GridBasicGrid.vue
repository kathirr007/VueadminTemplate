<!-- =========================================================================================
    File Name: GridBasicGrid.vue
    Description: Example of building grid layouts with Tailwind CSS
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Basic Grids" code-toggler>

        <p>Use the existing <a href="https://tailwindcss.com/docs/flexbox-display" rel="nofollow">Flexbox</a> and <a href="https://tailwindcss.com/docs/width" rel="nofollow">percentage width</a> utilities to construct basic grids</p>

        <div class="mt-5">
            <!-- Full width column -->
            <div class="flex mb-4">
                <div class="w-full bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-full</span></div>
            </div>

            <!-- Two columns -->
            <div class="flex mb-4">
                <div class="w-1/2 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/2</span></div>
                <div class="w-1/2 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/2</span></div>
            </div>

            <!-- Three columns -->
            <div class="flex mb-4">
                <div class="w-1/3 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/3</span></div>
                <div class="w-1/3 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/3</span></div>
                <div class="w-1/3 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/3</span></div>
            </div>

            <!-- Four columns -->
            <div class="flex mb-4">
                <div class="w-1/4 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/4</span></div>
                <div class="w-1/4 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/4</span></div>
                <div class="w-1/4 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/4</span></div>
                <div class="w-1/4 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/4</span></div>
            </div>

            <!-- Five columns -->
            <div class="flex mb-4">
                <div class="w-1/5 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/5</span></div>
                <div class="w-1/5 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/5</span></div>
                <div class="w-1/5 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/5</span></div>
                <div class="w-1/5 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/5</span></div>
                <div class="w-1/5 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/5</span></div>
            </div>

            <!-- Six columns -->
            <div class="flex">
                <div class="w-1/6 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/6</span></div>
                <div class="w-1/6 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/6</span></div>
                <div class="w-1/6 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/6</span></div>
                <div class="w-1/6 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/6</span></div>
                <div class="w-1/6 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">w-1/6</span></div>
                <div class="w-1/6 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">w-1/6</span></div>
            </div>
        </div>

        <template slot="codeContainer">
&lt;!-- Full width column --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;w-full bg-grid-color h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;!-- Two columns --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;w-1/2 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/2 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Three columns --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;w-1/3 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/3 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/3 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Four columns --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;w-1/4 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/4 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/4 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/4 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Five columns --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;w-1/5 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/5 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/5 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/5 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/5 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Six columns --&gt;
&lt;div class=&quot;flex&quot;&gt;
  &lt;div class=&quot;w-1/6 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/6 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/6 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/6 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/6 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/6 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>
