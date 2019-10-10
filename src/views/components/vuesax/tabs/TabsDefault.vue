<!-- =========================================================================================
    File Name: TabsDefault.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>To implement a tabs, use the <code>vs-tabs</code> component. It must include <code>vs-tab</code> child components that represent each tab</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>For the title of each tab the <code>label</code> property is implemented in the <code>vs-tab</code> component</p>
        </vs-alert>

        <div class="mt-5">
            <vs-tabs>
                <vs-tab label="Home">
                    <div class="tab-text">
                        <p>Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly.</p>
                        <p class="mt-2">Sweet chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o carrot cake cookie cake. </p>
                    </div>
                </vs-tab>
                <vs-tab label="Service">
                    <div class="tab-text">
                        <p>Biscuit macaroon sugar plum sesame snaps oat cake halvah fruitcake pudding cotton candy. Cheesecake tart wafer soufflé. Chocolate marzipan donut pie soufflé dragée cheesecake. Gummi bears dessert croissant chocolate jujubes fruitcake. Pie cupcake halvah. </p>
                        <p class="mt-2">Tiramisu carrot cake marzipan sugar plum powder marzipan sugar plum bonbon powder. Macaroon jujubes ice cream sugar plum lollipop wafer caramels. Cheesecake chocolate tart cake gingerbread fruitcake cake candy jelly-o. Candy cookie lollipop. Wafer lemon drops chocolate cake gummi bears.</p>
                    </div>
                </vs-tab>
                <vs-tab label="login">
                    <div class="tab-text">
                        <p>Brownie ice cream biscuit candy biscuit jujubes. Dessert cake gummies fruitcake chocolate cake sweet roll pastry croissant danish. Pudding chocolate bar sweet roll muffin cake tootsie roll biscuit pastry. Chupa chups dessert donut. Pastry gummi bears tart cookie apple pie sugar plum bear claw.</p>
                        <p class="mt-2">Pudding jelly chocolate powder jelly beans icing candy soufflé sweet. Cotton candy sugar plum fruitcake dessert dragée. Toffee chocolate cake chocolate cake oat cake topping macaroon caramels cotton candy. Ice cream lemon drops lollipop.</p>
                    </div>
                </vs-tab>
                <vs-tab disabled label="Disabled">
                    <div class="tab-text">
                        <p>Chocolate powder candy canes cake gummies tart donut. Gummi bears sesame snaps bonbon apple pie carrot cake croissant marzipan candy canes jelly-o. Marshmallow sweet cake gummies ice cream toffee. Jelly gingerbread jelly beans tart tart. Jelly-o bonbon jelly-o lemon drops sweet roll jujubes cake. Chocolate cake dessert sugar plum.</p>
                        <p class="mt-2">Jelly beans brownie chocolate bar. Jujubes lemon drops apple pie chocolate cake bear claw cupcake chocolate sweet pastry. Pastry carrot cake liquorice. Sesame snaps sugar plum chupa chups tiramisu. Halvah cake chocolate bar jelly beans dragée chocolate halvah pudding pudding.</p>
                    </div>
                </vs-tab>
                <vs-tab label="Account">
                    <div class="tab-text">
                        <p>Gingerbread tart marzipan sweet lemon drops wafer soufflé apple pie lemon drops. Cake pie apple pie icing fruitcake liquorice dessert sugar plum liquorice. Cake liquorice sugar plum cake croissant sweet. Jelly beans donut dessert. Cake jelly-o marzipan candy canes biscuit jelly toffee. Gummi bears jelly-o pastry macaroon gummies gingerbread liquorice bonbon chocolate cake.</p>
                        <p class="mt-2">Dragée muffin lemon drops. Cake sweet tootsie roll cupcake cake sugar plum lemon drops. Pudding gingerbread sesame snaps sweet. Gummi bears gingerbread pastry cotton candy sesame snaps toffee. Cake chocolate bonbon marzipan jelly-o powder. Cupcake jujubes fruitcake oat cake powder caramels.</p>
                    </div>
                </vs-tab>
            </vs-tabs>
        </div>

        <template slot="codeContainer">
&lt;vs-tabs&gt;
  &lt;vs-tab label=&quot;Home&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Jujubes ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab label=&quot;Service&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Halvah ...&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab label=&quot;login&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Chocolate ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab disabled label=&quot;Disabled&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Macaroon ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
  &lt;vs-tab label=&quot;Account&quot;&gt;
    &lt;div class=&quot;tab-text&quot;&gt;
      &lt;span&gt;Cupcake ....&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vs-tab&gt;
&lt;/vs-tabs&gt;
        </template>

    </vx-card>
</template>