<!-- =========================================================================================
    File Name: AvatarWithBadge.vue
    Description: Display avatar with badge
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="With Badge" code-toggler>
        
        <p>You can add a notification label to the avatar, either a reference point or a number with the property <code>badge</code></p>
        <p>You could also change the badge's color by using the property <code>badge-color</code>. You are able to use the <router-link to="/colors">Main Colors</router-link> or <strong>RGB</strong> and <strong>HEX</strong> colors.</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment mt-5">

            <vs-avatar badge />
            <vs-avatar :badge="badge1" text="Luisdaniel" />
            <vs-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Luisd" />
            <vs-button color="primary" type="filled" @click="increment"> Increment Badge counter </vs-button>

        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-avatar badge /&gt;
  &lt;vs-avatar :badge=&quot;badge1&quot; text=&quot;Luisdaniel&quot; /&gt;
  &lt;vs-avatar badge-color=&quot;rgb(140, 23, 164)&quot; :badge=&quot;badge2&quot; text=&quot;Luisd&quot; /&gt;
  &lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; @click=&quot;increment&quot;&gt; Increment Badge counter &lt;/vs-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    badge1: 2,
    badge2: 10,
  }),
  methods: {
    increment() {
      this.badge1++
      this.badge2++
    }
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        badge1: 2,
        badge2: 10,
    }),
    methods: {
        increment() {
            this.badge1++
            this.badge2++
        }
    }
}
</script>