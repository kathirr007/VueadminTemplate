<!-- =========================================================================================
    File Name: FormWizard.vue
    Description: Form Wizard (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-form-wizard-demo">

        <p class="mb-4"><a href="https://binarcode.github.io/vue-form-wizard/#/" target="_blank" rel="nofollow">vue-form-wizard</a> is a vue based component with no external depenendcies which simplifies tab wizard management and allows you to focus on the functional part of your app rather than wasting time on details.</p>
        
        <form-wizard-number-tab></form-wizard-number-tab>
        <form-wizard-icon-tab></form-wizard-icon-tab>
        <form-wizard-validation></form-wizard-validation>
    </div>
</template>

<script>
import FormWizardNumberTab from "./FormWizardNumberTab.vue"
import FormWizardIconTab from "./FormWizardIconTab.vue"
import FormWizardValidation from "./FormWizardValidation.vue"

export default {
    components: {
        FormWizardNumberTab,
        FormWizardIconTab,
        FormWizardValidation,
    }
}
</script>