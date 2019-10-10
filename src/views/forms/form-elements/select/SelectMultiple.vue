<!-- =========================================================================================
    File Name: SelectMultiple.vue
    Description: Select multiple options using multiple prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Multiple" code-toggler>

        <p>You can have a selection with multiple selections with the property <code>multiple</code>. If you need the user to select only a certain number of options you can use the property <code>max-selected</code></p>

        <div class="demo-alignment">

            <vs-select placeholder="Multiple" multiple class="selectExample" v-model="select1">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
            </vs-select>

            <vs-select placeholder="Multiple and autocomplete" multiple vs-autocomplete class="selectExample" v-model="select2">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
            </vs-select>

            <vs-select placeholder="Max Selected" max-selected="2" multiple class="selectExample" v-model="select3">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options3" />
            </vs-select>
        </div>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;con-select-example&quot;&gt;

    &lt;vs-select placeholder=&quot;Multiple&quot; multiple class=&quot;selectExample&quot; v-model=&quot;select1&quot;&gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in options1&quot; /&gt;
    &lt;/vs-select&gt;

    &lt;vs-select placeholder=&quot;Multiple and autocomplete&quot; multiple vs-autocomplete class=&quot;selectExample&quot; v-model=&quot;select2&quot;&gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in options2&quot; /&gt;
    &lt;/vs-select&gt;

    &lt;vs-select placeholder=&quot;Max Selected&quot; max-selected=&quot;2&quot; multiple class=&quot;selectExample&quot; v-model=&quot;select3&quot;&gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in options3&quot; /&gt;
    &lt;/vs-select&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      select1: [],
      select2: [],
      select3: [],
      options1: [
        { text: &apos;IT&apos;, value: 0 },
        { text: &apos;Blade Runner&apos;, value: 2 },
        { text: &apos;Thor Ragnarok&apos;, value: 3 },
      ],
      options2: [
        { text: &apos;Square&apos;, value: 1 },
        { text: &apos;Rectangle&apos;, value: 2 },
        { text: &apos;Rombo&apos;, value: 3 },
        { text: &apos;Romboid&apos;, value: 4 },
        { text: &apos;Trapeze&apos;, value: 5 },
        { text: &apos;Triangle&apos;, value: 6 },
        { text: &apos;Polygon&apos;, value: 7 },
        { text: &apos;Regular polygon&apos;, value: 8 },
        { text: &apos;Circumference&apos;, value: 9 },
        { text: &apos;Circle&apos;, value: 10 },
        { text: &apos;Circular sector&apos;, value: 11 },
        { text: &apos;Circular trapeze&apos;, value: 12 },
      ],
      options3: [
        { text: &apos;Red&apos;, value: 1 },
        { text: &apos;Green&apos;, value: 2 },
        { text: &apos;Blue&apos;, value: 3 },
        { text: &apos;Purple&apos;, value: 4 },
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
            select1: [],
            select2: [],
            select3: [],
            options1: [
                { text: 'IT', value: 0 },
                { text: 'Blade Runner', value: 2 },
                { text: 'Thor Ragnarok', value: 3 },
            ],
            options2: [
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
            options3: [
                { text: 'Red', value: 1 },
                { text: 'Green', value: 2 },
                { text: 'Blue', value: 3 },
                { text: 'Purple', value: 4 },
            ],
        }
    },
}
</script>