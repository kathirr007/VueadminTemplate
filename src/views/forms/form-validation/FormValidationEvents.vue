<!-- =========================================================================================
    File Name: FormValidationEvents.vue
    Description: Form validation on different events
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Change default event for form validation" code-toggler>

        <p>You can change default event when validation triggers using <code>data-vv-validate-on</code></p>
        <div class="mt-5">
            <form>
                <vs-input v-validate="'required|alpha'" placeholder="First Name" name="first_name" v-model="first_name" class="mt-5" data-vv-validate-on="blur" />
                <span class="text-danger text-sm" v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span>

                <vs-input v-validate="'required|alpha'" placeholder="Last Name" name="last_name" v-model="last_name" class="mt-5" data-vv-validate-on="blur" />
                <span class="text-danger text-sm" v-show="errors.has('last_name')">{{ errors.first('last_name') }}</span>

                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>
            </form>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;form&gt;
    &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required|alpha'&quot; placeholder=&quot;First Name&quot; name=&quot;first_name&quot; v-model=&quot;first_name&quot; class=&quot;mt-5&quot; data-vv-validate-on=&quot;blur&quot; /&gt;
    &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('first_name')&quot;&gt;{{ "\{\{ errors.first('first_name') \}\}" }}&lt;/span&gt;

    &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required|alpha'&quot; placeholder=&quot;Last Name&quot; name=&quot;last_name&quot; v-model=&quot;last_name&quot; class=&quot;mt-5&quot; data-vv-validate-on=&quot;blur&quot; /&gt;
    &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('last_name')&quot;&gt;{{ "\{\{ errors.first('last_name') \}\}" }}&lt;/span&gt;

    &lt;vs-button type=&quot;filled&quot; @click.prevent=&quot;submitForm&quot; class=&quot;mt-5 block&quot;&gt;Submit&lt;/vs-button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      first_name: &quot;&quot;,
      last_name: &quot;&quot;,
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
            first_name: "",
            last_name: "",
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
