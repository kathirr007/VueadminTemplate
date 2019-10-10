<!-- =========================================================================================
    File Name: AlertExample.vue
    Description: Example of validation using alert
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <vx-card title="Example" code-toggler>
        
        <p>An example would be to have an input and when a condition is met show the <strong>vs-alert</strong></p>

        <vs-input label="Enter only numbers" placeholder="0123456789" v-model="value1" class="my-4" />
        <vs-alert :active="inputValid" color="danger" icon-pack="feather" icon="icon-info" >
            <span>the value is <b>invalid</b> you can only enter numbers</span>
        </vs-alert>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-input label=&quot;Enter only numbers&quot; placeholder=&quot;0123456789&quot; v-model=&quot;value1&quot; class=&quot;my-4&quot; /&gt;
  &lt;vs-alert :active=&quot;inputValid&quot; color=&quot;danger&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-info&quot;&gt;
    &lt;span&gt;the value is &lt;b&gt;invalid&lt;/b&gt; you can only enter numbers&lt;/span&gt;
  &lt;/vs-alert&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value1: '',
    }
  },
  computed: {
    inputValid() {
      if (/^\d+$/.test(this.value1)) {
        return false
      } else {
        return true
      }
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
            value1: '',
        }
    },
    computed: {
        inputValid() {
            if (/^\d+$/.test(this.value1)) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>