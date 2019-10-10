<!-- =========================================================================================
    File Name: NavbarDefault.vue
    Description: Rendering of default Navbar
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>To add a navbar we have the component <code>vs-navbar</code>, there is a series of sub components to determine internal elements <code>vs-navbar-title</code>, <code>vs-spacer</code></p>

        <div class="mt-5">
            <vs-navbar v-model="activeItem" class="p-2">

                <div slot="title">
                    <vs-navbar-title><span>Vuesax</span></vs-navbar-title>
                </div>

                <vs-navbar-item index="0">
                    <a href="#">Home</a>
                </vs-navbar-item>

                <vs-navbar-item index="1">
                    <a href="#">News</a>
                </vs-navbar-item>

                <vs-navbar-item index="2">
                    <a href="#">Update</a>
                </vs-navbar-item>
            </vs-navbar>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-navbar v-model=&quot;activeItem&quot; class=&quot;p-2&quot;&gt;
  
    &lt;div slot=&quot;title&quot;&gt;
      &lt;vs-navbar-title&gt;
        &lt;span&gt;Vuesax&lt;/span&gt;
      &lt;/vs-navbar-title&gt;
    &lt;/div&gt;

    &lt;vs-navbar-item index=&quot;0&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;
    &lt;/vs-navbar-item&gt;

    &lt;vs-navbar-item index=&quot;1&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;News&lt;/a&gt;
    &lt;/vs-navbar-item&gt;

    &lt;vs-navbar-item index=&quot;2&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Update&lt;/a&gt;
    &lt;/vs-navbar-item&gt;
  &lt;/vs-navbar&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    activeItem: 0
  })
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        activeItem: 0
    })
}
</script>