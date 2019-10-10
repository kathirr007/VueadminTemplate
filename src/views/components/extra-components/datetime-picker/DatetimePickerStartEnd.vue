<!-- =========================================================================================
    File Name: DatetimePickerInput.vue
    Description: allow input in datetime picker
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Start-End Date" code-toggler>
        <p>Create start and end date - date picker</p>

        <div class="mt-5">
            <div>
              <flat-pickr :config="configFromdateTimePicker" v-model="fromDate" placeholder="From Date" @on-change="onFromChange" />
            </div>
            <div class="mt-4">
              <flat-pickr :config="configTodateTimePicker" v-model="toDate" placeholder="To Date" @on-change="onToChange" />
            </div>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;flat-pickr :config=&quot;configFromdateTimePicker&quot; v-model=&quot;fromDate&quot; placeholder=&quot;From Date&quot; @on-change=&quot;onFromChange&quot; /&gt;
  &lt;flat-pickr :config=&quot;configTodateTimePicker&quot; v-model=&quot;toDate&quot; placeholder=&quot;To Date&quot; @on-change=&quot;onToChange&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    data() {
        return {
            fromDate: null,
            toDate: null,
            configFromdateTimePicker: {
              minDate: new Date(),
              maxDate: null
            },
            configTodateTimePicker: {
              minDate: null
            }
        }
    },
    methods: {
      onFromChange(selectedDates, dateStr, instance) {
        this.$set(this.configTodateTimePicker, 'minDate', dateStr);
      },
      onToChange(selectedDates, dateStr, instance) {
        this.$set(this.configFromdateTimePicker, 'maxDate', dateStr);
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
            fromDate: null,
            toDate: null,
            configFromdateTimePicker: {
              minDate: new Date(),
              maxDate: null
            },
            configTodateTimePicker: {
              minDate: null
            }
        }
    },
    methods: {
      onFromChange(selectedDates, dateStr) {
        this.$set(this.configTodateTimePicker, 'minDate', dateStr);
      },
      onToChange(selectedDates, dateStr) {
        this.$set(this.configFromdateTimePicker, 'maxDate', dateStr);
      }
    },
    components: {
        flatPickr
    }
}
</script>
