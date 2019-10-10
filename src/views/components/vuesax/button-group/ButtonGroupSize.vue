<!-- =========================================================================================
  File Name: ButtonGroupSize.vue.vue
  Description: Buttons Group Size
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Sizing" code-toggler>

    <p class="mb-4">You can use <code>size</code> prop of button component to change the size of button group.</p>

    <div class="btn-group">
      <vs-button size="large">Left</vs-button>
      <vs-button size="large">Middle</vs-button>
      <vs-button size="large">Right</vs-button>
    </div>

    <div class="btn-group my-4">
      <vs-button>Left</vs-button>
      <vs-button>Middle</vs-button>
      <vs-button>Right</vs-button>
    </div>

    <div class="btn-group">
      <vs-button size="small">Left</vs-button>
      <vs-button size="small">Middle</vs-button>
      <vs-button size="small">Right</vs-button>
    </div>

    <template slot="codeContainer">
&lt;div class=&quot;btn-group&quot;&gt;
  &lt;vs-button size=&quot;large&quot;&gt;Left&lt;/vs-button&gt;
  &lt;vs-button size=&quot;large&quot;&gt;Middle&lt;/vs-button&gt;
  &lt;vs-button size=&quot;large&quot;&gt;Right&lt;/vs-button&gt;
&lt;/div&gt;

&lt;div class=&quot;btn-group my-4&quot;&gt;
  &lt;vs-button&gt;Left&lt;/vs-button&gt;
  &lt;vs-button&gt;Middle&lt;/vs-button&gt;
  &lt;vs-button&gt;Right&lt;/vs-button&gt;
&lt;/div&gt;

&lt;div class=&quot;btn-group&quot;&gt;
  &lt;vs-button size=&quot;small&quot;&gt;Left&lt;/vs-button&gt;
  &lt;vs-button size=&quot;small&quot;&gt;Middle&lt;/vs-button&gt;
  &lt;vs-button size=&quot;small&quot;&gt;Right&lt;/vs-button&gt;
&lt;/div&gt;
    </template>
  </vx-card>
</template>

