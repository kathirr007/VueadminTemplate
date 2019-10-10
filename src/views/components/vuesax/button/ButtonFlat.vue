<!-- =========================================================================================
    File Name: ButtonFlat.vue
    Description: Flat buttons (no border, no background)
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Flat" code-toggler>
        
        <p>To add a type of button with edges we change the value of <code>flat</code></p>

        <div class="demo-alignment">

            <vs-button color="primary" type="flat">Primary</vs-button>
            <vs-button color="success" type="flat">Success</vs-button>
            <vs-button color="danger" type="flat">Danger</vs-button>
            <vs-button color="warning" type="flat">Warning</vs-button>
            <vs-button color="dark" type="flat">Dark</vs-button>
            <vs-button color="rgb(11, 189, 135)" type="flat">RGB</vs-button>
            <vs-button disabled type="flat">Disabled</vs-button>

        </div>

        <template slot="codeContainer">
&#x3C;vs-button color=&#x22;primary&#x22; type=&#x22;flat&#x22;&#x3E;Primary&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;success&#x22; type=&#x22;flat&#x22;&#x3E;Success&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;danger&#x22; type=&#x22;flat&#x22;&#x3E;Danger&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;warning&#x22; type=&#x22;flat&#x22;&#x3E;Warning&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;dark&#x22; type=&#x22;flat&#x22;&#x3E;Dark&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;rgb(11, 189, 135)&#x22; type=&#x22;flat&#x22;&#x3E;RGB&#x3C;/vs-button&#x3E;
&#x3C;vs-button disabled type=&#x22;flat&#x22;&#x3E;Disabled&#x3C;/vs-button&#x3E;
        </template>

    </vx-card>
</template>