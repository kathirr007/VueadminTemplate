<!-- =========================================================================================
    File Name: SelectColor.vue
    Description: Change color of selected option
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the select with the property <code>color</code></p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment">
            <input v-model="colorx" type="color" value="">
            <vs-select :color="colorx" class="selectExample" v-model="select1">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
            </vs-select>
            <vs-select :color="select2" class="selectExample" v-model="select2">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
            </vs-select>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;con-select-example&quot;&gt;

    &lt;input v-model=&quot;colorx&quot; type=&quot;color&quot; value=&quot;&quot;&gt;

    &lt;vs-select :color=&quot;colorx&quot; class=&quot;selectExample&quot; v-model=&quot;select1&quot;&gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in options1&quot; /&gt;
    &lt;/vs-select&gt;

    &lt;vs-select :color=&quot;select2&quot; class=&quot;selectExample&quot; v-model=&quot;select2&quot;&gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in options2&quot; /&gt;
    &lt;/vs-select&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      colorx:&apos;#103767&apos;,
      select1:3,
      select2:&apos;primary&apos;,
      options1:[
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
      ],
      options2:[
        {text: &apos;Primary&apos;, value: &apos;primary&apos;},
        {text: &apos;Success&apos;, value: &apos;success&apos;},
        {text: &apos;Danger&apos;, value: &apos;danger&apos;},
        {text: &apos;Warning&apos;, value: &apos;warning&apos;},
        {text: &apos;Dark&apos;, value: &apos;dark&apos;},
      ],
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
            colorx: '#103767',
            select1: 3,
            select2: 'primary',
            options1: [
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
            options2: [
                { text: 'Primary', value: 'primary' },
                { text: 'Success', value: 'success' },
                { text: 'Danger', value: 'danger' },
                { text: 'Warning', value: 'warning' },
                { text: 'Dark', value: 'dark' },
            ],
        }
    },
}
</script>