<!-- =========================================================================================
    File Name: FormValidationMultipleRules.vue
    Description: Simple form validation
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Validating multiple rules" code-toggler>

        <p>You can validate multiple rules using <code>|</code>. You can find more validation rules <a href="https://baianat.github.io/vee-validate/guide/rules.html" target="_blank" rel="nofollow">here</a></p>
        <div class="mt-5">
            <form>
                <div class="vx-row lg:w-1/2 w-full">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required|alpha'" placeholder="Your Name" name="name" v-model="name" class="mt-5 w-full" />
                        <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    </div>

                    <div class="vx-col lg:w-1/2 w-full">
                        <vs-input v-validate="'required|alpha_dash'" placeholder="Your Username" name="username" v-model="username" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('username')">{{ errors.first('username') }}</span>
                    </div>

                    <div class="vx-col lg:w-1/2 w-full">
                        <vs-input v-validate="'required|email'" placeholder="Your Email" name="email" v-model="email" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>

                    <div class="vx-col lg:w-1/2 w-full">
                        <vs-input type="password" v-validate="'required|min:6|max:10'" ref="password" placeholder="Your Password" name="password" v-model="password" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    </div>

                    <div class="vx-col lg:w-1/2 w-full">
                        <vs-input type="password" v-validate="'required|min:6|max:10|confirmed:password'" data-vv-as="password" placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
                    </div>

                </div>
                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>
            </form>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;form&gt;
    &lt;div class=&quot;vx-row w-1/2&quot;&gt;

      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required|alpha'&quot; placeholder=&quot;Your Name&quot; name=&quot;name&quot; v-model=&quot;name&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot;  v-show=&quot;errors.has('name')&quot;&gt;{{ "\{\{ errors.first('name') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required|alpha_dash'&quot; placeholder=&quot;Your Username&quot; name=&quot;username&quot; v-model=&quot;username&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('username')&quot;&gt;{{ "\{\{ errors.first('username') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required|email'&quot; placeholder=&quot;Your Email&quot; name=&quot;email&quot; v-model=&quot;email&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('email')&quot;&gt;{{ "\{\{ errors.first('email') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input type=&quot;password&quot; size=&quot;large&quot; v-validate=&quot;'required|min:6|max:10'&quot; ref=&quot;password&quot; placeholder=&quot;Your Password&quot; name=&quot;password&quot; v-model=&quot;password&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('password')&quot;&gt;{{ "\{\{ errors.first('password') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input type=&quot;password&quot; size=&quot;large&quot; v-validate=&quot;'required|min:6|max:10|confirmed:password'&quot; data-vv-as=&quot;password&quot; placeholder=&quot;Confirm Password&quot; name=&quot;confirm_password&quot; v-model=&quot;confirm_password&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('confirm_password')&quot;&gt;{{ "\{\{ errors.first('confirm_password') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;vs-button type=&quot;filled&quot; @click.prevent=&quot;submitForm&quot; class=&quot;mt-5 block&quot;&gt;Submit&lt;/vs-button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      name: &quot;&quot;,
      username: &quot;&quot;,
      email: &quot;&quot;,
      password: &quot;&quot;,
      confirm_password: &quot;&quot;,
    }
  },
  methods: {
    submitForm() {
      this.$validator.validateAll().then(result =&gt; {
        if (result) {
          // if form have no errors
          alert(&quot;form submitted!&quot;);
        } else {
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
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: "",
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
