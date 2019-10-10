<!-- =========================================================================================
    File Name: Select.vue
    Description: Select element - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="form-element-select-demo">
        <select-single-selection></select-single-selection>
        <select-color></select-color>
        <select-autocomplete></select-autocomplete>
        <select-multiple></select-multiple>
        <select-labels></select-labels>
        <select-validators></select-validators>
        <select-is-selected-item></select-is-selected-item>
        <select-group-items></select-group-items>
    </div>
</template>

<script>
import SelectSingleSelection from './SelectSingleSelection.vue'
import SelectColor from './SelectColor.vue'
import SelectAutocomplete from './SelectAutocomplete.vue'
import SelectMultiple from './SelectMultiple.vue'
import SelectLabels from './SelectLabels.vue'
import SelectValidators from './SelectValidators.vue'
import SelectIsSelectedItem from './SelectIsSelectedItem.vue'
import SelectGroupItems from './SelectGroupItems.vue'

export default {
    components: {
        SelectSingleSelection,
        SelectColor,
        SelectAutocomplete,
        SelectMultiple,
        SelectLabels,
        SelectValidators,
        SelectIsSelectedItem,
        SelectGroupItems
    }
}
</script>
