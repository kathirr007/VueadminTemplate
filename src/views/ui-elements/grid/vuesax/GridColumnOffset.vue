<!-- =========================================================================================
    File Name: GridColumnOffset.vue
    Description: Add column offset to grids
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Column offset" code-toggler>

        <p>To give a distance with respect to the left we have the directive vs-offset that with the same measures 1-12 we add the space specified a serious example <code>12 = 100%</code>, <code>6 = 50%</code>, <code>4 = 25%</code></p>

        <div class="grid-demo__layout-container">
            <vs-row vs-w="12">
                <vs-col vs-offset="5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">offset - 6</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-offset="0" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">offset - 2</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-offset="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">offset - 8</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-offset="10" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">offset - 7</span>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-col vs-offset="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" class="sm:p-2 p-4">
                    <span class="sm:inline hidden">offset - 4</span>
                </vs-col>
            </vs-row>
        </div>
        
        <template slot="codeContainer">
&lt;vs-row vs-w=&quot;12&quot;&gt;
  &lt;vs-col vs-offset=&quot;5&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;6&quot;&gt;
    offset - 6
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col vs-offset=&quot;0&quot; v-tooltip=&quot;&apos;col - 2&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    offset - 2
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col vs-offset=&quot;2&quot; v-tooltip=&quot;&apos;col - 8&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;8&quot;&gt;
    offset - 8
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col vs-offset=&quot;10&quot; v-tooltip=&quot;&apos;col - 1&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;2&quot;&gt;
    offset - 7
  &lt;/vs-col&gt;
&lt;/vs-row&gt;

&lt;vs-row&gt;
  &lt;vs-col vs-offset=&quot;4&quot; v-tooltip=&quot;&apos;col - 4&apos;&quot; vs-type=&quot;flex&quot; vs-justify=&quot;center&quot; vs-align=&quot;center&quot; vs-w=&quot;4&quot;&gt;
    offset - 4
  &lt;/vs-col&gt;
&lt;/vs-row&gt;
        </template>
    </vx-card>
</template>