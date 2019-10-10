<!-- =========================================================================================
    File Name: GridFlexLayout.vue
    Description: Align elements horizontally
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Flex layout" code-toggler>

        <p>If we need to align the elements horizontally, use the <code>vs-justify</code> directive that uses CSS attributes as parameters: <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-around</code>, <code>space-between</code></p>

        <div class="grid-demo__layout-container">
            <vs-row vs-w="12">
                <vs-col :key="index" v-for="(col,index) in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-0 p-4 text-center">
                    <span class="sm:inline hidden">default</span>
                </vs-col>
            </vs-row>
            <vs-row vs-type="flex" vs-justify="center">
                <vs-col :key="index" v-for="(col,index) in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-0 p-4 text-center">
                    <span class="sm:inline hidden">center</span>
                </vs-col>
            </vs-row>
            <vs-row vs-type="flex" vs-justify="flex-end">
                <vs-col :key="index" v-for="(col,index) in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-0 p-4 text-center">
                    <span class="sm:inline hidden">flex-end</span>
                </vs-col>
            </vs-row>
            <vs-row vs-type="flex" vs-justify="space-around">
                <vs-col :key="index" v-for="(col,index) in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-0 p-4 text-center">
                    <span class="sm:inline hidden">space-around</span>
                </vs-col>
            </vs-row>
            <vs-row vs-type="flex" vs-justify="space-between">
                <vs-col :key="index" v-for="(col,index) in 3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-0 p-4 text-center">
                    <span class="sm:inline hidden">space-between</span>
                </vs-col>
            </vs-row>
        </div>
        
        <template slot="codeContainer">
&lt;vs-row vs-w=&quot;12&quot;&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 3&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    default
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row vs-type=&quot;flex&quot; vs-justify=&quot;center&quot;&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 3&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    center
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row vs-type=&quot;flex&quot; vs-justify=&quot;flex-end&quot;&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 3&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    flex-end
  &lt;/vs-col&gt;
&lt;/vs-row&gt;


&lt;vs-row vs-type=&quot;flex&quot; vs-justify=&quot;space-around&quot;&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 3&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    space-around
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row vs-type=&quot;flex&quot; vs-justify=&quot;space-between&quot;&gt;
  &lt;vs-col :key=&quot;index&quot; v-for=&quot;col,index in 3&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    space-between
  &lt;/vs-col&gt;
&lt;/vs-row&gt;
        </template>
    </vx-card>
</template>