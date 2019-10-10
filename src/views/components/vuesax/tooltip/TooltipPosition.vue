<!-- =========================================================================================
    File Name: ToolptipPosition.vue
    Description: Change the position of tooltip
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Position" code-toggler>
        
        <p>You can change the position at which the tooltip appears with the property <code>position</code></p>

        <div class="demo-alignment">
            <vx-tooltip text="Tooltip position Left" position="left">
                <vs-button type="gradient">Left</vs-button>
            </vx-tooltip>
            <vx-tooltip text="Tooltip position Top" position="top">
                <vs-button type="gradient">Top</vs-button>
            </vx-tooltip>
            <vx-tooltip text="Tooltip position Bottom" position="bottom">
                <vs-button type="gradient">Bottom</vs-button>
            </vx-tooltip>
            <vx-tooltip text="Tooltip position Right" position="right">
                <vs-button type="gradient">Right</vs-button>
            </vx-tooltip>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vx-tooltip text=&quot;Tooltip position Left&quot; position=&quot;left&quot;&gt;
    &lt;vs-button type=&quot;gradient&quot;&gt;Left&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip text=&quot;Tooltip position Top&quot; position=&quot;top&quot;&gt;
    &lt;vs-button type=&quot;gradient&quot;&gt;Top&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip text=&quot;Tooltip position Bottom&quot; position=&quot;bottom&quot;&gt;
    &lt;vs-button type=&quot;gradient&quot;&gt;Bottom&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip text=&quot;Tooltip position Right&quot; position=&quot;right&quot;&gt;
    &lt;vs-button type=&quot;gradient&quot;&gt;Right&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>