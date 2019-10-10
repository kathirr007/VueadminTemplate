<!-- =========================================================================================
    File Name: DatepickerRtl.vue
    Description: Create RTL datepicker
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="RTL Datepicker" code-toggler>
        <p>Rendering RTL DatePicker using <code>language</code> prop</p>
        
        <div class="mt-5">
            <datepicker :language="languages.he"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :language=&quot;languages.he&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';
import * as lang from &quot;vuejs-datepicker/src/locale&quot;;

export default {
  data() {
    return {
      languages: lang,
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
import * as lang from "vuejs-datepicker/src/locale";

export default {
    data() {
        return {
            languages: lang,
        }
    },
    components: {
        Datepicker
    }
}
</script>