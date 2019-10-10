<!-- =========================================================================================
    File Name: NumberInput.vue
    Description: Number input element- Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="form-element-number-input-demo">
        <number-input-default></number-input-default>
        <number-input-color></number-input-color>
        <number-input-min-max></number-input-min-max>
        <number-input-size></number-input-size>
        <number-input-step></number-input-step>
        <number-input-decimal></number-input-decimal>
    </div>
</template>

<script>
import NumberInputDefault from './NumberInputDefault.vue'
import NumberInputColor from './NumberInputColor.vue'
import NumberInputMinMax from './NumberInputMinMax.vue'
import NumberInputSize from './NumberInputSize.vue'
import NumberInputStep from './NumberInputStep.vue'
import NumberInputDecimal from './NumberInputDecimal.vue'

export default{
    components: {
        NumberInputDefault,
        NumberInputColor,
        NumberInputMinMax,
        NumberInputSize,
        NumberInputStep,
        NumberInputDecimal,
    }
}
</script>