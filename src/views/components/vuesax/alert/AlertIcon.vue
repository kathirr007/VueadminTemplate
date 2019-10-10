<!-- =========================================================================================
    File Name: AlertIcon.vue
    Description: Change icon in alert
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>
        
        <p>You can add to the alert a descriptive icon with the property <code>icon</code> and as a value the icon name of the icon in the currently selected icon pack. (Default is <a href="https://material.io/icons/" target="_blank" rel="nofollow">Material Icons</a>)</p>

        <vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </vs-alert>

        <template slot="codeContainer">
&lt;vs-alert active=&quot;true&quot; class=&quot;mt-5&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-star&quot;&gt;
  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
&lt;/vs-alert&gt;
        </template>

    </vx-card>
</template>