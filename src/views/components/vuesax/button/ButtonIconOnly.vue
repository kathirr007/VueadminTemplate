<!-- =========================================================================================
    File Name: ButtonIconOnly.vue
    Description: Button with only icon
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon Only" code-toggler>
        
        <p>You can have a button with only the icon you want with the property <code>icon</code> and not add any internal value to the button</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5 mb-3">
            <span>You can use the radius property to determine the border-radius of the button, there are many cases in which we need it to be round for example.</span>
        </vs-alert>

        <div class="demo-alignment">

            <vs-button color="primary" type="border" icon-pack="feather" icon="icon-search"></vs-button>
            <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-archive"></vs-button>
            <vs-button color="success" type="flat"  icon-pack="feather" icon="icon-camera"></vs-button>
            <vs-button color="dark" type="line" icon-pack="feather" icon="icon-calendar"></vs-button>
            <vs-button color="danger" type="gradient" icon-pack="feather" icon="icon-user-plus"></vs-button>
            <vs-button disabled color="primary" type="border" icon-pack="feather" icon="icon-search"></vs-button>
            <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-search"></vs-button>
            <vs-button radius color="warning" type="filled" icon-pack="feather" icon="icon-archive"></vs-button>
            <vs-button radius color="success" type="flat"   icon-pack="feather" icon="icon-camera"></vs-button>
            <vs-button radius color="dark" type="line" icon-pack="feather" icon="icon-calendar"></vs-button>
            <vs-button radius color="danger" type="gradient" icon-pack="feather" icon="icon-user-plus"></vs-button>
            <vs-button disabled radius color="primary" type="border" icon-pack="feather" icon="icon-search"></vs-button>

        </div>

        <template slot="codeContainer">
&lt;vs-button color=&quot;primary&quot; type=&quot;border&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-search&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button color=&quot;warning&quot; type=&quot;filled&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-archive&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button color=&quot;success&quot; type=&quot;flat&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-camera&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button color=&quot;dark&quot; type=&quot;line&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-calendar&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button color=&quot;danger&quot; type=&quot;gradient&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user-plus&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button disabled color=&quot;primary&quot; type=&quot;border&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-search&quot;&gt;&lt;/vs-button&gt;

&lt;vs-button radius color=&quot;primary&quot; type=&quot;border&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-search&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button radius color=&quot;warning&quot; type=&quot;filled&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-archive&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button radius color=&quot;success&quot; type=&quot;flat&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-camera&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button radius color=&quot;dark&quot; type=&quot;line&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-calendar&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button radius color=&quot;danger&quot; type=&quot;gradient&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user-plus&quot;&gt;&lt;/vs-button&gt;
&lt;vs-button disabled radius color=&quot;primary&quot; type=&quot;border&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-search&quot;&gt;&lt;/vs-button&gt;
        </template>

    </vx-card>
</template>