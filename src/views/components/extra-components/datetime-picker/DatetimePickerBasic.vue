<!-- =========================================================================================
    File Name: DatetimePickerBasic.vue
    Description: basic datetime picker
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Basic" code-toggler>
        <p>Rendering basic Datetime Picker with <code>v-model</code></p>

        <div class="mt-5">
            <flat-pickr v-model="date" />
            <p class="mt-4">Selected Date: {{ date }}</p>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;flat-pickr v-model=&quot;date&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    data() {
        return {
            date: null,
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
            date: null,
        }
    },
    components: {
        flatPickr
    }
}
</script>
