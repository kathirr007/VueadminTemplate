<!-- =========================================================================================
    File Name: PaginationLinksLimit.vue
    Description: Limit the amount of links shown
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Limit the amount of links shown" code-toggler>
        
        <p>By default Vuesax will show a maximum of 9 links. This default behaviour can be changed by setting the <code>max</code> directive to a different integer value</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="my-5">
            <p>The amount given to the <code>max</code> directive should take into account the first and last pages plus the ellipses "..."</p>
        </vs-alert>

        <vs-alert icon="warning" active="true" color="warning">
            <span>Setting the <code>max</code> directive to a value lesser then <code>5</code> when the <code>total</code> is greater then that will result in the pagination only showing the previous/next buttons as well as the first and last links</span>
        </vs-alert>
        
        <div class="my-5">
            <vs-pagination :total="30" v-model="currentx" :max="13"></vs-pagination>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-pagination :total=&quot;30&quot; v-model=&quot;currentx&quot; :max=&quot;13&quot;&gt;&lt;/vs-pagination&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    currentx: 17
  })
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        currentx: 17
    })
}
</script>