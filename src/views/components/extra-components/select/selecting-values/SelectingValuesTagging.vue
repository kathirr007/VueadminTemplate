<!-- =========================================================================================
    File Name: SelectingValueTagging.vue
    Description: add tagging in select
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Tagging" code-toggler no-shadow card-border>

        <div>

            <p class="mb-3">To allow input that's not present within the options, set the taggable prop to true. If you want new tags to be pushed to the options list, set push-tags to true</p><br>
            
            <h6 class="mb-2">Vue Select - Taggable</h6>
            <v-select taggable></v-select><br>

            <h6 class="mb-2">Vue Select - Taggable &amp; Push-Tags</h6>
            <v-select taggable push-tags></v-select>
            <small class="muted">Try adding a tag and removing it. It'll still be present within the options list.</small>

        </div>
        
        <template slot="codeContainer">
&lt;template&gt;
  &lt;h6&gt;Vue Select - Taggable&lt;/h6&gt;
  &lt;v-select taggable&gt;&lt;/v-select&gt;

  &lt;h6&gt;Vue Select - Taggable &amp;amp; Push-Tags&lt;/h6&gt;
  &lt;v-select taggable push-tags&gt;&lt;/v-select&gt;
&lt;/template&gt;

&lt;script&gt;
import vSelect from 'vue-select'

export default{
  data() {
    return {
      options: []
    }
  },
  components: {
    'v-select': vSelect,
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import vSelect from 'vue-select'

export default{
    data() {
        return {
            options: [],
        }
    },
    components: {
        'v-select': vSelect,
    }
}
</script>