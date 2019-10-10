<!-- =========================================================================================
    File Name: TailwindTextClasses.vue
    Description: Text Colors classes
    Note: If you added more colors then you can use it using 'text-{colorName}'
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Text Classes" code-toggler no-shadow card-border>

        <span>You can use <code>text-{color}</code> for applying default colors to text.</span> <br>
        <span>There is also other tailwind classes like <code>text-white</code>, <code>text-black</code>, <code>text-transparent</code></span>

        <div class="demo-alignment">
            <span class="text-primary">primary</span>
            <span class="text-success">success</span>
            <span class="text-danger">danger</span>
            <span class="text-warning">warning</span>
            <span class="text-dark">dark</span>
            <span class="text-white bg-primary p-2 rounded">white</span>
            <span class="text-black">black</span>
            <span class="text-transparent">transparent</span>
        </div>
        
        <template slot="codeContainer">

&lt;div class=&quot;demo-alignment&quot;&gt;
  &lt;span class=&quot;text-primary&quot;&gt;primary&lt;/span&gt;
  &lt;span class=&quot;text-success&quot;&gt;success&lt;/span&gt;
  &lt;span class=&quot;text-danger&quot;&gt;danger&lt;/span&gt;
  &lt;span class=&quot;text-warning&quot;&gt;warning&lt;/span&gt;
  &lt;span class=&quot;text-dark&quot;&gt;dark&lt;/span&gt;
  &lt;span class=&quot;text-white op-block&quot;&gt;white&lt;/span&gt;
  &lt;span class=&quot;text-black&quot;&gt;black&lt;/span&gt;
  &lt;span class=&quot;text-transparent op-block&quot;&gt;transparent&lt;/span&gt;
&lt;/div&gt;

        </template>
    </vx-card>
</template>