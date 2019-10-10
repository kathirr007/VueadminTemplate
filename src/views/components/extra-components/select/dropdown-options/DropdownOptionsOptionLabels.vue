<!-- =========================================================================================
    File Name: DropdownOptionsOptionLabels.vue
    Description: When option array have objects pass lable prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Option Labels" code-toggler no-shadow card-border>

        <div>
            <p class="mb-3">When the options array contains objects, vue-select looks for the label key to display by default. You can set your own label to match your source data using the label prop</p>
            <v-select label="countryName" :options="countries"></v-select>
        </div>
        
        <template slot="codeContainer">
&lt;template&gt;
  &lt;v-select label=&quot;countryName&quot; :options=&quot;countries&quot;&gt;&lt;/v-select&gt;
&lt;/template&gt;

&lt;script&gt;
import vSelect from 'vue-select'

export default{
  data() {
    return {
      countries: [
        {
          countryCode: &quot;INR&quot;,
          countryName: &quot;India&quot;,
        },
        {
          countryCode: &quot;AUS&quot;,
          countryName: &quot;Australia&quot;,
        },
        {
          countryCode: &quot;CA&quot;,
          countryName: &quot;Canada&quot;,
        },
      ]
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
import Prism from 'vue-prism-component'

export default{
    data() {
        return {
            countries: [
                {
                    countryCode: "INR",
                    countryName: "India",
                },
                {
                    countryCode: "AUS",
                    countryName: "Australia",
                },
                {
                    countryCode: "CA",
                    countryName: "Canada",
                },
            ]
        }
    },
    components: {
        'v-select': vSelect,
        Prism
    }   
}
</script>