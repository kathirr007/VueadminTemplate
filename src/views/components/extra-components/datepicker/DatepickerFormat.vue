<!-- =========================================================================================
    File Name: DatePickerFormat.vue
    Description: Change datepicker format
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Format Datepicker" code-toggler>
        <p>Change datepicker format with <code>format</code></p>

        <div class="mt-5">
            <datepicker :format="format"></datepicker>
            <vs-select v-model="format" class="mt-4 w-full">
                <vs-select-item :key="index" :value="option.value" :text="option.text" v-for="(option,index) in formatOptions" />
            </vs-select>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :format=&quot;format&quot;&gt;&lt;/datepicker&gt;
  &lt;vs-select v-model=&quot;format&quot; class=&quot;mt-4 w-full&quot;&gt;
    &lt;vs-select-item :key=&quot;index&quot; :value=&quot;option.value&quot; :text=&quot;option.text&quot; v-for=&quot;(option,index) in formatOptions&quot; /&gt;
  &lt;/vs-select&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';

export default {
  data() {
    return {
      format: &quot;d MMMM yyyy&quot;,
      formatOptions:[
        {text: &quot;d MMM yyyy - e.g 12 Feb 2016&quot; , value: &quot;d MMM yyyy&quot; },
        {text: &quot;d MMMM yyyy - e.g 12 February 2016&quot;, value: &quot;d MMMM yyyy&quot; },
        {text: &quot;yyyy-MM-dd - e.g 2016-02-12&quot;, value: &quot;yyyy-MM-dd&quot; },
        {text: &quot;dsu MMM yyyy - e.g 12th Feb 2016&quot;, value: &quot;dsu MMM yyyy&quot; },
        {text: &quot;D dsu MMM yyyy - e.g Sat 12th Feb 2016&quot;, value: &quot;D dsu MMM yyyy&quot; },
      ],
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

export default {
    data() {
        return {
            format: "d MMMM yyyy",
            formatOptions:[
                {text: "d MMM yyyy - e.g 12 Feb 2016" , value: "d MMM yyyy" },
                {text: "d MMMM yyyy - e.g 12 February 2016", value: "d MMMM yyyy" },
                {text: "yyyy-MM-dd - e.g 2016-02-12", value: "yyyy-MM-dd" },
                {text: "dsu MMM yyyy - e.g 12th Feb 2016", value: "dsu MMM yyyy" },
                {text: "D dsu MMM yyyy - e.g Sat 12th Feb 2016", value: "D dsu MMM yyyy" },
            ],
        }
    },
    components: {
        Datepicker
    }
}
</script>
