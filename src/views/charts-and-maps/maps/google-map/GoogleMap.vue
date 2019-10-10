<!-- =========================================================================================
    File Name: GoogleMao.vue
    Description: Google Map (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-google-map-demo">

        <p class="mb-4"><a href="https://xkjyeah.github.io/vue-google-maps/" target="_blank" rel="nofollow">Google maps</a> component for vue with 2-way data binding</p>

        <google-map-basic></google-map-basic>
        <google-map-info-window></google-map-info-window>
        <google-map-street-view></google-map-street-view>
        
        <div class="content-area__content">
        </div>
    </div>
</template>

<script>
import GoogleMapBasic from "./GoogleMapBasic.vue"
import GoogleMapInfoWindow from "./GoogleMapInfoWindow.vue"
import GoogleMapStreetView from "./GoogleMapStreetView.vue"

export default {
    components: {
        GoogleMapBasic,
        GoogleMapInfoWindow,
        GoogleMapStreetView,
    },
}
</script>