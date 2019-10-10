<!-- =========================================================================================
    File Name: DatePickerMinMaxDateRange.vue
    Description: Add min and max date range to datepicker
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Min-Max Date Range" code-toggler>
        <p>You can add min max date range to disable dates in number of ways: <a href="https://github.com/charliekassel/vuejs-datepicker#disabled-dates" target="_blank" rel="nofollow">docs</a></p>
        
        <div class="mt-5">
            <datepicker :disabledDates="disabledDates"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :disabledDates=&quot;disabledDates&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';

export default {
  data() {
    return {
      disabledDates: {
        to: new Date(new Date().getFullYear(), new Date().getMonth()-2, 5), // Disable all dates up to specific date
        from: new Date(new Date().getFullYear(), new Date().getMonth()+2, 26), // Disable all dates after specific date
        daysOfMonth: [8, 11, 17], // Disable Specific days
      }
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
            disabledDates: {
                to: new Date(new Date().getFullYear(), new Date().getMonth()-2, 5), // Disable all dates up to specific date
                from: new Date(new Date().getFullYear(), new Date().getMonth()+2, 26), // Disable all dates after specific date
                daysOfMonth: [8, 11, 17], // Disable Specific days
            }
        }
    },
    components: {
        Datepicker
    }
}
</script>