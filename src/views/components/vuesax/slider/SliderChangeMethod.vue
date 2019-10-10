<!-- =========================================================================================
    File Name: SliderChangeMethod.vue
    Description: Trigger function on change
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Change Method" code-toggler>
        
        <p>You can add a function that will be triggered every time the value changes with <code>@change="MyFunction"</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>You can change the minimum or maximum number admitted with the properties: <code>min</code>, <code>max</code></p>
        </vs-alert>

        <div class="mt-5">
            <vs-slider :min="50" @change="cambio" color="rgb(45, 208, 129)" v-model="value1"/>
            <div :style="{'width':widthx+'px','height':heightx+'px'}" class="p-2 bg-success rounded text-white flex items-center justify-center"> {{value1}} </div>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-slider :min=&quot;50&quot; @change=&quot;cambio&quot; color=&quot;rgb(45, 208, 129)&quot; v-model=&quot;value1&quot;/&gt;
  &lt;div :style=&quot;{'width':widthx+'px','height':heightx+'px'}&quot; class=&quot;box&quot;&gt; {{value1}} &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:55,
      widthx:55,
      heightx:55
    }
  },
  methods:{
    cambio(value){
      this.widthx = value
      this.heightx = value
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
            value1: 55,
            widthx: 55,
            heightx: 55
        }
    },
    methods: {
        cambio(value) {
            this.widthx = value
            this.heightx = value
        }
    }
}
</script>