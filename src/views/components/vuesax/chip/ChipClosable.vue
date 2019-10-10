<!-- =========================================================================================
    File Name: ChipClosable.vue
    Description: For making a chip closable
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Closable" code-toggler>
        
        <p>For making a chip closable</p>

        <div class="demo-alignment">

            <vs-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vs-button>
            <vs-chip @click="remove(chip)" v-for="(chip, index) in chips" :key="index" closable> {{ chip }} </vs-chip>

        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-button v-if=&quot;chips.length == 0&quot; @click=&quot;reset&quot; type=&quot;filled&quot;&gt;Reset Chips&lt;/vs-button&gt;
    &lt;vs-chip @click=&quot;remove(chip)&quot; v-for=&quot;(chip, index) in chips&quot; :key=&quot;index&quot; closable&gt; {{ "\{\{ chip \}\}" }}} &lt;/vs-chip&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      chips:[
        &apos;Dribbble&apos;,
        &apos;GitHub&apos;,
        &apos;Behance&apos;,
        &apos;Vuejs&apos;,
        &apos;Vuesax&apos;,
      ],
    }
  },
  methods: {
    reset () {
      this.chips = [
        &apos;Dribbble&apos;,
        &apos;GitHub&apos;,
        &apos;Behance&apos;,
        &apos;Vuejs&apos;,
        &apos;Vuesax&apos;,
      ]
    },
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
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
            chips: [
                'Dribbble',
                'GitHub',
                'Behance',
                'Vuejs',
                'Vuesax',
            ],
        }
    },
    methods: {
        reset() {
            this.chips = [
                'Dribbble',
                'GitHub',
                'Behance',
                'Vuejs',
                'Vuesax',
            ]
        },
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1)
        }
    }
}
</script>