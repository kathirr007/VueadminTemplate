<!-- =========================================================================================
    File Name: TailwindBackgroundClasses.vue
    Description: Background Colors classes
    Note: If you added more colors then you can use it using 'bg-{colorName}'
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Background Classes" code-toggler no-shadow card-border>

        <span>You can use <code>bg-{color}</code> for applying default colors to background.</span> <br>
        <span>There is also other tailwind classes like <code>bg-white</code>, <code>bg-black</code>, <code>bg-transparent</code></span>

        <ul class="demo-alignment text-white mt-5">
            <li class="bg-primary">primary</li>
            <li class="bg-success">success</li>
            <li class="bg-danger">danger</li>
            <li class="bg-warning">warning</li>
            <li class="bg-dark">dark</li>
            <li class="bg-white text-dark">white</li>
            <li class="bg-black">black</li>
            <li class="bg-transparent text-dark">transparent</li>
        </ul>
        
        <template slot="codeContainer">

&lt;ul class=&quot;demo-alignment text-white&quot;&gt;
  &lt;li class=&quot;bg-primary&quot;&gt;primary&lt;/li&gt;
  &lt;li class=&quot;bg-success&quot;&gt;success&lt;/li&gt;
  &lt;li class=&quot;bg-danger&quot;&gt;danger&lt;/li&gt;
  &lt;li class=&quot;bg-warning&quot;&gt;warning&lt;/li&gt;
  &lt;li class=&quot;bg-dark&quot;&gt;dark&lt;/li&gt;
  &lt;li class=&quot;bg-white text-dark&quot;&gt;white&lt;/li&gt;
  &lt;li class=&quot;bg-black&quot;&gt;black&lt;/li&gt;
  &lt;li class=&quot;bg-transparent text-dark&quot;&gt;transparent&lt;/li&gt;
&lt;/ul&gt;

        </template>
    </vx-card>
</template>