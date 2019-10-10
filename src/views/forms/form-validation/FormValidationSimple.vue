<!-- =========================================================================================
    File Name: FormValidationSimple.vue
    Description: Simple form validation
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Simple form validation" code-toggler>

        <p>Simple form validation before submitting form. Add <code>v-validate</code> directive to input.</p>
        <div class="mt-5">
            <form>
                <vs-input v-validate="'required'" placeholder="Input 1" name="input1" v-model="value1" class="mt-5" />
                <span class="text-danger text-sm" v-show="errors.has('input1')">{{ errors.first('input1') }}</span>

                <vs-input v-validate="'required'" placeholder="Input 2" name="input2" v-model="value2" class="mt-5" />
                <span class="text-danger text-sm" v-show="errors.has('input2')">{{ errors.first('input2') }}</span>

                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>
            </form>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;form&gt;
    &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required'&quot; placeholder=&quot;Input 1&quot; name=&quot;input1&quot; v-model=&quot;value1&quot; class=&quot;mt-5&quot; /&gt;
    &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('input1')&quot;&gt;{{ "\{\{ errors.first('input1') \}\}" }}&lt;/span&gt;

    &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required'&quot; placeholder=&quot;Input 2&quot; name=&quot;input2&quot; v-model=&quot;value2&quot; class=&quot;mt-5&quot; /&gt;
    &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('input2')&quot;&gt;{{ "\{\{ errors.first('input2') \}\}" }}&lt;/span&gt;

    &lt;vs-button type=&quot;filled&quot; @click.prevent=&quot;submitForm&quot; class=&quot;mt-5 block&quot;&gt;Submit&lt;/vs-button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      value1: &quot;&quot;,
      value2: &quot;&quot;,
    }
  },
  methods: {
    submitForm() {
      this.$validator.validateAll().then(result =&gt; {
        if(result) {
          // if form have no errors
          alert(&quot;form submitted!&quot;);
        }else{
          // form have errors
        }
      })
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
            value1: "",
            value2: "",
        }
    },
    methods: {
        submitForm() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    // if form have no errors
                    alert("form submitted!");
                }else{
                    // form have errors
                }
            })
        }
    },
}
</script>
