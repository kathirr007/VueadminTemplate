<!-- =========================================================================================
  File Name: ButtonGroupToolbar.vue.vue
  Description: Buttons Group Toolbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Toolbar" code-toggler>

    <p class="mb-4">Use flex container on button groups to create button toolbar.</p>

    <div class="flex flex-wrap">
      <div class="btn-group mr-4 mt-4">
        <vs-button>1</vs-button>
        <vs-button>2</vs-button>
        <vs-button>3</vs-button>
        <vs-button>4</vs-button>
      </div>

      <div class="btn-group mt-4 mr-4">
        <vs-button>5</vs-button>
        <vs-button>6</vs-button>
        <vs-button>7</vs-button>
      </div>

      <div class="btn-group mt-4">
        <vs-button>8</vs-button>
      </div>
    </div>

    <template slot="codeContainer">
&lt;div class=&quot;flex flex-wrap&quot;&gt;
  &lt;div class=&quot;btn-group&quot;&gt;
    &lt;vs-button&gt;1&lt;/vs-button&gt;
    &lt;vs-button&gt;2&lt;/vs-button&gt;
    &lt;vs-button&gt;3&lt;/vs-button&gt;
    &lt;vs-button&gt;4&lt;/vs-button&gt;
  &lt;/div&gt;

  &lt;div class=&quot;btn-group ml-4&quot;&gt;
    &lt;vs-button&gt;5&lt;/vs-button&gt;
    &lt;vs-button&gt;6&lt;/vs-button&gt;
    &lt;vs-button&gt;7&lt;/vs-button&gt;
  &lt;/div&gt;

  &lt;div class=&quot;btn-group ml-4&quot;&gt;
    &lt;vs-button&gt;8&lt;/vs-button&gt;
  &lt;/div&gt;
&lt;/div&gt;
    </template>
  </vx-card>
</template>

