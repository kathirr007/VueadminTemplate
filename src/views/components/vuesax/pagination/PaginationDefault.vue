<!-- =========================================================================================
    File Name: PaginationDefault.vue
    Description: Rendering of default pagination
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>The pagination component consists of several elements, all of which are optional. So with no extra class, your pagination links will look as follow</p>
        
        <div class="my-5">
            <vs-pagination :total="40" v-model="currentx"></vs-pagination>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-pagination :total=&quot;40&quot; v-model=&quot;currentx&quot;&gt;&lt;/vs-pagination&gt;
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
        currentx: 14
    })
}
</script>