<!-- =========================================================================================
    File Name: DividerText.vue
    Description: Divider with text added between the line
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Text" code-toggler>
        
        <p>You can add a text between the line to delimit two elements and have a description for the user</p>

        <div class="op-block mt-5">

        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <vs-divider> My Text </vs-divider>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </div>

        <template slot="codeContainer">
Ut enim ad minim veniam, quis nostrud....mollit anim id est laborum.
&lt;vs-divider&gt; My Text &lt;/vs-divider&gt;
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>

    </vx-card>
</template>