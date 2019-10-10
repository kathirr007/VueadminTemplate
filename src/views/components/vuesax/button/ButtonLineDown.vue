<!-- =========================================================================================
    File Name: ButtonLineDown.vue
    Description: Buttons with underline
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Line Down" code-toggler>
        
        <p>To add a type of button with edges we change the value of <code>type</code> by: <code>line</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>you can change the position of the line up with the property line-position="top". You can also change the way the line appears on mouse hover with the property line-origin using the allowed values:</span>
            <vx-list :list="['left', 'center(default)', 'right']"></vx-list>
        </vs-alert>

        <div class="demo-alignment">

            <vs-button type="line">Primary</vs-button>
            <vs-button line-origin="left" color="success" type="line">Success</vs-button>
            <vs-button  color="danger" type="line">Danger</vs-button>
            <vs-button line-position="top" line-origin="left" color="warning" type="line">Warning</vs-button>
            <vs-button line-position="top" line-origin="right" color="dark" type="line">Dark</vs-button>
            <vs-button disabled type="line">Disabled</vs-button>

        </div>

        <template slot="codeContainer">
&#x3C;vs-button type=&#x22;line&#x22;&#x3E;Primary&#x3C;/vs-button&#x3E;
&#x3C;vs-button line-origin=&#x22;left&#x22; color=&#x22;success&#x22; type=&#x22;line&#x22;&#x3E;Success&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;danger&#x22; type=&#x22;line&#x22;&#x3E;Danger&#x3C;/vs-button&#x3E;
&#x3C;vs-button line-position=&#x22;top&#x22; line-origin=&#x22;left&#x22; color=&#x22;warning&#x22; type=&#x22;line&#x22;&#x3E;Warning&#x3C;/vs-button&#x3E;
&#x3C;vs-button line-position=&#x22;top&#x22; line-origin=&#x22;right&#x22; color=&#x22;dark&#x22; type=&#x22;line&#x22;&#x3E;Dark&#x3C;/vs-button&#x3E;
&#x3C;vs-button disabled type=&#x22;line&#x22;&#x3E;Disabled&#x3C;/vs-button&#x3E;
        </template>

    </vx-card>
</template>