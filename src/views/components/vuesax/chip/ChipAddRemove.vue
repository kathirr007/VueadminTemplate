<!-- =========================================================================================
    File Name: ChipAddRemove.vue
    Description: Add and Remove chips using vs-chips
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Add and Remove Items" code-toggler>
        
        <p>You can add and remove chips with the <code>vs-chips</code> component. For the main parameter, pass the <code>items</code> property, which is an array representing each chip</p>

        <div class="mt-5">

            <div class="op-block mb-5"> {{ chips }} </div>
            <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips">
                <vs-chip
                    :key="chip"
                    @click="remove(chip)"
                    v-for="chip in chips"
                    closable>
                    {{ chip }} 
                </vs-chip>
            </vs-chips>

        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;op-block mb-4&quot;&gt; {{ "\{\{ chips \}\}" }} &lt;/div&gt;
  &lt;vs-chips color=&quot;rgb(145, 32, 159)&quot; placeholder=&quot;New Element&quot; v-model=&quot;chips&quot;&gt;
    &lt;vs-chip
      :key=&quot;chip&quot;
      @click=&quot;remove(chip)&quot;
      v-for=&quot;chip in chips&quot;
      closable&gt;
      {{ "\{\{ chip \}\}" }}}
    &lt;/vs-chip&gt;
  &lt;/vs-chips&gt;
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
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1)
        }
    }
}
</script>