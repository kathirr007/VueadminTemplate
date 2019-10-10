<!-- =========================================================================================
    File Name: FlexAlignmentTop.vue
    Description: Align elements vertically - Top
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Align Top" code-toggler no-shadow card-border>

        <div class="grid-demo__layout-container--block">
            <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
                <vs-col :key="index" v-for="(col,index) in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">col - 3</span>
                </vs-col>
            </vs-row>
        </div>
        
        <template slot="codeContainer">
&lt;div class=&quot;grid-layout-container alignment-block&quot;&gt;
  &lt;vs-row
    vs-align=&quot;flex-start&quot;
    vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-w=&quot;12&quot;&gt;
    &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 4&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
      col - 3
    &lt;/vs-col&gt;
  &lt;/vs-row&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>