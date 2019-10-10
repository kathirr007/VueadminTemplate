<!-- =========================================================================================
    File Name: CollapseOpenHover.vue
    Description: Open collapse on hover
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Open Hover" code-toggler>
        
        <p>If you want the items to open when you hover in, add the <code>open-hover</code> property in the component</p>

        <div class="mt-5">

            <vs-collapse open-hover>

                <vs-collapse-item>

                    <div slot="header">Collapse item</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
                </vs-collapse-item>

                <vs-collapse-item>

                    <div slot="header">Collapse item 2</div>
                    efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
                </vs-collapse-item>

                <vs-collapse-item disabled>

                    <div slot="header">Collapse item 3 - Disabled</div>
                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
                </vs-collapse-item>

                <vs-collapse-item>

                    <div slot="header">Collapse item 4</div>

                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat.
                </vs-collapse-item>
            </vs-collapse>

        </div>

        <template slot="codeContainer">
&lt;template&gt;

  &lt;vs-collapse open-hover&gt;

    &lt;vs-collapse-item&gt;
      &lt;div slot=&quot;header&quot;&gt;
        Collapse item
      &lt;/div&gt;
      Lorem...metus.
    &lt;/vs-collapse-item&gt;

    &lt;vs-collapse-item&gt;
      &lt;div slot=&quot;header&quot;&gt;
        Collapse item 2
      &lt;/div&gt;
      Nunc...maximus.
    &lt;/vs-collapse-item&gt;

    &lt;vs-collapse-item disabled&gt;
      &lt;div slot=&quot;header&quot;&gt;
        Collapse item 3 - Disabled
      &lt;/div&gt;
      Suspendisse...eu
    &lt;/vs-collapse-item&gt;
    
    &lt;vs-collapse-item&gt;
      &lt;div slot=&quot;header&quot;&gt;
        Collapse item 4
      &lt;/div&gt;
      Suspendisse...finibus.
    &lt;/vs-collapse-item&gt;
  &lt;/vs-collapse&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>