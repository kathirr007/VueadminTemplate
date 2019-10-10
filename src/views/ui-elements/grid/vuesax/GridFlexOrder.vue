<!-- =========================================================================================
    File Name: GridFlexOrder.vue
    Description: Change the order of the grid items
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Flex Order" code-toggler>

        <p>In some cases, we want to order the elements to our liking. To do this, use the directive <code>vs-order</code> that has a parameter you just have to pass the number in which we want to order the <code>vs-col</code> with respect to his brothers <code>vs-col</code></p>

        <div class="grid-demo__layout-container">
            <vs-row vs-type="flex">
                <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">1 / order </span><span>3</span>
                </vs-col>
                <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">2 / order </span><span>1</span>
                </vs-col>
                <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">3 / order </span><span>4</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">4 / order </span><span>2</span>
                </vs-col>
            </vs-row>
        </div>
        
        <template slot="codeContainer">
&lt;vs-row vs-type=&quot;flex&quot;&gt;
  &lt;vs-col
    vs-order=&quot;3&quot;
    vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;3&quot;&gt;
      1 / order 3
  &lt;/vs-col&gt;
  &lt;vs-col
    vs-order=&quot;1&quot;
    vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;3&quot;&gt;
      2 / order 1
  &lt;/vs-col&gt;
  &lt;vs-col
    vs-order=&quot;4&quot;
    vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;3&quot;&gt;
      3 / order 4
  &lt;/vs-col&gt;
  &lt;vs-col
    vs-order=&quot;2&quot;
    vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;3&quot;&gt;
      4 / order 2
  &lt;/vs-col&gt;
&lt;/vs-row&gt;
        </template>
    </vx-card>
</template>