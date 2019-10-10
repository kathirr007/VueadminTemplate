<!-- =========================================================================================
    File Name: GridMixedColumnSizes.vue
    Description: Create columns of different sizes
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Mixed Column Sizes" code-toggler>

        <p>Mix different percentage width utilities to build mixed size grids</p>

        <div class="mt-5">
            <!-- Narrower side column -->
            <div class="flex mb-4">
                <div class="w-3/4 bg-grid-color h-12 flex"><span class="flex m-auto">w-3/4</span></div>
                <div class="w-1/4 bg-grid-color-secondary h-12 flex"><span class="flex m-auto">w-1/4</span></div>
            </div>
            <!-- Wide center column -->
            <div class="flex">
                <div class="w-1/5 bg-grid-color h-12 flex"><span class="flex m-auto">w-1/5</span></div>
                <div class="w-3/5 bg-grid-color-secondary h-12 flex"><span class="flex m-auto">w-3/5</span></div>
                <div class="w-1/5 bg-grid-color h-12 flex"><span class="flex m-auto">w-1/5</span></div>
            </div>
        </div>
        
        <template slot="codeContainer">
&lt;!-- Narrower side column --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;w-3/4 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/4 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Wide center column --&gt;
&lt;div class=&quot;flex&quot;&gt;
  &lt;div class=&quot;w-1/5 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-3/5 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/5 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>