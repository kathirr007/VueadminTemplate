<!-- =========================================================================================
    File Name: GridAutoColumnWidth.vue
    Description: Example of building grid layouts with Tailwind CSS
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Automatic Column Widths" code-toggler>

        <p>Use <code>flex-1</code> instead of an explicit width on your columns to have them size automatically to fill the row</p>

        <div class="mt-5">
            <!-- Full width column -->
            <div class="flex mb-4">
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
            </div>
            <!-- Five columns -->
            <div class="flex mb-4">
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
            </div>
            <!-- Seven columns -->
            <div class="flex mb-4">
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
            </div>
            <!-- Eleven columns -->
            <div class="flex mb-4">
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
                <div class="flex-1 bg-grid-color-secondary h-12 flex"><span class="sm:flex hidden m-auto">flex-1</span></div>
            </div>
        </div>
        
        <template slot="codeContainer">
&lt;!-- Full width column --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Five columns --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Seven columns --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Eleven columns --&gt;
&lt;div class=&quot;flex mb-4&quot;&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;flex-1 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
        </template>
    </vx-card>
</template>