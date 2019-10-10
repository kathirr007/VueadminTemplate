<!-- =========================================================================================
    File Name: ButtonRouter.vue
    Description: pass string or object to directive 'to'. Button + vue-router
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Router" code-toggler>
        
        <p>You can send a string or object to directive to. This directive wrap a $router.push() vue method, you can use all programmatic navigation on vue router.</p>

        <div class="demo-alignment">

            <vs-button color="primary" type="filled" to="/components/list">String literal</vs-button>
            <vs-button color="warning" type="filled" :to="{ path: '/components/list' }">Object Path</vs-button>
            <vs-button color="success" type="filled" :to="{ name: 'todo'}">Named Router</vs-button>
            <vs-button color="dark"    type="filled" :to="{ path: '/pages/search', query: { q: 'modern admin' } }">With Query</vs-button>

        </div>

        <template slot="codeContainer">
&lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; to=&quot;/components/list&quot;&gt;String literal&lt;/vs-button&gt;
&lt;vs-button color=&quot;warning&quot; type=&quot;filled&quot; :to=&quot;{ path: &apos;/components/list&apos; }&quot;&gt;Object Path&lt;/vs-button&gt;
&lt;vs-button color=&quot;success&quot; type=&quot;filled&quot; :to=&quot;{ name: &apos;todo&apos;}&quot;&gt;Named Router&lt;/vs-button&gt;
&lt;vs-button color=&quot;dark&quot;    type=&quot;filled&quot; :to=&quot;{ path: &apos;/pages/search&apos;, query: { q: &apos;modern admin&apos; } }&quot;&gt;With Query&lt;/vs-button&gt;
        </template>

    </vx-card>
</template>