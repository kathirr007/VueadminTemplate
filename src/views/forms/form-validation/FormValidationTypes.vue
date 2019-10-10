<!-- =========================================================================================
    File Name: FormValidationTypes.vue
    Description: Validation types
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Validation types" code-toggler>

        <p>VeeValidate comes with a bunch of validation rules out of the box and cover most validation needs</p>
        <div class="mt-5">
            <form>
                <div class="vx-row">
                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'required'" label="This field is required" name="required" v-model="required" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('required')">{{ errors.first('required') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'alpha'" label="Only alphabetic characters" name="alpha" v-model="alpha" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('alpha')">{{ errors.first('alpha') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'alpha_dash'" label="Only alphabetic characters, numbers, dashes or underscores" name="alpha_dash" v-model="alpha_dash" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('alpha_dash')">{{ errors.first('alpha_dash') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'alpha_num'" label="May contain alphabetic characters or numbers" name="alpha_num" v-model="alpha_num" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('alpha_num')">{{ errors.first('alpha_num') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'numeric'" label="Must only consist of numbers" name="numeric" v-model="numeric" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('numeric')">{{ errors.first('numeric') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'alpha_spaces'" label="Only alphabetic characters or spaces" name="alpha_spaces" v-model="alpha_spaces" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('alpha_spaces')">{{ errors.first('alpha_spaces') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'email'" label="Must be a valid email" name="email" v-model="email" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'url:require_protocol'" data-vv-as="field" label="Must be a valid url" name="url" v-model="url" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('url')">{{ errors.first('url') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'min:3'" label="Length should not be less than the specified length : 3" name="min" v-model="min" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('min')">{{ errors.first('min') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'max:6'" label="Length may not exceed the specified length : 6" name="max" v-model="max" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('max')">{{ errors.first('max') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input type="password" v-validate="'min:6|max:10'" label="Password 1" name="password" v-model="password" class="mt-5 w-full" ref="password" />
                        <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input type="password" v-validate="'min:6|max:10|confirmed:password'" label="Confirm Password" name="confirm_password" v-model="confirm_password" class="mt-5 w-full" data-vv-as="password" />
                        <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'date_format:dd/MM/yyyy'" label="Date Format: dd/MM/yyyy" name="date_format" v-model="date_format" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('date_format')">{{ errors.first('date_format') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'between:1,11'" label="Numeric value between minimum value and a maximum value : 1 and 11" name="between" v-model="between" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('between')">{{ errors.first('between') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'credit_card'" label="Valid credit card" name="credit_card" v-model="credit_card" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('credit_card')">{{ errors.first('credit_card') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016'" label="Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016" name="date_between" v-model="date_between" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('date_between')">{{ errors.first('date_between') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'digits:3'" label="Must be numeric and have the specified number of digits : 3" name="digits" v-model="digits" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('digits')">{{ errors.first('digits') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-select  v-validate="'included:1,3'" v-model="select1" name="included" label="Must have a value that is in the specified list : 1 or 3" class="select-large mt-5 w-full">
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
                        </vs-select>
                        <span class="text-danger text-sm" v-show="errors.has('included')">{{ errors.first('included') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'max_value:100'" label="Numeric value and must not be greater than the specified value : 100" name="max_value" v-model="max_value" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('max_value')">{{ errors.first('max_value') }}</span>
                    </div>

                    <div class="vx-col w-1/2">
                        <vs-input v-validate="'min_value:10'" label="Numeric value and must not be less than the specified value : 10" name="min_value" v-model="min_value" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('min_value')">{{ errors.first('min_value') }}</span>
                    </div>

                    <div class="vx-col w-full">
                        <vs-input v-validate="{regex: '^([0-9]+)$' }" label="Must match the specified regular expression : ^([0-9]+)$ - numbers only" name="regex" v-model="regex" class="mt-5 w-full" />
                        <span class="text-danger text-sm" v-show="errors.has('regex')">{{ errors.first('regex') }}</span>
                    </div>



                </div>
                <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>
            </form>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;form&gt;
    &lt;div class=&quot;vx-row&quot;&gt;

      &lt;!-- required --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'required'&quot; label=&quot;This field is required&quot; name=&quot;required&quot; v-model=&quot;required&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('required')&quot;&gt;{{ "\{\{ errors.first('required') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Only alphabetic characters --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'alpha'&quot; label=&quot;Only alphabetic characters&quot; name=&quot;alpha&quot; v-model=&quot;alpha&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('alpha')&quot;&gt;{{ "\{\{ errors.first('alpha') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Only alphabetic characters, numbers, dashes or underscores --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'alpha_dash'&quot; label=&quot;Only alphabetic characters, numbers, dashes or underscores&quot; name=&quot;alpha_dash&quot; v-model=&quot;alpha_dash&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('alpha_dash')&quot;&gt;{{ "\{\{ errors.first('alpha_dash') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- May contain alphabetic characters or numbers --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'alpha_num'&quot; label=&quot;May contain alphabetic characters or numbers&quot; name=&quot;alpha_num&quot; v-model=&quot;alpha_num&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('alpha_num')&quot;&gt;{{ "\{\{ errors.first('alpha_num') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Must only consist of numbers --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'numeric'&quot; label=&quot;Must only consist of numbers&quot; name=&quot;numeric&quot; v-model=&quot;numeric&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('numeric')&quot;&gt;{{ "\{\{ errors.first('numeric') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Only alphabetic characters or spaces --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'alpha_spaces'&quot; label=&quot;Only alphabetic characters or spaces&quot; name=&quot;alpha_spaces&quot; v-model=&quot;alpha_spaces&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('alpha_spaces')&quot;&gt;{{ "\{\{ errors.first('alpha_spaces') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Must be a valid email --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'email'&quot; label=&quot;Must be a valid email&quot; name=&quot;email&quot; v-model=&quot;email&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('email')&quot;&gt;{{ "\{\{ errors.first('email') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Must be a valid url --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'url:require_protocol'&quot; data-vv-as=&quot;field&quot; label=&quot;Must be a valid url&quot; name=&quot;url&quot; v-model=&quot;url&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('url')&quot;&gt;{{ "\{\{ errors.first('url') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Length should not be less than the specified length : 3 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'min:3'&quot; label=&quot;Length should not be less than the specified length : 3&quot; name=&quot;min&quot; v-model=&quot;min&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('min')&quot;&gt;{{ "\{\{ errors.first('min') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Length may not exceed the specified length : 6 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'max:6'&quot; label=&quot;Length may not exceed the specified length : 6&quot; name=&quot;max&quot; v-model=&quot;max&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('max')&quot;&gt;{{ "\{\{ errors.first('max') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Password 1 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input type=&quot;password&quot; size=&quot;large&quot; v-validate=&quot;'min:6|max:10'&quot; label=&quot;Password 1&quot; name=&quot;password&quot; v-model=&quot;password&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('password')&quot;&gt;{{ "\{\{ errors.first('password') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Confirm Password --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'min:6|max:10|confirmed:password'&quot; label=&quot;Confirm Password&quot; name=&quot;confirm_password&quot; v-model=&quot;confirm_password&quot; class=&quot;mt-5 w-full&quot; data-vv-as=&quot;password&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('confirm_password')&quot;&gt;{{ "\{\{ errors.first('confirm_password') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Date Format: dd/MM/yyyy --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'date_format:dd/MM/yyyy'&quot; label=&quot;Date Format: dd/MM/yyyy&quot; name=&quot;date_format&quot; v-model=&quot;date_format&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('date_format')&quot;&gt;{{ "\{\{ errors.first('date_format') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Numeric value between minimum value and a maximum value : 1 and 11 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'between:1,11'&quot; label=&quot;Numeric value between minimum value and a maximum value : 1 and 11&quot; name=&quot;between&quot; v-model=&quot;between&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('between')&quot;&gt;{{ "\{\{ errors.first('between') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Valid credit card --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'credit_card'&quot; label=&quot;Valid credit card&quot; name=&quot;credit_card&quot; v-model=&quot;credit_card&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('credit_card')&quot;&gt;{{ "\{\{ errors.first('credit_card') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016'&quot; label=&quot;Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016&quot; name=&quot;date_between&quot; v-model=&quot;date_between&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('date_between')&quot;&gt;{{ "\{\{ errors.first('date_between') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Must be numeric and have the specified number of digits : 3 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'digits:3'&quot; label=&quot;Must be numeric and have the specified number of digits : 3&quot; name=&quot;digits&quot; v-model=&quot;digits&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('digits')&quot;&gt;{{ "\{\{ errors.first('digits') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Must have a value that is in the specified list : 1 or 3 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-select v-validate=&quot;'included:1,3'&quot; v-model=&quot;select1&quot; name=&quot;included&quot; label=&quot;Must have a value that is in the specified list : 1 or 3&quot; class=&quot;select-large mt-5 w-full&quot;&gt;
          &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in options1&quot; /&gt;
        &lt;/vs-select&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('included')&quot;&gt;{{ "\{\{ errors.first('included') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Numeric value and must not be greater than the specified value : 100 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'max_value:100'&quot; label=&quot;Numeric value and must not be greater than the specified value : 100&quot; name=&quot;max_value&quot; v-model=&quot;max_value&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('max_value')&quot;&gt;{{ "\{\{ errors.first('max_value') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Numeric value and must not be less than the specified value : 10 --&gt;
      &lt;div class=&quot;vx-col w-1/2&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;'min_value:10'&quot; label=&quot;Numeric value and must not be less than the specified value : 10&quot; name=&quot;min_value&quot; v-model=&quot;min_value&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('min_value')&quot;&gt;{{ "\{\{ errors.first('min_value') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;

      &lt;!-- Must match the specified regular expression : ^([0-9]+)$ - numbers only --&gt;
      &lt;div class=&quot;vx-col w-full&quot;&gt;
        &lt;vs-input size=&quot;large&quot; v-validate=&quot;{regex: '^([0-9]+)$' }&quot; label=&quot;Must match the specified regular expression : ^([0-9]+)$ - numbers only&quot; name=&quot;regex&quot; v-model=&quot;regex&quot; class=&quot;mt-5 w-full&quot; /&gt;
        &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('regex')&quot;&gt;{{ "\{\{ errors.first('regex') \}\}" }}&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;vs-button type=&quot;filled&quot; @click.prevent=&quot;submitForm&quot; class=&quot;mt-5 block&quot;&gt;Submit&lt;/vs-button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      required: &quot;&quot;,
      alpha: &quot;&quot;,
      alpha_dash: &quot;&quot;,
      alpha_num: &quot;&quot;,
      numeric: &quot;&quot;,
      alpha_spaces: &quot;&quot;,
      email: &quot;&quot;,
      url: &quot;&quot;,
      min: &quot;&quot;,
      max: &quot;&quot;,
      password: &quot;&quot;,
      confirm_password: &quot;&quot;,
      date_format: &quot;&quot;,
      between: &quot;&quot;,
      credit_card: &quot;&quot;,
      date_between: &quot;&quot;,
      digits: &quot;&quot;,
      select1: &quot;&quot;,
      options1: [
        { text: &quot;One&quot;, value: 1 },
        { text: &quot;Two&quot;, value: 2 },
        { text: &quot;Three&quot;, value: 3 },
        { text: &quot;Four&quot;, value: 4 },
        { text: &quot;Five&quot;, value: 5 },
      ],
      max_value: &quot;&quot;,
      min_value: &quot;&quot;,
      regex: &quot;&quot;,
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
            required: "",
            alpha: "",
            alpha_dash: "",
            alpha_num: "",
            numeric: "",
            alpha_spaces: "",
            email: "",
            url: "",
            min: "",
            max: "",
            password: "",
            confirm_password: "",
            date_format: "",
            between: "",
            credit_card: "",
            date_between: "",
            digits: "",
            select1: "",
            options1: [
                {text: "One", value: 1},
                {text: "Two", value: 2},
                {text: "Three", value: 3},
                {text: "Four", value: 4},
                {text: "Five", value: 5},
            ],
            max_value: "",
            min_value: "",
            regex: "",
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
