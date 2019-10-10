<!-- =========================================================================================
    File Name: DatepickerHighlightDates.vue
    Description: Highlight dates in datepicker with function
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Highlight Dates" code-toggler>
        <p>Highlight dates in datepicker using function with <code>highlighted</code> prop</p>
        
        <div class="mt-5">
            <datepicker :highlighted="highlightedFn"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :highlighted=&quot;highlightedFn&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';

export default {
  data() {
    return {
      highlightedFn: {
        customPredictor(date) {
          if (date.getDate() % 4 === 0) {
            return true;
          }
        }
      },
    }
  },
  components: {
    Datepicker
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    data() {
        return {
            highlightedFn: {
                customPredictor(date) {
                    if (date.getDate() % 4 === 0) {
                        return true;
                    }
                }
            },
        }
    },
    components: {
        Datepicker
    }
}
</script>