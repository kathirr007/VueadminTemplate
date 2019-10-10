<!-- =========================================================================================
    File Name: Alert.vue
    Description: Alert
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="alert-demo">
        <alert-default></alert-default>
        <alert-title></alert-title>
        <alert-color></alert-color>
        <alert-closable></alert-closable>
        <alert-icon></alert-icon>
        <alert-example></alert-example>
    </div>
</template>

<script>
import AlertDefault from './AlertDefault.vue'
import AlertTitle from './AlertTitle.vue'
import AlertColor from './AlertColor.vue'
import AlertClosable from './AlertClosable.vue'
import AlertIcon from './AlertIcon.vue'
import AlertExample from './AlertExample.vue'

export default{
    components: {
        AlertDefault,
        AlertTitle,
        AlertColor,
        AlertClosable,
        AlertIcon,
        AlertExample,
    }
}
</script>