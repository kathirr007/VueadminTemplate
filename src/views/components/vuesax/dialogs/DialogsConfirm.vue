<!-- =========================================================================================
    File Name: DialogsConfirm.vue
    Description: Create Confirm dialogs
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Confirm" code-toggler>
        
        <p>If you need a dialog of type confirm you can do it just by changing the type as a parameter inside the main function</p>
        
        <vs-alert color="primary" icon="new_releases" active="true" class="my-4">
            <p>To do some action when the user approves or confirms we have the property accept:<code>myFunctionAccept</code></p>
        </vs-alert>

        <div class="demo-alignment">
            <vs-button @click="openConfirm()" color="danger" type="gradient">Delete Image</vs-button>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-button @click=&quot;openConfirm()&quot; color=&quot;danger&quot; type=&quot;gradient&quot;&gt;Delete Image&lt;/vs-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    activeConfirm: false
  }),
  methods: {
    openConfirm() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.',
        accept: this.acceptAlert
      })
    },
    acceptAlert() {
      this.$vs.notify({
        color: 'danger',
        title: 'Deleted image',
        text: 'The selected image was successfully deleted'
      })
    },
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        activeConfirm: false
    }),
    methods: {
        openConfirm() {
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.',
                accept: this.acceptAlert
            })
        },
        acceptAlert() {
            this.$vs.notify({
                color: 'danger',
                title: 'Deleted image',
                text: 'The selected image was successfully deleted'
            })
        },
    }
}
</script>