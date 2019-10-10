<!-- =========================================================================================
    File Name: ToolptipDelay.vue
    Description: Add delay to tooltip using delay prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Delay" code-toggler>
        
        <p>You can change the delay in appearing the tooltip with the property <code>delay</code></p>

        <div class="demo-alignment">
            <vx-tooltip text="Tooltip default delay">
                <vs-button>Delay default</vs-button>
            </vx-tooltip>
            <vx-tooltip delay=".5s" text="Tooltip delay 0.5s">
                <vs-button>Delay 0.5s</vs-button>
            </vx-tooltip>
            <vx-tooltip delay="2s" text="Tooltip delay 2s">
                <vs-button>Delay 2s</vs-button>
            </vx-tooltip>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vx-tooltip text=&quot;Tooltip default delay&quot;&gt;
    &lt;vs-button&gt;Delay default&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;

  &lt;vx-tooltip delay=&quot;.5s&quot; text=&quot;Tooltip delay 0.5s&quot;&gt;
    &lt;vs-button&gt;Delay 0.5s&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;
  
  &lt;vx-tooltip delay=&quot;2s&quot; text=&quot;Tooltip delay 2s&quot;&gt;
    &lt;vs-button&gt;Delay 2s&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>