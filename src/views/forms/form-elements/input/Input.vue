<!-- =========================================================================================
    File Name: Input.vue
    Description: Input Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="form-element-input-demo">
        <input-default></input-default>
        <input-label></input-label>
        <input-label-placeholder></input-label-placeholder>
        <input-icon></input-icon>
        <input-color></input-color>
        <input-validation></input-validation>
        <input-size></input-size>
    </div>
</template>

<script>
import InputDefault from './InputDefault.vue'
import InputLabel from './InputLabel.vue'
import InputLabelPlaceholder from './InputLabelPlaceholder.vue'
import InputIcon from './InputIcon.vue'
import InputColor from './InputColor.vue'
import InputValidation from './InputValidation.vue'
import InputSize from './InputSize.vue'

export default{
    components: {
        InputDefault,
        InputLabel,
        InputLabelPlaceholder,
        InputIcon,
        InputColor,
        InputValidation,
        InputSize,
    }
}
</script>