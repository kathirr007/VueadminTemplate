<!-- =========================================================================================
    File Name: Slider.vue
    Description: Slider - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="slider-demo">
        <slider-default></slider-default>
        <slider-color></slider-color>
        <slider-ticks></slider-ticks>
        <slider-range></slider-range>
        <slider-icon></slider-icon>
        <slider-text-fixed></slider-text-fixed>
        <slider-change-method></slider-change-method>
    </div>
</template>

<script>
import SliderDefault from './SliderDefault.vue'
import SliderColor from './SliderColor.vue'
import SliderTicks from './SliderTicks.vue'
import SliderRange from './SliderRange.vue'
import SliderIcon from './SliderIcon.vue'
import SliderTextFixed from './SliderTextFixed.vue'
import SliderChangeMethod from './SliderChangeMethod.vue'

export default{
    components: {
        SliderDefault,
        SliderColor,
        SliderTicks,
        SliderRange,
        SliderIcon,
        SliderTextFixed,
        SliderChangeMethod,
    }   
}
</script>