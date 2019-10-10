<!-- =========================================================================================
    File Name: BreadcrumbSlot.vue
    Description: Breadcrumb with slot to get more control over breadcrumb
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Slot" code-toggler>

        <p>A default Vue slot that can be used instead of passing in an array of object. This allows for greater control of the breadcrumbs</p>

        <div class="demo-alignment">

            <vs-breadcrumb>
                <li><router-link to="/">Home</router-link><span class="vs-breadcrum--separator">/</span></li>
                <li><router-link to="/apps/chat">Chat</router-link><span class="vs-breadcrum--separator">/</span></li>
                <li aria-current="page" class="active">Infos</li>
            </vs-breadcrumb>

        </div>

        <template slot="codeContainer">
&lt;vs-breadcrumb&gt;
   &lt;li&gt;&lt;router-link to=&quot;/&quot;&gt;Home&lt;/router-link&gt;&lt;span class=&quot;vs-breadcrum--separator&quot;&gt;/&lt;/span&gt;&lt;/li&gt;
   &lt;li&gt;&lt;router-link to=&quot;/apps/chat&quot;&gt;Chat&lt;/router-link&gt;&lt;span class=&quot;vs-breadcrum--separator&quot;&gt;/&lt;/span&gt;&lt;/li&gt;
   &lt;li aria-current=&quot;page&quot; class=&quot;active&quot;&gt;Infos&lt;/li&gt;
&lt;/vs-breadcrumb&gt;
        </template>

    </vx-card>
</template>
