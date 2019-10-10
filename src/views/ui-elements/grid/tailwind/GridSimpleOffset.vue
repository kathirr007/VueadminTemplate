<!-- =========================================================================================
    File Name: GridSimpleOffset.vue
    Description: Add offset to columns
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Simple Offsets" code-toggler>

        <p>Use auto margin utilities like <code>ml-auto</code> and <code>mr-auto</code> to offset columns in a row</p>

        <div class="mt-5">
            <div class="flex flex-wrap">
                <div class="w-1/3 ml-auto bg-grid-color h-12 flex">
                    <span class="flex m-auto">
                        <span class="sm:inline hidden mr-2">w-1/3</span>
                        <span>ml-auto</span>
                    </span>
                </div>
                <div class="w-1/3 mr-auto bg-grid-color-secondary h-12 flex">
                    <span class="flex m-auto">
                        <span class="sm:inline hidden mr-2">w-1/3</span>
                        <span>mr-auto</span>
                    </span>
                </div>
            </div>
        </div>
        
        <template slot="codeContainer">
&lt;div class=&quot;flex flex-wrap&quot;&gt;
  &lt;div class=&quot;w-1/3 ml-auto bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-1/3 mr-auto bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>