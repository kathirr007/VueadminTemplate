<!-- =========================================================================================
    File Name: AlertColor.vue
    Description: Change color alert
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the alert with the property <code>color</code>. You are able to use the Main Colors or <strong>RGB</strong> and <strong>HEX</strong> colors</p>

        <vs-alert icon="warning" active="true" color="warning" class="my-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <vs-alert color="success" title="Success" active="true" class="mt-3">
            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.
        </vs-alert>

        <vs-alert color="danger" title="Danger" active="true" class="mt-3">
            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.
        </vs-alert>

        <vs-alert color="warning" title="Warning" active="true" class="mt-3">
            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.
        </vs-alert>

        <vs-alert color="dark" title="Dark" active="true" class="mt-3">
            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.
        </vs-alert>

        <vs-alert color="rgb(41, 147, 138)" title="RGB" active="true" class="mt-3">
            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.
        </vs-alert>

        <vs-alert color="#842993" title="HEX" active="true" class="mt-3">
            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.
        </vs-alert>

<template slot="codeContainer">
    &lt;vs-alert color=&quot;success&quot; title=&quot;Success&quot; active=&quot;true&quot;&gt;
        Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
        cupcake cupcake.
    &lt;/vs-alert&gt;

    &lt;vs-alert color=&quot;danger&quot; title=&quot;Danger&quot; active=&quot;true&quot;&gt;
        Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
        cupcake cupcake.
    &lt;/vs-alert&gt;

    &lt;vs-alert color=&quot;warning&quot; title=&quot;Warning&quot; active=&quot;true&quot;&gt;
        Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
        cupcake cupcake.
    &lt;/vs-alert&gt;

    &lt;vs-alert color=&quot;dark&quot; title=&quot;Dark&quot; active=&quot;true&quot;&gt;
        Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
        cupcake cupcake.
    &lt;/vs-alert&gt;

    &lt;vs-alert color=&quot;rgb(41, 147, 138)&quot; title=&quot;RGB&quot; active=&quot;true&quot;&gt;
        Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
        cupcake cupcake.
    &lt;/vs-alert&gt;

    &lt;vs-alert color=&quot;#842993&quot; title=&quot;HEX&quot; active=&quot;true&quot;&gt;
        Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
        cupcake cupcake.
    &lt;/vs-alert&gt;
</template>

    </vx-card>
</template>
