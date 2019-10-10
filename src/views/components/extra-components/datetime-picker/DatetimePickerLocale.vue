<!-- =========================================================================================
    File Name: DatetimePickerLocale.vue
    Description: Create datetime picler according to locale
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Change Locale" code-toggler>
        <p>Import locale and set <code>locale</code> in config of picker to change locale.</p>

        <div class="mt-5">
            <flat-pickr :config="configdateTimePicker" v-model="date" placeholder="Choose Date" />
            <p class="mt-4">Selected Date: {{ date }}</p>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;flat-pickr :config=&quot;configdateTimePicker&quot; v-model=&quot;date&quot; placeholder=&quot;Choose Date&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.min.css';
import {French as FrenchLocale} from 'flatpickr/dist/l10n/fr.js';

export default {
    data() {
        return {
            date: null,
            configdateTimePicker: {
              locale: FrenchLocale
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
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.min.css';
import {French as FrenchLocale} from 'flatpickr/dist/l10n/fr.js';

export default {
    data() {
        return {
            date: null,
            configdateTimePicker: {
              locale: FrenchLocale
            }
        }
    },
    components: {
        flatPickr
    }
}
</script>
