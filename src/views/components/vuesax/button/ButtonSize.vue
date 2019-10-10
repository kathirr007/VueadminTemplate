<!-- =========================================================================================
    File Name: ButtonSize.vue
    Description: Change size of button
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Size" code-toggler>
        
        <p>To define the size of button the directive is used <code>size</code>. there are three type of size: <code>large</code>, <code>default</code>, <code>small</code>. It is not important to specify the size when the button is of type <code>default</code></p>

        <div class="demo-alignment">

            <vs-button size="large">Large</vs-button>
            <vs-button>Default</vs-button>
            <vs-button size="small">Small</vs-button>

        </div>

        <template slot="codeContainer">
&lt;vs-button size=&quot;large&quot;&gt;Large&lt;/vs-button&gt;
&lt;vs-button&gt;Default&lt;/vs-button&gt;
&lt;vs-button size=&quot;small&quot;&gt;Small&lt;/vs-button&gt;
        </template>

    </vx-card>
</template>