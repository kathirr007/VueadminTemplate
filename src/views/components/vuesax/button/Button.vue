<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="button-demo">
        <button-filled></button-filled>
        <button-border></button-border>
        <button-flat></button-flat>
        <button-line-down></button-line-down>
        <button-gradient></button-gradient>
        <button-relief></button-relief>
        <button-color></button-color>
        <button-text-color></button-text-color>
        <button-icon></button-icon>
        <button-icon-only></button-icon-only>
        <button-size></button-size>
        <button-router></button-router>
        <button-link></button-link>
    </div>
</template>

<script>
import ButtonFilled from './ButtonFilled.vue'
import ButtonBorder from './ButtonBorder.vue'
import ButtonFlat from './ButtonFlat.vue'
import ButtonLineDown from './ButtonLineDown.vue'
import ButtonGradient from './ButtonGradient.vue'
import ButtonRelief from './ButtonRelief.vue'
import ButtonColor from './ButtonColor.vue'
import ButtonTextColor from './ButtonTextColor.vue'
import ButtonIcon from './ButtonIcon.vue'
import ButtonIconOnly from './ButtonIconOnly.vue'
import ButtonSize from './ButtonSize.vue'
import ButtonRouter from './ButtonRouter.vue'
import ButtonLink from './ButtonLink.vue'

export default{
    components: {
        ButtonFilled,
        ButtonBorder,
        ButtonFlat,
        ButtonLineDown,
        ButtonGradient,
        ButtonRelief,
        ButtonColor,
        ButtonTextColor,
        ButtonIcon,
        ButtonIconOnly,
        ButtonSize,
        ButtonRouter,
        ButtonLink,
    }   
}
</script>