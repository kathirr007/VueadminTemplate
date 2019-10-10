<!-- =========================================================================================
    File Name: SelectValidators.vue
    Description: Represent validation on select
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Validators" code-toggler>

        <p>You can add a state for example of in affirmative response to a validation with <code>success</code> and if it is necessary to add a description or help to the user you can do it with the property <code>description</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>Each of the states you can change the text, for example in the case of <code>vs-danger-text</code> for the state of danger.</span>
        </vs-alert><br>

        <div class="demo-alignment">

            <vs-select
                :success="true"
                success-text="This field is valid"
                placeholder="Select"
                class="selectExample"
                label="Success"
                multiple
                v-model="select1" >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />
            </vs-select>

            <vs-select
                :danger="true"
                danger-text="This field is invalid"
                placeholder="Select"
                class="selectExample"
                label="Danger"
                multiple
                v-model="select2">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />
            </vs-select>

            <vs-select
                :warning="true"
                warning-text="This field is invalid"
                placeholder="Select"
                class="selectExample"
                label="Warning"
                multiple
                v-model="select3">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />
            </vs-select>

            <vs-select
                description-text="Simple info for multiple select"
                placeholder="Select"
                class="selectExample"
                label="Description"
                multiple
                v-model="select4">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />
            </vs-select>
        </div>
        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;con-select-example&quot;&gt;

    &lt;vs-select
     :success=&quot;true&quot;
      success-text=&quot;This field is valid&quot;
      placeholder=&quot;Select&quot;
      class=&quot;selectExample&quot;
      label=&quot;Success&quot;
      multiple
      v-model=&quot;select1&quot;
      &gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in exampleOptions&quot; /&gt;
    &lt;/vs-select&gt;

    &lt;vs-select
      :danger=&quot;true&quot;
      danger-text=&quot;This field is invalid&quot;
      placeholder=&quot;Select&quot;
      class=&quot;selectExample&quot;
      label=&quot;Danger&quot;
      multiple
      v-model=&quot;select2&quot;
      &gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in exampleOptions&quot; /&gt;
    &lt;/vs-select&gt;

    &lt;vs-select
      :warning=&quot;true&quot;
      warning-text=&quot;This field is invalid&quot;
      placeholder=&quot;Select&quot;
      class=&quot;selectExample&quot;
      label=&quot;Warning&quot;
      multiple
      v-model=&quot;select3&quot;
      &gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in exampleOptions&quot; /&gt;
    &lt;/vs-select&gt;

    &lt;vs-select
      description-text=&quot;Simple info for multiple select&quot;
      placeholder=&quot;Select&quot;
      class=&quot;selectExample&quot;
      label=&quot;Description&quot;
      multiple
      v-model=&quot;select4&quot;
      &gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in exampleOptions&quot; /&gt;
    &lt;/vs-select&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      select1:[],
      select2:[],
      select3:[],
      select4:[],
      exampleOptions:[
        {text: &apos;Square&apos;, value: 1},
        {text: &apos;Rectangle&apos;, value: 2},
        {text: &apos;Rombo&apos;, value: 3},
        {text: &apos;Romboid&apos;, value: 4},
        {text: &apos;Trapeze&apos;, value: 5},
        {text: &apos;Triangle&apos;, value: 6},
        {text: &apos;Polygon&apos;, value: 7},
        {text: &apos;Regular polygon&apos;, value: 8},
        {text: &apos;Circumference&apos;, value: 9},
        {text: &apos;Circle&apos;, value: 10},
        {text: &apos;Circular sector&apos;, value: 11},
        {text: &apos;Circular trapeze&apos;, value: 12},
      ]
    }
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>
<script>
export default {
    data() {
        return {

            select1: [],
            select2: [],
            select3: [],
            select4: [],
            exampleOptions: [
                { text: 'Square', value: 1 },
                { text: 'Rectangle', value: 2 },
                { text: 'Rombo', value: 3 },
                { text: 'Romboid', value: 4 },
                { text: 'Trapeze', value: 5 },
                { text: 'Triangle', value: 6 },
                { text: 'Polygon', value: 7 },
                { text: 'Regular polygon', value: 8 },
                { text: 'Circumference', value: 9 },
                { text: 'Circle', value: 10 },
                { text: 'Circular sector', value: 11 },
                { text: 'Circular trapeze', value: 12 },
            ],
        }
    },
}
</script>