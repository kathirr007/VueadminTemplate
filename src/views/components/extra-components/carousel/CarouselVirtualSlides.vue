<!-- =========================================================================================
	File Name: CarouselVirtualSlides.vue
	Description: Carousel with virtual slides
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Virtual Slides" class="carousel-example" code-toggler>
		<div class="mb-base">
			<vs-button class="mr-4 mb-4" @click.native="toSlide(0)">To Slide 1</vs-button>
			<vs-button class="mr-4 mb-4" @click.native="toSlide(249)">To Slide 250</vs-button>
			<vs-button class="mr-4 mb-4" @click.native="toSlide(499)">To Slide 500</vs-button>
		</div>
        <!-- swiper -->
        <swiper :options="swiperOption" ref="mySwiper">
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;carousel-example&quot;&gt;
        &lt;div class=&quot;mb-base&quot;&gt;
            &lt;vs-button class=&quot;mr-4 mb-4&quot; @click.native=&quot;toSlide(0)&quot;&gt;To Slide 1&lt;/vs-button&gt;
            &lt;vs-button class=&quot;mr-4 mb-4&quot; @click.native=&quot;toSlide(249)&quot;&gt;To Slide 250&lt;/vs-button&gt;
            &lt;vs-button class=&quot;mr-4 mb-4&quot; @click.native=&quot;toSlide(499)&quot;&gt;To Slide 500&lt;/vs-button&gt;
        &lt;/div&gt;
        &lt;!-- swiper --&gt;
        &lt;swiper :options=&quot;swiperOption&quot; ref=&quot;mySwiper&quot;&gt;
            &lt;div class=&quot;swiper-pagination&quot; slot=&quot;pagination&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;swiper-button-prev&quot; slot=&quot;button-prev&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;swiper-button-next&quot; slot=&quot;button-next&quot;&gt;&lt;/div&gt;
        &lt;/swiper&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          virtual: {
            slides: (function () {
              const slides = [];
              for (let i = 0; i &lt; 600; i += 1) {
                slides.push('Slide ' + (i + 1))
              }
              return slides
            }())
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
              },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
              }
          }
        }
      }
    },
    methods: {
      toSlide(i) {
        this.$refs.mySwiper.swiper.slideTo(i, 0)
      }
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
	},
	data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          virtual: {
            slides: (function () {
              const slides = [];
              for (let i = 0; i < 600; i += 1) {
                slides.push('Slide ' + (i + 1))
              }
              return slides
            }())
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
              },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
              }
          }
        }
      }
    },
    methods: {
      toSlide(i) {
        this.$refs.mySwiper.swiper.slideTo(i, 0)
      }
    }
}
</script>