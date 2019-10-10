<!-- =========================================================================================
    File Name: DividerTextPosition.vue
    Description: Divider text with horizontal alignment
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Text Position" code-toggler>
        
        <p>You can guide the text in 5 ways with property <code>position</code>:</p>
        <vx-list :list="['left', 'left-center', 'center(default)', 'right-center', 'right']" class="mt-3"></vx-list>

        <div class="op-block mt-5">

            <vs-divider position="left"> Left </vs-divider>
            <vs-divider position="left-center"> Left-Center </vs-divider>
            <vs-divider position="center"> Center(default) </vs-divider>
            <vs-divider position="right-center"> Right-Center </vs-divider>
            <vs-divider position="right">Right</vs-divider>

        </div>

        <template slot="codeContainer">
&lt;vs-divider position=&quot;left&quot;&gt;Left&lt;/vs-divider&gt;

&lt;vs-divider position=&quot;left-center&quot;&gt;Left-Center&lt;/vs-divider&gt;

&lt;vs-divider position=&quot;center&quot;&gt;Center(default)&lt;/vs-divider&gt;

&lt;vs-divider position=&quot;right-center&quot;&gt;Right-Center&lt;/vs-divider&gt;

&lt;vs-divider position=&quot;right&quot;&gt;Right&lt;/vs-divider&gt;
        </template>

    </vx-card>
</template>