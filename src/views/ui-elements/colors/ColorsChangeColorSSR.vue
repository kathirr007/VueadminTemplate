<!-- =========================================================================================
    File Name: ColorsChangeColorSSR.vue
    Description: Change theme's main colors - Server Side Rendering
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Change Color SSR">
        
        <p>To change the main colors in SSR (Server-Side Rendering) for example if you are using nuxt.js the main variables of stylus and those of css</p>

        <p>To change the variables we must first import them into a .styl file and change the values of the variables by the colors required</p>

        <vs-alert icon="warning" active="true" color="warning" class="my-5">
            <p class="mb-2">In order to change the variables and use them you have to have implemented the stylus loaders, to implement them by npm would be something like this</p>
            <code>npm i stylus stylus-loader --save-dev</code>
            
            
        </vs-alert>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <p>The value of the colors can only be <code>RGB</code> and nothing else is added to the number without the letters <code>rgb</code> or the parentheses</p>
            <p>For example if the color is <code>rgb(50,100,200)</code> the value to be implemented is only: <code>50,100,A</code></p>
        </vs-alert><br>

        <prism language="js" class="rounded-lg">            
// main.styl

@import &apos;~vuesax/dist/styles/index.styl&apos;

$vs-primary = 50,100,200

:root {
  --vs-primary: $vs-primary
}
        </prism>

        <div class="mt-base">
            
            <p>The stylus variables of the main colors are:</p>

            <prism class="rounded-lg">
$vs-primary 
$vs-success
$vs-danger 
$vs-warning 
$vs-dark 
            </prism>

            <p class="mt-base">And the css variables are:</p>
            <prism class="rounded-lg" language="css">
--vs-primary
--vs-success
--vs-danger
--vs-warning
--vs-dark
            </prism>
        </div>

    </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
    components: {
        Prism
    },
}
</script>