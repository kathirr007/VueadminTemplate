<!-- =========================================================================================
    File Name: NotificationsFixedAndFunctionClick.vue
    Description: Rendering of default notifications
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Fixed and function click" code-toggler>
        
        <p>Sometimes we need to execute a function when the user clicks on the notification. For this, pass a function to the click property. Example: <code>click:()=>{ ... }</code></p>

        <vs-button @click="myFunction()" type="gradient" color="success" class="mt-4">Run Example</vs-button>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-button @click=&quot;myFunction()&quot; type=&quot;gradient&quot; color=&quot;success&quot; class=&quot;my-4&quot;&gt;Run Example&lt;/vs-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    myFunction() {
      this.$vs.notify({
        title: &apos;Function click&apos;,
        text: &apos;Click on me to execute function&apos;,
        color: &apos;primary&apos;,
        fixed: true,
        click: () =&gt; {
          // Secondary function
          this.$vs.notify({
            title: &apos;Secondary function&apos;,
            text: &apos;Executed the function when clicking&apos;,
            color: &apos;success&apos;,
            iconPack: &apos;feather&apos;,
            icon: &apos;icon-check&apos;
          })
        },
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
    methods: {
        myFunction() {
            this.$vs.notify({
                title: 'Function click',
                text: 'Click on me to execute function',
                color: 'primary',
                fixed: true,
                click: () => {
                    // Secondary function
                    this.$vs.notify({
                        title: 'Secondary function',
                        text: 'Executed the function when clicking',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check'
                    })
                },
            })
        },
    }
}
</script>