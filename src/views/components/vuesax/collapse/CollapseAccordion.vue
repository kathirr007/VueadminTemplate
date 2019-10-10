<!-- =========================================================================================
    File Name: CollapseAccordion.vue
    Description: Collapse with accrodion
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Accordion" code-toggler>
        
        <p>You may need to show only one element at a time. For this add <code>accordion</code> prop to <code>vs-collapse</code></p>

        <div class="mt-5">

            <vs-collapse accordion>

                <vs-collapse-item>

                    <div slot="header">Collapse item</div>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
                    <br><br>
                    Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
                </vs-collapse-item>

                <vs-collapse-item>

                    <div slot="header">Collapse item 2</div>

                    Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
                    <br><br>
                    eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
                    <br><br>
                    efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
                </vs-collapse-item>

                <vs-collapse-item disabled>

                    <div slot="header">Collapse item 3 - Disabled</div>

                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
                </vs-collapse-item>

                <vs-collapse-item>

                    <div slot="header">Collapse item 4</div>

                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
                </vs-collapse-item>
            </vs-collapse>

        </div>

        <template slot="codeContainer">
&lt;template&gt;

  &lt;vs-collapse accordion&gt;

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