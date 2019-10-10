<!-- =========================================================================================
    File Name: UploadAutomatic.vue
    Description: Uploading files automatically
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Automatic" code-toggler>
        
        <p>You can enable automatic submission with the <code>Automatic</code> property that executes the shipment by changing the value of the <code>input</code></p>

        <div class="mt-5">
            <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-upload automatic action=&quot;https://jsonplaceholder.typicode.com/posts/&quot; @on-success=&quot;successUpload&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    methods: {
        successUpload() {
            this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
        }
    }
}
</script>