<!-- =========================================================================================
    File Name: AlertClosable.vue
    Description: Create closable alert
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Closable" code-toggler>
        
        <p class="mb-2">You can show and hide the alert by means of <code>active.sync</code> and a Boolean bind as value</p>
        <p>The property to determine if the alert can be closed is <code>closable</code></p>

        <vs-button @click="active1=!active1" color="primary" type="filled" class="mt-5 mr-4 mb-4">{{ !active1 ? 'Open Alert' : 'Close Alert' }} 1</vs-button>
        <vs-button @click="active2=!active2" color="primary" type="filled" class="mb-5">{{ !active2 ? 'Open Alert' : 'Close Alert' }} 2</vs-button>

        <vs-alert :active.sync="active1" closable icon-pack="feather" close-icon="icon-x">
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </vs-alert>

        <p class="my-5">You can also change the icon used for the close buton on the alerts</p>
        
        <div class="mt-5"></div>
        <vs-alert :active.sync="active2" closable close-icon="icon-x-circle" icon-pack="feather">
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </vs-alert>

        <template slot="codeContainer">
&lt;vs-button @click=&quot;active1=!active1&quot;&gt;{{ !active1 ? 'Open Alert' : 'Close Alert' }} 1&lt;/vs-button&gt;
&lt;vs-button @click=&quot;active2=!active2&quot;&gt;{{ !active2 ? 'Open Alert' : 'Close Alert' }} 2&lt;/vs-button&gt;

&lt;vs-alert :active.sync=&quot;active1&quot; closable icon-pack=&quot;feather&quot; close-icon=&quot;icon-x&quot;&gt;
  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
&lt;/vs-alert&gt;

&lt;vs-alert :active.sync=&quot;active2&quot; closable close-icon=&quot;icon-x-circle&quot; icon-pack=&quot;feather&quot;&gt;
  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
&lt;/vs-alert&gt;
        </template>

    </vx-card>
</template>

<script>
    export default{
        data() {
            return {
                active1: true,
                active2: true,
            }
        },
    }
</script>