<!-- =========================================================================================
    File Name: GridColumnOrder.vue
    Description: Change the order of columns
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Column Order" code-toggler>

        <p>Use <code>flex-row-reverse</code> to reverse column order. Useful for two-column responsive layouts where the column on right should appear first on smaller screens</p>

        <div class="mt-5">
            <div class="flex md:flex-row-reverse flex-wrap">
                <div class="w-full md:w-3/4 bg-grey p-4 text-center text-grey-lighter">1</div>
                <div class="w-full md:w-1/4 bg-grey-light p-4 text-center text-grey-darker">2</div>
            </div>
        </div>
        
        <template slot="codeContainer">
&lt;div class=&quot;flex md:flex-row-reverse flex-wrap&quot;&gt;
  &lt;div class=&quot;w-full md:w-3/4 bg-grey p-4 text-center text-grey-lighter&quot;&gt;1&lt;/div&gt;
  &lt;div class=&quot;w-full md:w-1/4 bg-grey-light p-4 text-center text-grey-darker&quot;&gt;2&lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>