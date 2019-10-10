<!-- =========================================================================================
	File Name: CarouselEffectFade.vue
	Description: Carousel with fade effect
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Fade Effect" class="carousel-example" code-toggler>
        <!-- swiper -->
        <swiper :options="swiperOption">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <swiper-slide class="slide-4"></swiper-slide>
            <swiper-slide class="slide-5"></swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;swiper :options=&quot;swiperOption&quot;&gt;
    &lt;swiper-slide class=&quot;slide-1&quot;&gt;&lt;/swiper-slide&gt;
    &lt;swiper-slide class=&quot;slide-2&quot;&gt;&lt;/swiper-slide&gt;
    &lt;swiper-slide class=&quot;slide-3&quot;&gt;&lt;/swiper-slide&gt;
    &lt;swiper-slide class=&quot;slide-4&quot;&gt;&lt;/swiper-slide&gt;
    &lt;swiper-slide class=&quot;slide-5&quot;&gt;&lt;/swiper-slide&gt;
    &lt;div class=&quot;swiper-pagination swiper-pagination-white&quot; slot=&quot;pagination&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;swiper-button-prev swiper-button-white&quot; slot=&quot;button-prev&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;swiper-button-next swiper-button-white&quot; slot=&quot;button-next&quot;&gt;&lt;/div&gt;
  &lt;/swiper&gt;
&lt;/template&gt;

&lt;script&gt;
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.swiper-slide {
    background-position: center;
    background-size: cover;

    &amp;.slide-1 {
        background-image: url('../../../../assets/images/slider/01.jpg');
    }

    &amp;.slide-2 {
        background-image: url('../../../../assets/images/slider/02.jpg');
    }

    &amp;.slide-3 {
        background-image: url('../../../../assets/images/slider/03.jpg');
    }

    &amp;.slide-4 {
        background-image: url('../../../../assets/images/slider/04.jpg');
    }

    &amp;.slide-5 {
        background-image: url('../../../../assets/images/slider/05.jpg');
    }
}
&lt;/style&gt;
        </template>
    </vx-card>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOption: {
                spaceBetween: 30,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
    background-position: center;
    background-size: cover;

    &.slide-1 {
        background-image: url('../../../../assets/images/slider/01.jpg');
    }

    &.slide-2 {
        background-image: url('../../../../assets/images/slider/02.jpg');
    }

    &.slide-3 {
        background-image: url('../../../../assets/images/slider/03.jpg');
    }

    &.slide-4 {
        background-image: url('../../../../assets/images/slider/04.jpg');
    }

    &.slide-5 {
        background-image: url('../../../../assets/images/slider/05.jpg');
    }
}
</style>