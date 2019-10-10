<!-- =========================================================================================
    File Name: InputValidation.vue
    Description: represent validation of inputs
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Validations" code-toggler>

        <p>You can add a state for example of in affirmative response to a validation with <code>vs-success</code> and if it is necessary to add a description or help to the user you can do it with the property <code>vs-description</code></p>

        <p>You can add icon using <code>val-icon-{}</code> and value will be icon name</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>Each of the states you can change the text, for example in the case of <code>vs-danger-text</code> for the state of danger.</span>
        </vs-alert>

        <div class="demo-alignment">
            
            <vs-input
                :success="true"
                success-text="The mail is valid"
                placeholder="Email Success"
                val-icon-success="done"
                v-model="value1" />

            <vs-input
                :danger="true"
                danger-text="Wrong password"
                placeholder="Password Danger"
                val-icon-danger="clear"
                v-model="value2" />

            <vs-input
                :warning="true"
                warning-text="The your data could not be verified"
                placeholder="Date Warning"
                val-icon-warning="warning"
                v-model="value3" />

            <vs-input
                description-text="Enter first two digit of your phone"
                placeholder="Phone Description"
                v-model="value4" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;centerx&quot;&gt;
      &lt;vs-input
        :success=&quot;true&quot;
        success-text=&quot;The mail is valid&quot;
        placeholder=&quot;Email Success&quot;
        val-icon-success=&quot;done&quot;
        v-model=&quot;value1&quot; /&gt;

      &lt;vs-input
        :danger=&quot;true&quot;
        danger-text=&quot;Wrong password&quot;
        placeholder=&quot;Password Danger&quot;
        val-icon-danger=&quot;clear&quot;
        v-model=&quot;value2&quot; /&gt;

      &lt;vs-input
        :warning=&quot;true&quot;
        warning-text=&quot;The your data could not be verified&quot;
        placeholder=&quot;Date Warning&quot;
        val-icon-warning=&quot;warning&quot;
        v-model=&quot;value3&quot; /&gt;

      &lt;vs-input
        description-text=&quot;Enter first two digit of your phone&quot;
        placeholder=&quot;Phone Description&quot;
        v-model=&quot;value4&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:&apos;&apos;,
      value2:&apos;&apos;,
      value3:&apos;&apos;,
      value4:&apos;&apos;,
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
            value2: '',
            value3: '',
            value4: '',
        }
    }
}
</script>