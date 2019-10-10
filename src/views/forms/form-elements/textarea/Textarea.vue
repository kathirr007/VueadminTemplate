<!-- =========================================================================================
    File Name: Textarea.vue
    Description: Add textarea using vs-textarea - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="form-element-textarea-demo">
        <textarea-default></textarea-default>
        <textarea-label></textarea-label>
        <textarea-counter></textarea-counter>
    </div>
</template>

<script>
import TextareaDefault from './TextareaDefault.vue'
import TextareaLabel from './TextareaLabel.vue'
import TextareaCounter from './TextareaCounter.vue'

export default{
    components: {
        TextareaDefault,
        TextareaLabel,
        TextareaCounter,
    }
}
</script>