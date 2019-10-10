<!-- =========================================================================================
    File Name: PaginationGoTo.vue
    Description: with go to user can directly jump to that page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="GoTo" code-toggler>
        
        <p>The <code>goto</code> directive will allow users to directly jump to a desired page</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>If the value given is lower than <strong>1</strong> it will jump to page <strong>1</strong>. However if the value is greater than total it will jump to the last page</p>
        </vs-alert>
        
        <div class="mt-5">
            <vs-pagination :total="20" v-model="currentx" goto></vs-pagination>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-pagination :total=&quot;20&quot; v-model=&quot;currentx&quot; goto&gt;&lt;/vs-pagination&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    currentx: 14
  })
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        currentx: 8
    })
}
</script>