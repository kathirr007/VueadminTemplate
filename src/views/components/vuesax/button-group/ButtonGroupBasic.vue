<!-- =========================================================================================
  File Name: ButtonGroupBasic.vue.vue
  Description: Buttons Group Basic
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Basic" code-toggler>

    <p class="mb-4">Add <code>btn-group</code> class to wrapper to make all contained button acts as grouped buttons.</p>

    <div class="btn-group">
      <vs-button>Left</vs-button>
      <vs-button>Middle</vs-button>
      <vs-button>Right</vs-button>
    </div>

    <template slot="codeContainer">
&lt;div class=&quot;btn-group&quot;&gt;
  &lt;vs-button&gt;Left&lt;/vs-button&gt;
  &lt;vs-button&gt;Middle&lt;/vs-button&gt;
  &lt;vs-button&gt;Right&lt;/vs-button&gt;
&lt;/div&gt;
    </template>
  </vx-card>
</template>

