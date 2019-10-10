<!-- =========================================================================================
    File Name: SelectGroupItems.vue
    Description: Group options in select element
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Group items" code-toggler>

        <p>You can group elements with the sub component <code>vs-select-group</code></p>

        <div class="demo-alignment">

            <vs-select class="selectExample" v-model="select81">
                <div :key="index" v-for="(item,index) in options81">
                    <vs-select-group :title="item.title" v-if="item.group">
                        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in item.group" />
                    </vs-select-group>
                </div>
            </vs-select>

            <vs-select vs-multiple class="selectExample" v-model="select82">
                <div :key="index" v-for="(item,index) in options82">
                    <vs-select-group :title="item.title" v-if="item.group">
                        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in item.group" />
                    </vs-select-group>
                </div>
            </vs-select>

            <vs-select vs-autocomplete class="selectExample" v-model="select83">
                <div :key="index" v-for="(item,index) in options83">
                    <vs-select-group :title="item.title" v-if="item.group">
                        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in item.group" />
                    </vs-select-group>
                </div>
            </vs-select>
        </div>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;con-select-example&quot;&gt;

    &lt;vs-select class=&quot;selectExample&quot; vs-label=&quot;Defautl&quot; v-model=&quot;select1&quot;&gt;
      &lt;div :key=&quot;index&quot; v-for=&quot;(item,index) in options1&quot;&gt;

        &lt;vs-select-group :title=&quot;item.title&quot; v-if=&quot;item.group&quot;&gt;
          &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in item.group&quot; /&gt;
        &lt;/vs-select-group&gt;

      &lt;/div&gt;
    &lt;/vs-select&gt;

    &lt;vs-select vs-multiple class=&quot;selectExample&quot; vs-label=&quot;Multiple&quot; v-model=&quot;select2&quot;&gt;
      &lt;div :key=&quot;index&quot; v-for=&quot;(item,index) in options2&quot;&gt;

        &lt;vs-select-group :title=&quot;item.title&quot; v-if=&quot;item.group&quot;&gt;
          &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in item.group&quot; /&gt;
        &lt;/vs-select-group&gt;

      &lt;/div&gt;
    &lt;/vs-select&gt;

    &lt;vs-select vs-autocomplete class=&quot;selectExample&quot; vs-label=&quot;Autocomplete&quot; v-model=&quot;select3&quot;&gt;
      &lt;div :key=&quot;index&quot; v-for=&quot;(item,index) in options3&quot;&gt;

        &lt;vs-select-group :title=&quot;item.title&quot; v-if=&quot;item.group&quot;&gt;
          &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in item.group&quot; /&gt;
        &lt;/vs-select-group&gt;

      &lt;/div&gt;
    &lt;/vs-select&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      select1: 6,
      select2: [6],
      select3: [&apos;red&apos;],
      options1: [{
          title: &apos;Figures&apos;,
          group: [
            { text: &apos;Romboid&apos;, value: 4 },
            { text: &apos;Trapeze&apos;, value: 5 },
            { text: &apos;Triangle&apos;, value: 6 },
            { text: &apos;Polygon&apos;, value: 7 },
          ]
        },
        {
          title: &apos;Colors&apos;,
          group: [
            { text: &apos;Red&apos;, value: &apos;red&apos; },
            { text: &apos;Green&apos;, value: &apos;green&apos; },
            { text: &apos;Blue&apos;, value: &apos;blue&apos; },
            { text: &apos;Purple&apos;, value: &apos;purple&apos; },
          ]
        }
      ],
      options2: [{
          title: &apos;Figures&apos;,
          group: [
            { text: &apos;Romboid&apos;, value: 4 },
            { text: &apos;Trapeze&apos;, value: 5 },
            { text: &apos;Triangle&apos;, value: 6 },
            { text: &apos;Polygon&apos;, value: 7 },
          ]
        },
        {
          title: &apos;Colors&apos;,
          group: [
            { text: &apos;Red&apos;, value: &apos;red&apos; },
            { text: &apos;Green&apos;, value: &apos;green&apos; },
            { text: &apos;Blue&apos;, value: &apos;blue&apos; },
            { text: &apos;Purple&apos;, value: &apos;purple&apos; },
          ]
        }
      ],
      options3: [{
          title: &apos;Figures&apos;,
          group: [
            { text: &apos;Romboid&apos;, value: 4 },
            { text: &apos;Trapeze&apos;, value: 5 },
            { text: &apos;Triangle&apos;, value: 6 },
            { text: &apos;Polygon&apos;, value: 7 },
          ]
        },
        {
          title: &apos;Colors&apos;,
          group: [
            { text: &apos;Red&apos;, value: &apos;red&apos; },
            { text: &apos;Green&apos;, value: &apos;green&apos; },
            { text: &apos;Blue&apos;, value: &apos;blue&apos; },
            { text: &apos;Purple&apos;, value: &apos;purple&apos; },
          ]
        }
      ],
    }
  },
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            select81: 6,
            select82: [6],
            select83: ['red'],
            options81: [{
                    title: 'Figures',
                    group: [
                        { text: 'Romboid', value: 4 },
                        { text: 'Trapeze', value: 5 },
                        { text: 'Triangle', value: 6 },
                        { text: 'Polygon', value: 7 },
                    ]
                },
                {
                    title: 'Colors',
                    group: [
                        { text: 'Red', value: 'red' },
                        { text: 'Green', value: 'green' },
                        { text: 'Blue', value: 'blue' },
                        { text: 'Purple', value: 'purple' },
                    ]
                }
            ],
            options82: [{
                    title: 'Figures',
                    group: [
                        { text: 'Romboid', value: 4 },
                        { text: 'Trapeze', value: 5 },
                        { text: 'Triangle', value: 6 },
                        { text: 'Polygon', value: 7 },
                    ]
                },
                {
                    title: 'Colors',
                    group: [
                        { text: 'Red', value: 'red' },
                        { text: 'Green', value: 'green' },
                        { text: 'Blue', value: 'blue' },
                        { text: 'Purple', value: 'purple' },
                    ]
                }
            ],
            options83: [{
                    title: 'Figures',
                    group: [
                        { text: 'Romboid', value: 4 },
                        { text: 'Trapeze', value: 5 },
                        { text: 'Triangle', value: 6 },
                        { text: 'Polygon', value: 7 },
                    ]
                },
                {
                    title: 'Colors',
                    group: [
                        { text: 'Red', value: 'red' },
                        { text: 'Green', value: 'green' },
                        { text: 'Blue', value: 'blue' },
                        { text: 'Purple', value: 'purple' },
                    ]
                }
            ],
        }
    },
}
</script>