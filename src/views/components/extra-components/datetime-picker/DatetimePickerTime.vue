<!-- =========================================================================================
    File Name: DatetimePickerTime.vue
    Description: Only time picker
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Time Picker" code-toggler>
        <p>set <code>noCalendar</code> to <code>true</code> to hide calendar</p>

        <div class="mt-5">
            <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Choose time" />
            <p class="mt-4">Selected Time: {{ time }}</p>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;flat-pickr :config=&quot;configdateTimePicker&quot; v-model=&quot;time&quot; placeholder=&quot;Choose time&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    data() {
        return {
            time: null,
            configdateTimePicker: {
              enableTime: true,
              enableSeconds: true,
              noCalendar: true
            }
        }
    },
    components: {
        flatPickr
    }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    data() {
        return {
            time: null,
            configdateTimePicker: {
              enableTime: true,
              enableSeconds: true,
              noCalendar: true
            }
        }
    },
    components: {
        flatPickr
    }
}
</script>
