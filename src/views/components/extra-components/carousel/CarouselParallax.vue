<!-- =========================================================================================
	File Name: CarouselParallax.vue
	Description: Parallax Carousel demo
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Parallax" class="carousel-example" code-toggler>
        <!-- swiper -->
        <swiper :options="swiperOption">
            <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
            <swiper-slide>
                <div class="title" data-swiper-parallax="-100">Slide 1</div>
                <br>
                <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div class="text" data-swiper-parallax="-300">
                    <p>Jelly chocolate cupcake chocolate bar caramels chupa chups chupa chups ice cream tiramisu. Oat cake muffin pastry marzipan sweet jujubes powder cupcake carrot cake. Caramels candy pastry marzipan pudding. Sugar plum carrot cake topping cookie.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="title" data-swiper-parallax="-100">Slide 2</div>
                <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div class="text" data-swiper-parallax="-300">
                    <p>Sweet oat cake marzipan jelly brownie ice cream bear claw marshmallow jelly beans. Halvah dessert caramels toffee sweet cake tiramisu. Chocolate bar marshmallow topping biscuit gummies chocolate cake candy liquorice.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="title" data-swiper-parallax="-100">Slide 3</div>
                <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div class="text" data-swiper-parallax="-300">
                    <p>Powder jelly bonbon liquorice candy canes jujubes fruitcake cotton candy macaroon. Croissant jelly-o tootsie roll halvah. Topping lollipop pastry. Fruitcake powder cupcake apple pie chocolate bar wafer. brownie macaroon dragée chocolate bar candy.</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;carousel-example&quot;&gt;
        &lt;!-- swiper --&gt;
        &lt;swiper :options=&quot;swiperOption&quot;&gt;
            &lt;div class=&quot;parallax-bg&quot; slot=&quot;parallax-bg&quot; data-swiper-parallax=&quot;-23%&quot;&gt;&lt;/div&gt;
            &lt;swiper-slide&gt;
                &lt;div class=&quot;title&quot; data-swiper-parallax=&quot;-100&quot;&gt;Slide 1&lt;/div&gt;
                &lt;br&gt;
                &lt;div class=&quot;subtitle&quot; data-swiper-parallax=&quot;-200&quot;&gt;Subtitle&lt;/div&gt;
                &lt;div class=&quot;text&quot; data-swiper-parallax=&quot;-300&quot;&gt;
                    &lt;p&gt;Jelly chocolate cupcake chocolate bar caramels chupa chups chupa chups ice cream tiramisu. Oat cake muffin pastry marzipan sweet jujubes powder cupcake carrot cake. Caramels candy pastry marzipan pudding. Sugar plum carrot cake topping cookie.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;
                &lt;div class=&quot;title&quot; data-swiper-parallax=&quot;-100&quot;&gt;Slide 2&lt;/div&gt;
                &lt;div class=&quot;subtitle&quot; data-swiper-parallax=&quot;-200&quot;&gt;Subtitle&lt;/div&gt;
                &lt;div class=&quot;text&quot; data-swiper-parallax=&quot;-300&quot;&gt;
                    &lt;p&gt;Sweet oat cake marzipan jelly brownie ice cream bear claw marshmallow jelly beans. Halvah dessert caramels toffee sweet cake tiramisu. Chocolate bar marshmallow topping biscuit gummies chocolate cake candy liquorice.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;
                &lt;div class=&quot;title&quot; data-swiper-parallax=&quot;-100&quot;&gt;Slide 3&lt;/div&gt;
                &lt;div class=&quot;subtitle&quot; data-swiper-parallax=&quot;-200&quot;&gt;Subtitle&lt;/div&gt;
                &lt;div class=&quot;text&quot; data-swiper-parallax=&quot;-300&quot;&gt;
                    &lt;p&gt;Powder jelly bonbon liquorice candy canes jujubes fruitcake cotton candy macaroon. Croissant jelly-o tootsie roll halvah. Topping lollipop pastry. Fruitcake powder cupcake apple pie chocolate bar wafer. brownie macaroon dragée chocolate bar candy.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/swiper-slide&gt;
            &lt;div class=&quot;swiper-pagination swiper-pagination-white&quot; slot=&quot;pagination&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;swiper-button-prev swiper-button-white&quot; slot=&quot;button-prev&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;swiper-button-next swiper-button-white&quot; slot=&quot;button-next&quot;&gt;&lt;/div&gt;
        &lt;/swiper&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOption: {
                speed: 600,
                parallax: true,
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

&lt;style scoped&gt;
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
.swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
    background-color: transparent !important;
    justify-content: space-around !important;
}

.parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url('../../../../assets/images/slider/04.jpg')
}

.swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
}

.swiper-slide .subtitle {
    font-size: 21px;
}

.swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
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
                speed: 600,
                parallax: true,
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

<style scoped>
.swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
    background-color: transparent !important;
    justify-content: space-around !important;
}

.parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url('../../../../assets/images/slider/04.jpg');
}

.swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
}

.swiper-slide .subtitle {
    font-size: 21px;
}

.swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
}
</style>