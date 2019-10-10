<!-- =========================================================================================
    File Name: ToolptipTitle.vue
    Description: Create tooltip with title
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Title" code-toggler>
        
        <p>If necessary, you can add a title to the tooltip with the property <code>title</code></p>

        <div class="demo-alignment">
            <vx-tooltip
                title="Are you sure?"
                color="warning"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet.">

                <vs-button color="warning" type="flat">Title Tooltip</vs-button>
            </vx-tooltip>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vx-tooltip
    title=&quot;Are you sure?&quot;
    color=&quot;warning&quot;
    text=&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet.&quot;&gt;
    
    &lt;vs-button color=&quot;warning&quot; type=&quot;flat&quot;&gt;Title Tooltip&lt;/vs-button&gt;
  &lt;/vx-tooltip&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>