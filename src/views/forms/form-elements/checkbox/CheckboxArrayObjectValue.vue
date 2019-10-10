<!-- =========================================================================================
    File Name: CheckboxArrayObjectValue.vue
    Description: Create array of objects using checked checkboxes
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Array Object values" code-toggler>

        <span>Sometimes you need to link an object as a value when selecting a checkBox for it, you only have to put it as value in <strong>vs-value</strong> an object either literal or linked.</span>

        <ul class="demo-alignment">
            <li v-for="(region, index) in regions" :key="index">
                <vs-checkbox v-model="form.regions" :vs-value="region">{{ region.name }}</vs-checkbox>
            </li>
        </ul>

        <div class="op-block mt-5">{{form.regions}}</div>
        
        <template slot="codeContainer">
&lt;template&gt;
    &lt;ul class=&quot;centerx&quot;&gt;
      &lt;li v-for=&quot;(region, index) in regions&quot; :key=&quot;index&quot;&gt;
        &lt;vs-checkbox v-model=&quot;form.regions&quot; :vs-value=&quot;region&quot; &gt;{{ "\{\{ region.name \}\}" }}&lt;/vs-checkbox&gt;
      &lt;/li&gt;
    &lt;/ul&gt;

    &lt;div class=&quot;modelx&quot;&gt;{{ "\{\{ form.regions \}\}" }}&lt;/div&gt; 
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    form: {
    regions: []
  },
  regions: [
    { id: 1, name: &apos;Queensland&apos; },
    { id: 2, name: &apos;South Australia&apos; },
    { id: 3, name: &apos;New South Wales&apos; },
  ]
})
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
    data: () => ({
        form: {
            regions: []
        },
        regions: [
            { id: 1, name: 'Queensland' },
            { id: 2, name: 'South Australia' },
            { id: 3, name: 'New South Wales' },
        ]
    })
}
</script>