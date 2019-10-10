<!-- =========================================================================================
    File Name: Collapse.vue
    Description: Collapse - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="collapse-demo">
        <collapse-default></collapse-default>
        <collapse-accordion></collapse-accordion>
        <collapse-type></collapse-type>
        <collapse-open-hover></collapse-open-hover>
        <collapse-change-arrow-icon></collapse-change-arrow-icon>
    </div>
</template>

<script>
import CollapseDefault from './CollapseDefault.vue'
import CollapseAccordion from './CollapseAccordion.vue'
import CollapseType from './CollapseType.vue'
import CollapseOpenHover from './CollapseOpenHover.vue'
import CollapseChangeArrowIcon from './CollapseChangeArrowIcon.vue'

export default{
    components: {
        CollapseDefault,
        CollapseAccordion,
        CollapseType,
        CollapseChangeArrowIcon,
        CollapseOpenHover,
    }   
}
</script>