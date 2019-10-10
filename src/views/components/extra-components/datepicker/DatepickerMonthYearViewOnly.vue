<!-- =========================================================================================
    File Name: DatepickerMonthYearViewOnly.vue
    Description: Create datepicker with month and year view only
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Month and Year View Only" code-toggler>
        <p>Rendering default DatePicker with month and year view only</p>
        
        <div class="mt-5">
            <datepicker :minimumView="'month'" :maximumView="'year'"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :minimumView=&quot;'month'&quot; :maximumView=&quot;'year'&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';

export default {
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
    components: {
        Datepicker
    }
}
</script>