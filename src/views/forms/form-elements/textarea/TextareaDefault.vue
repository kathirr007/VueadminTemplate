<!-- =========================================================================================
    File Name: TextareaDefault.vue
    Description: Rendering textarea
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <span>To add a Textarea we have the component <code>vs-textarea</code></span>

        <div class="mt-5">
            <vs-textarea v-model="textarea" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;vs-textarea v-model=&quot;textarea&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data:()=&gt;({
    textarea: &apos;&apos;,
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
    })
}
</script>