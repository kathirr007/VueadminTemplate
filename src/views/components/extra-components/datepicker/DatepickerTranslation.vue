<!-- =========================================================================================
    File Name: DatepickerTranslation.vue
    Description: Create datepicker for other languages
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Translation" code-toggler>
        <p>Date picker language: {{ languages[language].language }}</p>
        
        <div class="mt-5">
            <vs-select v-model="language" class="mb-4 w-1/3">
                <vs-select-item :key="key" :value="key" :text="language.language" v-for="(language, key) in languages" />
            </vs-select>
            <datepicker :language="languages[language]" format="d MMMM yyyy"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-select v-model=&quot;language&quot; class=&quot;mb-4 w-1/3&quot;&gt;
    &lt;vs-select-item :key=&quot;key&quot; :value=&quot;key&quot; :text=&quot;language.language&quot; v-for=&quot;(language, key) in languages&quot; /&gt;
  &lt;/vs-select&gt;
  &lt;datepicker :language=&quot;languages[language]&quot; format=&quot;d MMMM yyyy&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';
import * as lang from 'vuejs-datepicker/src/locale';

export default {
  data() {
    return {
      language: &quot;en&quot;,
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
import * as lang from 'vuejs-datepicker/src/locale';

export default {
    data() {
        return {
            language: "en",
            languages: lang,
        }
    },
    components: {
        Datepicker
    }
}
</script>