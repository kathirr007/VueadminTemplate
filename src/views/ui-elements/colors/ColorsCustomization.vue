<!-- =========================================================================================
    File Name: ColorCustomization.vue
    Description: Change theme's main colors(primary, success etc.)
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Customize Theme Colors" code-toggler code-language="js">
        
        <p>We almost always need a personalized application with own colors. In Vuesax, you can change the main colors to those that you need and the branding that your application has.</p>

        <p>You can change default colors using <code>themeColors.js</code> file. You can find this file in src folder.</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert><br>

        <ul class="demo-alignment text-white">
            <li style="background-color: #5b3cc4">
                primary
            </li>
            <li style="background-color: rgb(23, 201, 100)">
                success
            </li>
            <li style="background-color: rgb(242, 19, 93)">
                danger
            </li>
            <li style="background-color: rgb(255, 130, 0)">
                warning
            </li>
            <li style="background-color: rgb(36, 33, 69)">
                dark
            </li>
        </ul>

        <template slot="codeContainer">
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: &apos;#5b3cc4&apos;,
      success: &apos;rgb(23, 201, 100)&apos;,
      danger: &apos;rgb(242, 19, 93)&apos;,
      warning: &apos;rgb(255, 130, 0)&apos;,
      dark: &apos;rgb(36, 33, 69)&apos;
    }
  }
})
        </template>

    </vx-card>
</template>