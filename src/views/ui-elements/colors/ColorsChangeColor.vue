<!-- =========================================================================================
    File Name: ColorsChangeColor.vue
    Description: Change theme's main colors - During execution
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Change Color" code-toggler>
        
        <p>You can change the color of the application in process of execution with the function $vs.theme which as a parameter requires a json with the colors to change</p>

        <p>Imagine that in the middle of the application we want the primary color change would be something like this:</p>

        <prism language="js" class="rounded-lg">
this.$vs.theme({
  primary:'rgb(5, 173, 88)' // my new color
})
        </prism>

        <p class="mt-5">By doing this, all <strong>Vuesax</strong> components in the application that use a primary color with change. Select one of the colors to change it and that all the components of this documentation have that color.</p>

        <ul class="demo-alignment text-white">
            <li class="bg-primary">
                <input class="absolute w-full h-full cursor-pointer opacity-0" @change="changeColor($event.target.value,'primary')" type="color" name="" value="">
                primary
            </li>
            <li class="bg-success">
                <input class="absolute w-full h-full cursor-pointer opacity-0" @change="changeColor($event.target.value,'success')" type="color" name="" value="">
                success
            </li>
            <li class="bg-danger">
                <input class="absolute w-full h-full cursor-pointer opacity-0" @change="changeColor($event.target.value,'danger')" type="color" name="" value="">
                danger
            </li>
            <li class="bg-warning">
                <input class="absolute w-full h-full cursor-pointer opacity-0" @change="changeColor($event.target.value,'warning')" type="color" name="" value="">
                warning
            </li>
            <li class="bg-dark">
                <input class="absolute w-full h-full cursor-pointer opacity-0" @change="changeColor($event.target.value,'dark')" type="color" name="" value="">
                dark
            </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;demo-alignment text-white&quot;&gt;
    &lt;li class=&quot;colorprimaryx&quot;&gt;
      &lt;input @change=&quot;changeColor($event.target.value,&apos;primary&apos;)&quot; type=&quot;color&quot; name=&quot;&quot; value=&quot;&quot;&gt;
      primary
    &lt;/li&gt;
    &lt;li class=&quot;colorsuccessx&quot;&gt;
      &lt;input @change=&quot;changeColor($event.target.value,&apos;success&apos;)&quot; type=&quot;color&quot; name=&quot;&quot; value=&quot;&quot;&gt;
      success
    &lt;/li&gt;
    &lt;li class=&quot;colordangerx&quot;&gt;
      &lt;input @change=&quot;changeColor($event.target.value,&apos;danger&apos;)&quot; type=&quot;color&quot; name=&quot;&quot; value=&quot;&quot;&gt;
      danger
    &lt;/li&gt;
    &lt;li class=&quot;colorwarningx&quot;&gt;
      &lt;input @change=&quot;changeColor($event.target.value,&apos;warning&apos;)&quot; type=&quot;color&quot; name=&quot;&quot; value=&quot;&quot;&gt;
      warning
    &lt;/li&gt;
    &lt;li class=&quot;colordarkx&quot;&gt;
      &lt;input @change=&quot;changeColor($event.target.value,&apos;dark&apos;)&quot; type=&quot;color&quot; name=&quot;&quot; value=&quot;&quot;&gt;
      dark
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    changeColor(colorx, whatColor) {
      this.$vs.theme({
        [whatColor]: colorx
      })
    }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;css&quot; scoped&gt;
.colorprimaryx {
  background: rgb(var(--vs-primary)) !important;
}

.colorsuccessx {
  background: rgb(var(--vs-success)) !important;
}

.colordangerx {
  background: rgb(var(--vs-danger)) !important;
}

.colorwarningx {
  background: rgb(var(--vs-warning)) !important;
}

.colordarkx {
  background: rgb(var(--vs-dark)) !important;
}
&lt;/style&gt;
        </template>

    </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
    components: {
        Prism
    },
    methods: {
        changeColor(colorx, whatColor) {
            this.$vs.theme({
                [whatColor]: colorx
            })
        }
    }
}
</script>

<style scoped>
.demo-alignment li:hover {
    transform: translate(0, 8px);
    box-shadow: 0px 0px 40px -10px rgba(255, 255, 255, 0) !important;
}
</style>