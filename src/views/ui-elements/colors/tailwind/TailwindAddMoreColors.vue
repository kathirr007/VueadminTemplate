<!-- =========================================================================================
    File Name: TailwindAddMoreColors.vue
    Description: Add more colors to theme using tailwind
    Note: You can't use this colors in props
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Add more colors" no-shadow card-border>

        <p>You can add more colors in <code>tailwind.js</code> file. You can find this file in root folder.</p>
        <span class="mb-5">Checkout Color Customization in <a href="https://tailwindcss.com/docs/text-color#customizing" target="_blank">Tailwind</a></span>

        <prism language="js" class="rounded-lg">
colors: {

  ....
  'secondary': '#767c82',
  ....

}
        </prism>

        <template slot="codeContainer">

        </template>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>After registering color you can use <code>text-secondary</code> and <code>bg-secondary</code> in theme</span>
        </vs-alert>
    </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

    export default{
        components: {
            Prism
        }
    }
</script>
