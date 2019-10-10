<!-- =========================================================================================
    File Name: GridColumnSpacing.vue
    Description: Add space between columns
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Column Spacing" code-toggler>

        <p>Add a negative horizontal margin like <code>-mx-2</code> to your column container and an equal horizontal padding like <code>px-2</code> to each column to add gutters</p>

        <p>To prevent horizontal scrolling in full width layouts, add <code>overflow-hidden</code> to another parent container, or compensate for the negative margin with matching horizontal padding</p>

        <div class="mt-5">
            <div class="px-2">
                <div class="flex -mx-2">
                    <div class="w-1/3 px-2">
                        <div class="bg-grid-color-secondary h-12 flex"><span class="flex m-auto">w-1/3</span></div>
                    </div>
                    <div class="w-1/3 px-2">
                        <div class="bg-grid-color h-12 flex"><span class="flex m-auto">w-1/3</span></div>
                    </div>
                    <div class="w-1/3 px-2">
                        <div class="bg-grid-color-secondary h-12 flex"><span class="flex m-auto">w-1/3</span></div>
                    </div>
                </div>
            </div>
        </div>
        
        <template slot="codeContainer">
&lt;div class=&quot;px-2&quot;&gt;
  &lt;div class=&quot;flex -mx-2&quot;&gt;
    &lt;div class=&quot;w-1/3 px-2&quot;&gt;
      &lt;div class=&quot;bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;w-1/3 px-2&quot;&gt;
      &lt;div class=&quot;bg-grid-color h-12&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;w-1/3 px-2&quot;&gt;
      &lt;div class=&quot;bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>