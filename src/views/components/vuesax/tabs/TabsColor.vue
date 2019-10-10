<!-- =========================================================================================
    File Name: TabsColor.vue
    Description: Change color color of underline in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>You can change the color of the component with the property color, the parameter allows the main colors and HEX or RGB</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="mt-5">
            <vs-tabs :color="colorx">
                <vs-tab @click="colorx = 'success'" label="Success">
                    <div class="con-tab-ejemplo">
                        <p>Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly.</p>
                        <p class="mt-2">Sweet chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o carrot cake cookie cake. </p>
                    </div>
                </vs-tab>

                <vs-tab @click="colorx = 'danger'" label="Danger">
                    <div class="con-tab-ejemplo">
                        <p>Biscuit macaroon sugar plum sesame snaps oat cake halvah fruitcake pudding cotton candy. Cheesecake tart wafer soufflé. Chocolate marzipan donut pie soufflé dragée cheesecake. Gummi bears dessert croissant chocolate jujubes fruitcake. Pie cupcake halvah. </p>
                        <p class="mt-2">Tiramisu carrot cake marzipan sugar plum powder marzipan sugar plum bonbon powder. Macaroon jujubes ice cream sugar plum lollipop wafer caramels. Cheesecake chocolate tart cake gingerbread fruitcake cake candy jelly-o. Candy cookie lollipop. Wafer lemon drops chocolate cake gummi bears.</p>
                    </div>
                </vs-tab>

                <vs-tab @click="colorx = 'warning'" label="Warning">
                    <div class="con-tab-ejemplo">
                        <p>Brownie ice cream biscuit candy biscuit jujubes. Dessert cake gummies fruitcake chocolate cake sweet roll pastry croissant danish. Pudding chocolate bar sweet roll muffin cake tootsie roll biscuit pastry. Chupa chups dessert donut. Pastry gummi bears tart cookie apple pie sugar plum bear claw.</p>
                        <p class="mt-2">Pudding jelly chocolate powder jelly beans icing candy soufflé sweet. Cotton candy sugar plum fruitcake dessert dragée. Toffee chocolate cake chocolate cake oat cake topping macaroon caramels cotton candy. Ice cream lemon drops lollipop.</p>
                    </div>
                </vs-tab>

                <vs-tab @click="colorx = 'dark'" label="Dark">
                    <div class="con-tab-ejemplo">
                        <p>Chocolate powder candy canes cake gummies tart donut. Gummi bears sesame snaps bonbon apple pie carrot cake croissant marzipan candy canes jelly-o. Marshmallow sweet cake gummies ice cream toffee. Jelly gingerbread jelly beans tart tart. Jelly-o bonbon jelly-o lemon drops sweet roll jujubes cake. Chocolate cake dessert sugar plum.</p>
                        <p class="mt-2">Jelly beans brownie chocolate bar. Jujubes lemon drops apple pie chocolate cake bear claw cupcake chocolate sweet pastry. Pastry carrot cake liquorice. Sesame snaps sugar plum chupa chups tiramisu. Halvah cake chocolate bar jelly beans dragée chocolate halvah pudding pudding.</p>
                    </div>
                </vs-tab>

                <vs-tab @click="colorx = 'rgb(16, 233, 179)'" label="RGB | HEX">
                    <div class="con-tab-ejemplo">
                        <p>Gingerbread tart marzipan sweet lemon drops wafer soufflé apple pie lemon drops. Cake pie apple pie icing fruitcake liquorice dessert sugar plum liquorice. Cake liquorice sugar plum cake croissant sweet. Jelly beans donut dessert. Cake jelly-o marzipan candy canes biscuit jelly toffee. Gummi bears jelly-o pastry macaroon gummies gingerbread liquorice bonbon chocolate cake.</p>
                        <p class="mt-2">Dragée muffin lemon drops. Cake sweet tootsie roll cupcake cake sugar plum lemon drops. Pudding gingerbread sesame snaps sweet. Gummi bears gingerbread pastry cotton candy sesame snaps toffee. Cake chocolate bonbon marzipan jelly-o powder. Cupcake jujubes fruitcake oat cake powder caramels.</p>
                    </div>
                </vs-tab>
            </vs-tabs>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-tabs :color=&quot;colorx&quot;&gt;
    &lt;vs-tab @click=&quot;colorx = 'success'&quot; label=&quot;Success&quot;&gt;
      &lt;div class=&quot;con-tab-ejemplo&quot;&gt;
      &lt;span&gt;Jujubes ....&lt;/span&gt;&lt;/div&gt;
    &lt;/vs-tab&gt;

    &lt;vs-tab @click=&quot;colorx = 'danger'&quot; label=&quot;Danger&quot;&gt;
      &lt;div class=&quot;con-tab-ejemplo&quot;&gt;
      &lt;span&gt;Halvah ...&lt;/span&gt;&lt;/div&gt;
    &lt;/vs-tab&gt;

    &lt;vs-tab @click=&quot;colorx = 'warning'&quot; label=&quot;Warning&quot;&gt;
      &lt;div class=&quot;con-tab-ejemplo&quot;&gt;
      &lt;span&gt;Chocolate ....&lt;/span&gt;&lt;/div&gt;
    &lt;/vs-tab&gt;

    &lt;vs-tab @click=&quot;colorx = 'dark'&quot; label=&quot;Dark&quot;&gt;
      &lt;div class=&quot;con-tab-ejemplo&quot;&gt;
      &lt;span&gt;Macaroon ....&lt;/span&gt;&lt;/div&gt;
    &lt;/vs-tab&gt;
    
    &lt;vs-tab @click=&quot;colorx = 'rgb(16, 233, 179)'&quot; label=&quot;RGB | HEX&quot;&gt;
      &lt;div class=&quot;con-tab-ejemplo&quot;&gt;
      &lt;span&gt;Cupcake ....&lt;/span&gt;&lt;/div&gt;
    &lt;/vs-tab&gt;
  &lt;/vs-tabs&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data:()=&gt;({
    colorx:'success'
  }),
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        colorx: 'success'
    }),
}
</script>