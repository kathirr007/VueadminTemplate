<!-- =========================================================================================
    File Name: GridFlexAlignment.vue
    Description: Flex alignment of grid using vs-align
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Flex alignment">
        <p>To align the elements vertically we have the directive <code>vs-align</code> that as parameters the same known values of css: <code>center</code>, <code>flex-end</code>, <code>flex-start</code>.</p>
        <div class="mt-5">
            <flex-alignment-top></flex-alignment-top>
            <flex-alignment-center></flex-alignment-center>
            <flex-alignment-bottom></flex-alignment-bottom>
        </div>
    </vx-card>
</template>

<script>    
import FlexAlignmentTop from './flex-alignment/FlexAlignmentTop.vue'
import FlexAlignmentCenter from './flex-alignment/FlexAlignmentCenter.vue'
import FlexAlignmentBottom from './flex-alignment/FlexAlignmentBottom.vue'

export default {
    components: {
        FlexAlignmentTop,
        FlexAlignmentCenter,
        FlexAlignmentBottom,
    }
}
</script>