<!-- =========================================================================================
    File Name: Popup.vue
    Description: Popup - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="popup-demo">
        <popup-default></popup-default>
        <popup-inner-popup></popup-inner-popup>
        <popup-fullscreen></popup-fullscreen>
        <popup-background></popup-background>
    </div>
</template>

<script>
import PopupDefault from './PopupDefault.vue'
import PopupInnerPopup from './PopupInnerPopup.vue'
import PopupFullscreen from './PopupFullscreen.vue'
import PopupBackground from './PopupBackground.vue'

export default{
    components: {
        PopupDefault,
        PopupInnerPopup,
        PopupFullscreen,
        PopupBackground,
    }   
}
</script>