<!-- =========================================================================================
    File Name: DatetimePickerInline.vue
    Description: inline datetime picker
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Inline Picker" code-toggler>
        <p>Creating inline datetime picker by setting <code>inline</code> to <code>true</code></p>

        <div class="mt-5">
            <flat-pickr :config="configdateTimePicker" v-model="date" placeholder="Inline Picker" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;flat-pickr :config=&quot;configdateTimePicker&quot; v-model=&quot;date&quot; placeholder=&quot;Inline Picker&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    data() {
        return {
            date: null,
            configdateTimePicker: {
              inline: true,
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
            date: null,
            configdateTimePicker: {
              inline: true,
            }
        }
    },
    components: {
        flatPickr
    }
}
</script>
