<!-- =========================================================================================
    File Name: StarRatings.vue
    Description: Star Ratings demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="page-star-ratings-demo">

      <div class="vx-row">
        <div class="vx-col w-full lg:w-1/2 mb-base">
          <vx-card title="Basic" class="sm:overflow-scroll overflow-scroll md:overflow-visible" code-toggler>

            <!-- DEFAULT -->
            <h6>Default</h6>
            <star-rating />

            <!-- HALF STAR -->
            <h6 class="mt-5">Half Stars</h6>
            <star-rating :increment="0.5"></star-rating>

            <!-- PRESET STAR -->
            <h6 class="mt-5">Preset Stars</h6>
            <star-rating :rating="4"></star-rating>

            <!-- FLUID STAR  -->
            <h6 class="mt-5">Fluid Stars</h6>
            <star-rating :increment="0.01" :fixed-points="2"></star-rating>

            <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- DEFAULT --&gt;
  &lt;h6&gt;Default&lt;/h6&gt;
  &lt;star-rating /&gt;

  &lt;!-- HALF STAR --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Half Stars&lt;/h6&gt;
  &lt;star-rating :increment=&quot;0.5&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- PRESET STAR --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Preset Stars&lt;/h6&gt;
  &lt;star-rating :rating=&quot;4&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- FLUID STAR  --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Fluid Stars&lt;/h6&gt;
  &lt;star-rating :increment=&quot;0.01&quot; :fixed-points=&quot;2&quot;&gt;&lt;/star-rating&gt;
&lt;/template&gt;

&lt;script&gt;
import StarRating from &apos;vue-star-rating&apos;

export default {
  components: {
    StarRating
  }
}
&lt;/script&gt;
            </template>
          </vx-card>
        </div>

        <div class="vx-col w-full lg:w-1/2 mb-base">
          <vx-card title="Customizing" class="sm:overflow-scroll overflow-scroll md:overflow-visible" code-toggler>

            <!-- BORDERED -->
            <h6>Bordered Stars</h6>
            <star-rating :border-width="3"></star-rating>

            <!-- STYLE RATING -->
            <h6 class="mt-5">Style Rating</h6>
            <star-rating text-class="text-warning font-medium"></star-rating>

            <!-- CUSTOM SHAPE -->
            <h6 class="mt-4">Custom Star Shape</h6>
            <star-rating :border-width="4" border-color="#d8d8d8" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>

            <h6 class="mt-5">Glowing Stars</h6>
            <star-rating :glow="10"></star-rating>

            <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- BORDERED --&gt;
  &lt;h6&gt;Bordered Stars&lt;/h6&gt;
  &lt;star-rating :border-width=&quot;3&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- STYLE RATING --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Style Rating&lt;/h6&gt;
  &lt;star-rating text-class=&quot;text-warning font-medium&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- CUSTOM SHAPE --&gt;
  &lt;h6 class=&quot;mt-4&quot;&gt;Custom Star Shape&lt;/h6&gt;
  &lt;star-rating :border-width=&quot;4&quot; border-color=&quot;#d8d8d8&quot; :rounded-corners=&quot;true&quot; :star-points=&quot;[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]&quot;&gt;&lt;/star-rating&gt;

  &lt;h6 class=&quot;mt-5&quot;&gt;Glowing Stars&lt;/h6&gt;
  &lt;star-rating :glow=&quot;10&quot;&gt;&lt;/star-rating&gt;
&lt;/template&gt;

&lt;script&gt;
import StarRating from &apos;vue-star-rating&apos;

export default {
  components: {
    StarRating
  }
}
&lt;/script&gt;
            </template>
          </vx-card>
        </div>
      </div>

      <div class="vx-row">
        <div class="vx-col w-full lg:w-1/2 mb-base">
          <vx-card title="Sizing" class="sm:overflow-scroll overflow-scroll md:overflow-visible" code-toggler>

            <!-- SMALL STARS -->
            <h6>Small Stars</h6>
            <star-rating :star-size="20"></star-rating>

            <!-- LARGE STARS -->
            <h6 class="mt-5">Big Stars</h6>
            <star-rating :star-size="80"></star-rating>

            <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- SMALL STARS --&gt;
  &lt;h6&gt;Small Stars&lt;/h6&gt;
  &lt;star-rating :star-size=&quot;20&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- LARGE STARS --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Big Stars&lt;/h6&gt;
  &lt;star-rating :star-size=&quot;80&quot;&gt;&lt;/star-rating&gt;
&lt;/template&gt;

&lt;script&gt;
import StarRating from &apos;vue-star-rating&apos;
export default {
  components: {
    StarRating
  }
}
&lt;/script&gt;
            </template>
          </vx-card>
        </div>
        <div class="vx-col w-full lg:w-1/2 mb-base">
          <vx-card title="Changing color" class="sm:overflow-scroll overflow-scroll md:overflow-visible" code-toggler>

            <!-- RED STAR -->
            <h6>Red Stars</h6>
            <star-rating active-color="#EA5455"></star-rating>

            <!-- VIBRANT STAR -->
            <h6 class="mt-4">Vibrant Stars</h6>
            <star-rating inactive-color="#b9b4f9" active-color="#7367f0"></star-rating>

            <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- RED STAR --&gt;
  &lt;h6&gt;Red Stars&lt;/h6&gt;
  &lt;star-rating active-color=&quot;#EA5455&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- VIBRANT STAR --&gt;
  &lt;h6 class=&quot;mt-4&quot;&gt;Vibrant Stars&lt;/h6&gt;
  &lt;star-rating inactive-color=&quot;#b9b4f9&quot; active-color=&quot;#7367f0&quot;&gt;&lt;/star-rating&gt;
&lt;/template&gt;

&lt;script&gt;
import StarRating from &apos;vue-star-rating&apos;

export default {
  components: {
    StarRating
  }
}
&lt;/script&gt;
            </template>
          </vx-card>
        </div>
      </div>

      <div class="vx-row">
        <div class="vx-col w-full lg:w-1/2 mb-base">
          <vx-card title="Capture, Reset or Hide Rating" class="sm:overflow-scroll overflow-scroll md:overflow-visible" code-toggler>

            <!-- CAPTURE RATING -->
            <h6>Capture Rating</h6>
            <star-rating :show-rating="false" @rating-selected="setRating"></star-rating>
            <div class="font-semibold">{{rating}}</div>

            <!-- CAPTURE ON HOVER -->
            <h6 class="mt-5">Capture Mouse Over Rating</h6>
            <div @mouseleave="showCurrentRating(0)" style="display:inline-block;">
              <star-rating :show-rating="false" @current-rating="showCurrentRating" @rating-selected="setCurrentSelectedRating" :increment="0.5"></star-rating>
            </div>
            <div class="font-semibold">{{currentRating}}</div>

            <!-- RESET WTIH V-MODEL -->
            <h6 class="mt-5">Resetable stars with v-model (Vue 2.2+)</h6>
            <star-rating v-model="boundRating"></star-rating>
            <div class="font-semibold"><a @click="boundRating = 0;" class="cursor-pointer">Reset Rating</a></div>

            <!-- HIDE RATIG -->
            <h6 class="mt-5">Hide Rating</h6>
            <star-rating :show-rating="false"></star-rating>

            <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- CAPTURE RATING --&gt;
  &lt;h6&gt;Capture Rating&lt;/h6&gt;
  &lt;star-rating :show-rating=&quot;false&quot; @rating-selected=&quot;setRating&quot;&gt;&lt;/star-rating&gt;
  &lt;div class=&quot;font-semibold&quot;&gt;{{rating}}&lt;/div&gt;

  &lt;!-- CAPTURE ON HOVER --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Capture Mouse Over Rating&lt;/h6&gt;
  &lt;div @mouseleave=&quot;showCurrentRating(0)&quot; style=&quot;display:inline-block;&quot;&gt;
    &lt;star-rating :show-rating=&quot;false&quot; @current-rating=&quot;showCurrentRating&quot; @rating-selected=&quot;setCurrentSelectedRating&quot; :increment=&quot;0.5&quot;&gt;&lt;/star-rating&gt;
  &lt;/div&gt;
  &lt;div class=&quot;font-semibold&quot;&gt;{{currentRating}}&lt;/div&gt;

  &lt;!-- RESET WTIH V-MODEL --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Resetable stars with v-model (Vue 2.2+)&lt;/h6&gt;
  &lt;star-rating v-model=&quot;boundRating&quot;&gt;&lt;/star-rating&gt;
  &lt;div class=&quot;font-semibold&quot;&gt;&lt;a @click=&quot;boundRating = 0;&quot;  class=&quot;cursor-pointer&quot;&gt;Reset Rating&lt;/a&gt;&lt;/div&gt;

  &lt;!-- HIDE RATIG --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Hide Rating&lt;/h6&gt;
  &lt;star-rating :show-rating=&quot;false&quot;&gt;&lt;/star-rating&gt;
&lt;/template&gt;

&lt;script&gt;
import StarRating from &apos;vue-star-rating&apos;

export default {
  methods: {
    setRating: function(rating) {
      this.rating = &quot;You have Selected: &quot; + rating + &quot; stars&quot;;
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : &quot;Click to select &quot; + rating + &quot; stars&quot;
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = &quot;You have Selected: &quot; + rating + &quot; stars&quot;;
    }
  },
  data(){
    return {
      rating: &quot;No Rating Selected&quot;,
      currentRating: &quot;No Rating&quot;,
      currentSelectedRating: &quot;No Current Rating&quot;,
      boundRating: 3,
    }
  },
  components: {
    StarRating
  }
}
&lt;/script&gt;
            </template>
          </vx-card>
        </div>

        <div class="vx-col w-full lg:w-1/2 mb-base">
          <vx-card title="Other useful options" class="sm:overflow-scroll overflow-scroll md:overflow-visible" code-toggler>

            <!-- NON ROUNDED -->
            <h6>Non rounded start rating</h6>
            <star-rating :rating="4.67" :round-start-rating="false"></star-rating>

            <!-- READ ONLY -->
            <h6 class="mt-5">Read Only Stars</h6>
            <star-rating :rating="3.8" :read-only="true" :increment="0.01"></star-rating>

            <!-- LOTS OF STARS -->
            <h6 class="mt-5">Lots of stars</h6>
            <star-rating :max-rating="10" :star-size="20"></star-rating>

            <!-- INLINE -->
            <h6 class="mt-5">Inline Stars</h6> Rated
            <star-rating :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="5"></star-rating> by our customers.

            <!-- RTL -->
            <h6 class="mt-5">RTL Stars</h6>
            <star-rating :rtl="true" :increment="0.5"></star-rating>

            <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- NON ROUNDED --&gt;
  &lt;h6&gt;Non rounded start rating&lt;/h6&gt;
  &lt;star-rating :rating=&quot;4.67&quot; :round-start-rating=&quot;false&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- READ ONLY --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Read Only Stars&lt;/h6&gt;
  &lt;star-rating :rating=&quot;3.8&quot; :read-only=&quot;true&quot; :increment=&quot;0.01&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- LOTS OF STARS --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Lots of stars&lt;/h6&gt;
  &lt;star-rating :max-rating=&quot;10&quot; :star-size=&quot;20&quot;&gt;&lt;/star-rating&gt;

  &lt;!-- INLINE --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;Inline Stars&lt;/h6&gt; Rated
  &lt;star-rating :inline=&quot;true&quot; :star-size=&quot;20&quot; :read-only=&quot;true&quot; :show-rating=&quot;false&quot; :rating=&quot;5&quot;&gt;&lt;/star-rating&gt; by our customers.

  &lt;!-- RTL --&gt;
  &lt;h6 class=&quot;mt-5&quot;&gt;RTL Stars&lt;/h6&gt;
  &lt;star-rating :rtl=&quot;true&quot; :increment=&quot;0.5&quot;&gt;&lt;/star-rating&gt;
&lt;/template&gt;

&lt;script&gt;
import StarRating from &apos;vue-star-rating&apos;

export default {
  components: {
    StarRating
  }
}
&lt;/script&gt;
            </template>
          </vx-card>
        </div>
      </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  methods: {
    setRating: function(rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    }
  },
  data(){
    return {
      rating: "No Rating Selected",
      currentRating: "No Rating",
      currentSelectedRating: "No Current Rating",
      boundRating: 3,
    }
  },
  components: {
    StarRating
  }
}
</script>
