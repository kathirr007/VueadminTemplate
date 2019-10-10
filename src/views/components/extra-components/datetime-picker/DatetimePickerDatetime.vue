<!-- =========================================================================================
    File Name: DatetimePickerDatetime.vue
    Description: datetime picker
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Datetime Picker" code-toggler>
        <p>Rendering datetime picker by updating config</p>

        <div class="mt-5">
            <flat-pickr :config="configdateTimePicker" v-model="datetime" placeholder="Date Time" />
            <p class="mt-4">Selected Datetime: {{ datetime }}</p>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;flat-pickr :config=&quot;configdateTimePicker&quot; v-model=&quot;datetime&quot; placeholder=&quot;Date Time&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    data() {
        return {
            datetime: null,
            configdateTimePicker: {
              enableTime: true,
              dateFormat: 'd-m-Y H:i'
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
            datetime: null,
            configdateTimePicker: {
              enableTime: true,
              dateFormat: 'd-m-Y H:i'
            }
        }
    },
    components: {
        flatPickr
    }
}
</script>
