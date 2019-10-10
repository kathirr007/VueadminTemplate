<!-- =========================================================================================
    File Name: ToolptipColor.vue
    Description: Change color of tooltip
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>To change the color of the tooltip, use the property color. You are able to use the Main Colors or <strong>RGB</strong> and <strong>HEX</strong> colors</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment">
            <vx-tooltip text="Tooltip default">
                <vs-button type="gradient">Default Color</vs-button>
            </vx-tooltip>

            <vx-tooltip color="primary" text="Tooltip Primary">
                <vs-button type="border">Color primary</vs-button>
            </vx-tooltip>

            <vx-tooltip color="success" text="Tooltip Success">
                <vs-button color="success" type="border">Color success</vs-button>
            </vx-tooltip>

            <vx-tooltip color="danger" text="Tooltip Danger">
                <vs-button color="danger" type="border">Color danger</vs-button>
            </vx-tooltip>

            <vx-tooltip color="warning" text="Tooltip Warning">
                <vs-button color="warning" type="border">Color warning</vs-button>
            </vx-tooltip>

            <vx-tooltip color="dark" text="Tooltip Dark">
                <vs-button color="dark" type="border">Color dark</vs-button>
            </vx-tooltip>

            <vx-tooltip color="rgb(42, 207, 133)" text="Tooltip RGB">
                <vs-button color="rgb(42, 207, 133)" type="border">Color RGB</vs-button>
            </vx-tooltip>
            
            <vx-tooltip color="#4a0d6b" text="Tooltip HEX">
                <vs-button color="#4a0d6b" type="border">Color HEX</vs-button>
            </vx-tooltip>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vx-tooltip text=&quot;Tooltip default&quot;&gt;
    &lt;vs-button type=&quot;gradient&quot;&gt;Default Color&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip color=&quot;primary&quot; text=&quot;Tooltip Primary&quot;&gt;
    &lt;vs-button type=&quot;border&quot;&gt;Color primary&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip color=&quot;success&quot; text=&quot;Tooltip Success&quot;&gt;
    &lt;vs-button color=&quot;success&quot; type=&quot;border&quot;&gt;Color success&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip color=&quot;danger&quot; text=&quot;Tooltip Danger&quot;&gt;
    &lt;vs-button color=&quot;danger&quot; type=&quot;border&quot;&gt;Color danger&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip color=&quot;warning&quot; text=&quot;Tooltip Warning&quot;&gt;
    &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot;&gt;Color warning&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip color=&quot;dark&quot; text=&quot;Tooltip Dark&quot;&gt;
    &lt;vs-button color=&quot;dark&quot; type=&quot;border&quot;&gt;Color dark&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip color=&quot;rgb(42, 207, 133)&quot; text=&quot;Tooltip RGB&quot;&gt;
    &lt;vs-button color=&quot;rgb(42, 207, 133)&quot; type=&quot;border&quot;&gt;Color RGB&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;
  
  &lt;vx-tooltip color=&quot;#4a0d6b&quot; text=&quot;Tooltip HEX&quot;&gt;
    &lt;vs-button color=&quot;#4a0d6b&quot; type=&quot;border&quot;&gt;Color HEX&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>