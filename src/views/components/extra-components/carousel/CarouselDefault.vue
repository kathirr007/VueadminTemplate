<!-- =========================================================================================
    File Name: CarouselDefault.vue
    Description: Default Carousel demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" class="carousel-example" code-toggler>
          <!-- swiper -->
          <swiper>
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
          </swiper>

          <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;carousel-example&quot;&gt;
        &lt;swiper&gt;
            &lt;swiper-slide&gt;Slide 1&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 2&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 3&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 4&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 5&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 6&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 7&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 8&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 9&lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;Slide 10&lt;/swiper-slide&gt;
        &lt;/swiper&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        swiper,
        swiperSlide
    }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
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
&lt;/style&gt;
          </template>
      </vx-card>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
    components: {
        swiper,
        swiperSlide
    }   
}
</script>