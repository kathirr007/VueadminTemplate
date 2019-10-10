<!-- =========================================================================================
    File Name: TextareaCounter.vue
    Description: Add counter to show validation to textarea
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Counter" code-toggler>

        <span>There are times when we need the user to only enter a certain number of characters for it, we have the property <code>counter</code>, the value is a number and determines the maximum</span>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>To get when the number of characters is exceeded use the property <code>counter-danger.sync</code></span>
        </vs-alert><br>

        <div>
            <vs-textarea counter="20" label="Counter: 20" :counter-danger.sync="counterDanger" v-model="textarea" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;vs-textarea counter=&quot;20&quot; label=&quot;Counter: 20&quot; :counter-danger.sync=&quot;counterDanger&quot; v-model=&quot;textarea&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data:()=&gt;({
    textarea: &apos;&apos;,
    counterDanger: false
  })
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
export default {
    data: () => ({
        textarea: '',
        counterDanger: false
    })
}
</script>