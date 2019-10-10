<!-- =========================================================================================
    File Name: ColorTailwind.vue
    Description: Tailwind Colors - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Tailwind Colors">
        <span>Tailwind creates <code>text-{color}</code> and <code>bg-{color}</code> for text color and background color.</span>

        <div class="mt-5">
            <tailwind-text-classes></tailwind-text-classes>
            <tailwind-background-classes></tailwind-background-classes>
            <tailwind-add-more-colors></tailwind-add-more-colors>
        </div>

    </vx-card>
</template>

<script>
import TailwindTextClasses from './tailwind/TailwindTextClasses.vue'
import TailwindBackgroundClasses from './tailwind/TailwindBackgroundClasses.vue'
import TailwindAddMoreColors from './tailwind/TailwindAddMoreColors.vue'

export default{
    components: {
        TailwindTextClasses,
        TailwindBackgroundClasses,
        TailwindAddMoreColors,
    }
}
</script>

<style lang="scss">
#colors-demo {
    .demo-alignment li {
        width: 100px;
        height: 100px;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        cursor: default;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    }
}
</style>