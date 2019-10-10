<!-- =========================================================================================
    File Name: Chip.vue
    Description: Chip - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="chip-demo">
        <chip-default></chip-default>
        <chip-color></chip-color>
        <chip-icon></chip-icon>
        <chip-closable></chip-closable>
        <chip-add-remove></chip-add-remove>
        <chip-customize-close-clear-chip-icon></chip-customize-close-clear-chip-icon>
    </div>
</template>

<script>
import ChipDefault from './ChipDefault.vue'
import ChipColor from './ChipColor.vue'
import ChipIcon from './ChipIcon.vue'
import ChipClosable from './ChipClosable.vue'
import ChipAddRemove from './ChipAddRemove.vue'
import ChipCustomizeCloseClearChipIcon from './ChipCustomizeCloseClearChipIcon.vue'

export default{
    components: {
        ChipDefault,
        ChipColor,
        ChipIcon,
        ChipClosable,
        ChipAddRemove,
        ChipCustomizeCloseClearChipIcon,
    }   
}
</script>