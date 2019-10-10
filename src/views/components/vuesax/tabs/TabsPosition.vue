<!-- =========================================================================================
    File Name: TabsPosition.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Position" code-toggler>
        
        <p>You can change the position of the menu with the property <code>position</code> that as a value you can have: <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>For the title of each tab the <code>label</code> property is implemented in the <code>vs-tab</code> component</p>
        </vs-alert>

        <div class="mt-5">
            <vs-tabs color="rgb(32, 201, 192)">

                <vs-tab label="Top">
                    <!-- top -->
                    <vs-tabs color="rgb(201, 32, 178)">
                        <vs-tab label="Home">
                            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>
                        </vs-tab>
                        <vs-tab label="Service">
                            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>
                        </vs-tab>
                        <vs-tab label="login">
                            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>
                        </vs-tab>
                        <vs-tab disabled label="Disabled">
                            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>
                        </vs-tab>
                    </vs-tabs>
                </vs-tab>

                <vs-tab label="Right">
                    <!-- right -->
                    <vs-tabs position="right" color="rgb(29, 55, 194)">
                        <vs-tab label="Home">
                            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>
                        </vs-tab>
                        <vs-tab label="Service">
                            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>
                        </vs-tab>
                        <vs-tab label="login">
                            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>
                        </vs-tab>
                        <vs-tab disabled label="Disabled">
                            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>
                        </vs-tab>
                    </vs-tabs>
                </vs-tab>

                <vs-tab label="Bottom">
                    <!-- bottom -->
                    <vs-tabs position="bottom" color="rgb(29, 55, 194)">
                        <vs-tab label="Home">
                            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>
                        </vs-tab>
                        <vs-tab label="Service">
                            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>
                        </vs-tab>
                        <vs-tab label="login">
                            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>
                        </vs-tab>
                        <vs-tab :disabled="true" label="Disabled">
                            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>
                        </vs-tab>
                    </vs-tabs>
                </vs-tab>

                <vs-tab label="Left">
                    <!-- left -->
                    <vs-tabs position="left" color="danger">
                        <vs-tab label="Home">
                            <span>Jujubes gingerbread cake pastry biscuit jelly-o marshmallow. Chocolate cake jelly marshmallow topping. Danish caramels gummies tootsie roll marshmallow sweet croissant.</span>
                        </vs-tab>
                        <vs-tab label="Service">
                            <span>Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.</span>
                        </vs-tab>
                        <vs-tab label="login">
                            <span>Chocolate icing pie danish gummies. Dragée gummies toffee muffin chocolate bar marshmallow. Marshmallow chupa chups muffin cake icing pastry wafer.</span>
                        </vs-tab>
                        <vs-tab :disabled="true" label="Disabled">
                            <span>Macaroon icing lemon drops jelly-o. Bonbon pie tart chocolate bar pastry. Sugar plum bonbon candy canes dragée toffee dragée toffee.</span>
                        </vs-tab>
                    </vs-tabs>
                </vs-tab>
            </vs-tabs>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;vs-tabs color=&quot;rgb(32, 201, 192)&quot;&gt;

      &lt;vs-tab label=&quot;Top&quot;&gt;
        &lt;!-- top --&gt;
        &lt;vs-tabs color=&quot;rgb(201, 32, 178)&quot;&gt;
          &lt;vs-tab label=&quot;Home&quot;&gt;
            &lt;span&gt;Jujubes ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;Service&quot;&gt;
            &lt;span&gt;Halvah ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;login&quot;&gt;
            &lt;span&gt;Chocolate .....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab disabled label=&quot;Disabled&quot;&gt;
            &lt;span&gt;Macaroon ......&lt;/span&gt;
          &lt;/vs-tab&gt;
        &lt;/vs-tabs&gt;
      &lt;/vs-tab&gt;

      &lt;vs-tab label=&quot;Right&quot;&gt;
        &lt;!-- right --&gt;
        &lt;vs-tabs position=&quot;right&quot; color=&quot;rgb(29, 55, 194)&quot;&gt;
          &lt;vs-tab label=&quot;Home&quot;&gt;
            &lt;span&gt;Jujubes ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;Service&quot;&gt;
            &lt;span&gt;Halvah ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;login&quot;&gt;
            &lt;span&gt;Chocolate .....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab disabled label=&quot;Disabled&quot;&gt;
            &lt;span&gt;Macaroon ......&lt;/span&gt;
          &lt;/vs-tab&gt;
        &lt;/vs-tabs&gt;
      &lt;/vs-tab&gt;

      &lt;vs-tab label=&quot;Bottom&quot;&gt;
        &lt;!-- bottom --&gt;
        &lt;vs-tabs position=&quot;bottom&quot; color=&quot;rgb(29, 55, 194)&quot;&gt;
          &lt;vs-tab label=&quot;Home&quot;&gt;
            &lt;span&gt;Jujubes ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;Service&quot;&gt;
            &lt;span&gt;Halvah ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;login&quot;&gt;
            &lt;span&gt;Chocolate .....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab :disabled=&quot;true&quot; label=&quot;Disabled&quot;&gt;
            &lt;div&gt;Macaroon .....&lt;/div&gt;
          &lt;/vs-tab&gt;
        &lt;/vs-tabs&gt;
      &lt;/vs-tab&gt;

      &lt;vs-tab label=&quot;Left&quot;&gt;
        &lt;!-- left --&gt;
        &lt;vs-tabs position=&quot;left&quot; color=&quot;danger&quot;&gt;
          &lt;vs-tab label=&quot;Home&quot;&gt;
            &lt;span&gt;Jujubes ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;Service&quot;&gt;
            &lt;span&gt;Halvah ....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab label=&quot;login&quot;&gt;
            &lt;span&gt;Chocolate .....&lt;/span&gt;
          &lt;/vs-tab&gt;
          &lt;vs-tab :disabled=&quot;true&quot; label=&quot;Disabled&quot;&gt;
            &lt;div&gt;Macaroon .....&lt;/div&gt;
          &lt;/vs-tab&gt;
        &lt;/vs-tabs&gt;
      &lt;/vs-tab&gt;
    &lt;/vs-tabs&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>