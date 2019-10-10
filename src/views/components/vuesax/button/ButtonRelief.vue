<!-- =========================================================================================
    File Name: ButtonRelief.vue
    Description: Button with edges
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Relief" code-toggler>
        
        <p>To add a type of button with edges we change the value of <code>type</code> by: <code>relief</code></p>

        <div class="demo-alignment">

            <vs-button type="relief">Primary</vs-button>
            <vs-button color="success" type="relief">Success</vs-button>
            <vs-button color="danger" type="relief">Danger</vs-button>
            <vs-button color="warning" type="relief">warning</vs-button>
            <vs-button color="dark" type="relief">dark</vs-button>
            <vs-button color="rgb(187, 138, 200)" type="relief">Color</vs-button>
            <vs-button disabled type="relief">Disabled</vs-button>

        </div>

        <template slot="codeContainer">
&lt;vs-button type=&quot;relief&quot;&gt;Primary&lt;/vs-button&gt;
&lt;vs-button color=&quot;success&quot; type=&quot;relief&quot;&gt;Success&lt;/vs-button&gt;
&lt;vs-button color=&quot;danger&quot; type=&quot;relief&quot;&gt;Danger&lt;/vs-button&gt;
&lt;vs-button color=&quot;warning&quot; type=&quot;relief&quot;&gt;warning&lt;/vs-button&gt;
&lt;vs-button color=&quot;dark&quot; type=&quot;relief&quot;&gt;dark&lt;/vs-button&gt;
&lt;vs-button color=&quot;rgb(187, 138, 200)&quot; type=&quot;relief&quot;&gt;Color&lt;/vs-button&gt;
&lt;vs-button disabled type=&quot;relief&quot;&gt;Disabled&lt;/vs-button&gt;
        </template>

    </vx-card>
</template>