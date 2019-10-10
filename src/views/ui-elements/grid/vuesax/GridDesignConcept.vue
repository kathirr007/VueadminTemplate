<!-- =========================================================================================
    File Name: GridDesignConcept.vue
    Description: Concept of grid system
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Design Concept" code-toggler>

        <p>With the directive <code>vs-w</code> define the width of the column (<code>vs-col</code>) its value is <strong>1-12</strong> an example of sizes would be: <strong>12 = 100%, 6 = 50%, 4 = 25%</strong></p>

        <div class="grid-demo__layout-container">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" class="p-4 sm:p-2">
                    <span class="sm:inline hidden">100%</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :key="index" v-for="(col,index) in 2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" class="p-4 sm:p-2">
                    <span class="sm:inline hidden">50%</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :key="index" v-for="(col,index) in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" class="p-4 sm:p-2">
                    <span class="sm:inline hidden">33.3%</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :key="index" v-for="(col,index) in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="p-4 sm:p-2">
                    <span class="sm:inline hidden">25%</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :key="index" v-for="(col,index) in 6" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="p-4 sm:p-2">
                    <span class="sm:inline hidden">16.6%</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col :key="index" v-for="(col,index) in 12" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1" class="p-4 sm:p-2">
                    <span class="sm:inline hidden">8.3%</span>
                </vs-col>
            </vs-row>
        </div>
        
        <template slot="codeContainer">
&lt;vs-row&gt;
  &lt;vs-col vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;12&quot;&gt;
    100%
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 2&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;6&quot;&gt;
    50%
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 3&quot; v-tooltip=&quot;&apos;col - 4&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;4&quot;&gt;
    33.3%
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 4&quot; v-tooltip=&quot;&apos;col - 3&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;3&quot;&gt;
    25%
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 6&quot; v-tooltip=&quot;&apos;col - 2&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    16.6%
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 12&quot; v-tooltip=&quot;&apos;col - 1&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;1&quot;&gt;
    8.3%
  &lt;/vs-col&gt;
&lt;/vs-row&gt;
        </template>
    </vx-card>
</template>