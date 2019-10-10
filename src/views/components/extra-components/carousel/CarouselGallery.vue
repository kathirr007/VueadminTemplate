<!-- =========================================================================================
    File Name: CarouselGallery.vue
    Description: Gallery Carousel demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Gallery" class="carousel-example-gallery" code-toggler>
        <div style="height: 500px">
            <!-- swiper1 -->
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>

            <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
            </swiper>
        </div>

          <template slot="codeContainer">
&lt;template&gt;
  &lt;div style=&quot;height: 500px&quot;&gt;

    &lt;!-- swiper1 --&gt;
    &lt;swiper :options=&quot;swiperOptionTop&quot; class=&quot;gallery-top&quot; ref=&quot;swiperTop&quot;&gt;
      &lt;swiper-slide class=&quot;slide-1&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-2&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-3&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-4&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-5&quot;&gt;&lt;/swiper-slide&gt;
      &lt;div class=&quot;swiper-button-next swiper-button-white&quot; slot=&quot;button-next&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;swiper-button-prev swiper-button-white&quot; slot=&quot;button-prev&quot;&gt;&lt;/div&gt;
    &lt;/swiper&gt;
    
    &lt;!-- swiper2 Thumbs --&gt;
    &lt;swiper :options=&quot;swiperOptionThumbs&quot; class=&quot;gallery-thumbs&quot; ref=&quot;swiperThumbs&quot;&gt;
      &lt;swiper-slide class=&quot;slide-1&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-2&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-3&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-4&quot;&gt;&lt;/swiper-slide&gt;
      &lt;swiper-slide class=&quot;slide-5&quot;&gt;&lt;/swiper-slide&gt;
    &lt;/swiper&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() =&gt; {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
&lt;/script&gt;


&lt;style lang=&quot;scss&quot; scoped&gt;
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
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
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
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
            swiperOptionTop: {
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>


<style lang="scss" scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
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
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>