<!-- =========================================================================================
    File Name: Carousel.vue
    Description: Carousel demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-vue-awesome-swiper-demo">
        <carousel-default></carousel-default>
        <carousel-navigation></carousel-navigation>
        <carousel-pagination></carousel-pagination>
        <carousel-progress></carousel-progress>
        <carousel-multiple-slides-per-view></carousel-multiple-slides-per-view>
        <carousel-multi-row-slides-layout></carousel-multi-row-slides-layout>
        <carousel-effect-fade></carousel-effect-fade>
        <carousel-3d-effect></carousel-3d-effect>
        <carousel-3d-coverflow-effect></carousel-3d-coverflow-effect>
        <carousel-autoplay></carousel-autoplay>
        <carousel-gallery></carousel-gallery>
        <carousel-parallax></carousel-parallax>
        <carousel-lazy-loading></carousel-lazy-loading>
        <carousel-responsive-breakpoints></carousel-responsive-breakpoints>
        <carousel-virtual-slides></carousel-virtual-slides>
    </div>
</template>

<script>
import CarouselDefault from './CarouselDefault.vue'
import CarouselNavigation from './CarouselNavigation.vue'
import CarouselPagination from './CarouselPagination.vue'
import CarouselProgress from './CarouselProgress.vue'
import CarouselMultipleSlidesPerView from './CarouselMultipleSlidesPerView.vue'
import CarouselMultiRowSlidesLayout from './CarouselMultiRowSlidesLayout.vue'
import CarouselEffectFade from './CarouselEffectFade.vue'
import Carousel3dEffect from './Carousel3dEffect.vue'
import Carousel3dCoverflowEffect from './Carousel3dCoverflowEffect.vue'
import CarouselAutoplay from './CarouselAutoplay.vue'
import CarouselGallery from './CarouselGallery.vue'
import CarouselParallax from './CarouselParallax.vue'
import CarouselLazyLoading from './CarouselLazyLoading.vue'
import CarouselResponsiveBreakpoints from './CarouselResponsiveBreakpoints.vue'
import CarouselVirtualSlides from './CarouselVirtualSlides.vue'

export default {
    components: {
        CarouselDefault,
        CarouselNavigation,
        CarouselPagination,
        CarouselProgress,
        CarouselMultipleSlidesPerView,
        CarouselMultiRowSlidesLayout,
        CarouselEffectFade,
        Carousel3dEffect,
        Carousel3dCoverflowEffect,
        CarouselAutoplay,
        CarouselGallery,
        CarouselParallax,
        CarouselLazyLoading,
        CarouselResponsiveBreakpoints,
        CarouselVirtualSlides,
    }
}
</script>

<style lang="scss">
.carousel-example .swiper-container .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 300px;
}
</style>