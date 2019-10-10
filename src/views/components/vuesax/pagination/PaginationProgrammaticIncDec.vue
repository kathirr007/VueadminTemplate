<!-- =========================================================================================
    File Name: PaginationProgrammaticIncDec.vue
    Description: Programmatic Inc/Dec page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Programmatic Inc/Dec" code-toggler>

    <p>You can also update page number from outside of pagination component.</p>

    <div class="my-5">
      <p class="mb-3">Current Page: {{ currentx }}</p>
      <vs-button @click="currentx++">Increment</vs-button>
      <vs-button class="ml-4 mb-4" @click="currentx--">Decrement</vs-button>
      <vs-pagination :total="20" v-model="currentx"></vs-pagination>
    </div>

    <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-pagination :total=&quot;20&quot; v-model=&quot;currentx&quot;&gt;&lt;/vs-pagination&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    currentx: 5
  })
}
&lt;/script&gt;
    </template>
  </vx-card>
</template>


<script>
export default {
    data: () => ({
        currentx: 5
    })
}
</script>
