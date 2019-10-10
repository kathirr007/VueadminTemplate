<template>
  <div id="input-group-demo">
    <form-input-group-basic></form-input-group-basic>
    <form-input-group-sizing></form-input-group-sizing>
    <form-input-group-form-elements></form-input-group-form-elements>
    <form-input-group-multiple-addons></form-input-group-multiple-addons>
    <form-input-group-button-addons></form-input-group-button-addons>
  </div>
</template>

<script>
import FormInputGroupBasic from './FormInputGroupBasic.vue'
import FormInputGroupSizing from './FormInputGroupSizing.vue'
import FormInputGroupFormElements from './FormInputGroupFormElements.vue'
import FormInputGroupMultipleAddons from './FormInputGroupMultipleAddons.vue'
import FormInputGroupButtonAddons from './FormInputGroupButtonAddons.vue'

export default {
  components: {
    FormInputGroupBasic,
    FormInputGroupSizing,
    FormInputGroupFormElements,
    FormInputGroupButtonAddons,
    FormInputGroupMultipleAddons,
  }
}
</script>
