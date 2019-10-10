<!-- =========================================================================================
    File Name: GridWrappingColumns.vue
    Description: flexbox flex-wrap in action
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Wrapping Columns" code-toggler>

        <p>Add <code>flex-wrap</code> to your column container to allow columns to wrap when they run out of room</p>

        <div class="mt-5">
            <div class="flex flex-wrap -mb-4">
                <div class="w-1/3 mb-4 bg-grid-color-secondary h-12 flex"><span class="flex m-auto">w-1/3</span></div>
                <div class="w-1/3 mb-4 bg-grid-color h-12 flex"><span class="flex m-auto">w-1/3</span></div>
                <div class="w-1/3 mb-4 bg-grid-color-secondary h-12 flex"><span class="flex m-auto">w-1/3</span></div>
                <div class="w-1/3 mb-4 bg-grid-color h-12 flex"><span class="flex m-auto">w-1/3</span></div>
                <div class="w-1/3 mb-4 bg-grid-color-secondary h-12 flex"><span class="flex m-auto">w-1/3</span></div>
            </div>
        </div>
        
        <template slot="codeContainer">
&lt;div class=&quot;flex flex-wrap -mb-4&quot;&gt;
  &lt;div class=&quot;w-1/3 mb-4 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/3 mb-4 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/3 mb-4 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/3 mb-4 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/3 mb-4 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>