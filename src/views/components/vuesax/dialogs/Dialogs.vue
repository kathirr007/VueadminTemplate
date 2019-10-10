<!-- =========================================================================================
    File Name: Dialogs.vue
    Description: Dialogs - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="dialog-demo">
        <dialogs-alert></dialogs-alert>
        <dialogs-confirm></dialogs-confirm>
        <dialogs-prompt></dialogs-prompt>
    </div>
</template>

<script>
import DialogsAlert from './DialogsAlert.vue'
import DialogsConfirm from './DialogsConfirm.vue'
import DialogsPrompt from './DialogsPrompt.vue'

export default{
    components: {
        DialogsAlert,
        DialogsConfirm,
        DialogsPrompt,
    }   
}
</script>