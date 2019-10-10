<!-- =========================================================================================
    File Name: GridResponsiveGrids.vue
    Description: Create responsive grids using tailwind css
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Responsive Grids" code-toggler>

        <p>Use the responsive variants of the width utilities to build responsive grid layouts</p>

        <div class="mt-5">
            <div class="flex flex-wrap mb-base">
                <vs-button type="border" class="mr-4 mb-4" @click="colClass = 'w-full'">All (w-full)</vs-button>
                <vs-button type="border" class="mr-4 mb-4" @click="colClass = 'w-1/2'">sm:w-1/2</vs-button>
                <vs-button type="border" class="mr-4 mb-4" @click="colClass = 'w-1/3'">md:w-1/3</vs-button>
                <vs-button type="border" class="mr-4 mb-4" @click="colClass = 'w-1/4'">lg:w-1/4</vs-button>
                <vs-button type="border" class="mr-4 mb-4" @click="colClass = 'w-1/6'">xl:w-1/6</vs-button>
            </div>
            <div class="flex flex-wrap">
                <div :class="colClass" class="mb-4 h-12 bg-grid-color"></div>
                <div :class="colClass" class="mb-4 h-12 bg-grid-color-secondary"></div>
                <div :class="colClass" class="mb-4 h-12 bg-grid-color"></div>
                <div :class="colClass" class="mb-4 h-12 bg-grid-color-secondary"></div>
                <div :class="colClass" class="mb-4 h-12 bg-grid-color"></div>
                <div :class="colClass" class="mb-4 h-12 bg-grid-color-secondary"></div>
            </div>
        </div>
        
        <template slot="codeContainer">
&lt;div class=&quot;flex flex-wrap&quot;&gt;
  &lt;div class=&quot;w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grid-color&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grid-color-secondary&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grid-color&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grid-color-secondary&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grid-color&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grid-color-secondary&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>

<script>
    export default{
        data() {
            return {
                colClass: 'w-full',
            }
        },
    }
</script>