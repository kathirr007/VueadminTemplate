<!-- =========================================================================================
    File Name: DatepickerDateMonthViewOnly.vue
    Description: Create datepicker with date and month view only
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Date and Month View Only" code-toggler>
        <p>Rendering default DatePicker with date and month view only</p>
        
        <div class="mt-5">
            <datepicker :minimumView="'day'" :maximumView="'month'"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :minimumView=&quot;'day'&quot; :maximumView=&quot;'month'&quot;&gt;&lt;/datepicker&gt;
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