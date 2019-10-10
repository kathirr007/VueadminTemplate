<!-- =========================================================================================
    File Name: NavbarColor.vue
    Description: Chnage background color of navbar
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the Topbar with the property <code>color</code>. You are able to use the Main Colors or RGB and HEX colors</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div>
      <div class="demo-alignment my-5">
        <vs-radio v-model="colorx" vs-value="primary">Primary</vs-radio>
        <vs-radio v-model="colorx" color="danger" vs-value="danger">Danger</vs-radio>
        <vs-radio v-model="colorx" color="success" vs-value="success">Success</vs-radio>
        <vs-radio v-model="colorx" color="warning" vs-value="warning">Warning</vs-radio>
        <vs-radio v-model="colorx" color="dark" vs-value="dark">Dark</vs-radio>
        <input class="input-color" v-model="colorx" type="color">
      </div>
            <vs-navbar
                v-model="indexActive"
                :color="colorx"
                text-color="rgba(255,255,255,.6)"
                active-text-color="rgba(255,255,255,1)"
                class="myNavbar text-white">

                <div slot="title">
                    <vs-navbar-title>
                        Navbar Color
                    </vs-navbar-title>
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

                <vs-spacer></vs-spacer>

                <vs-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" type="flat" icon="more_horiz"></vs-button>
            </vs-navbar>
        </div>

        <template slot="codeContainer">
&lt;template&gt;

  &lt;input class=&quot;input-color&quot; v-model=&quot;colorx&quot; type=&quot;color&quot;&gt;
  &lt;vs-navbar v-model=&quot;indexActive&quot; :color=&quot;colorx&quot; text-color=&quot;rgba(255,255,255,.6)&quot; active-text-color=&quot;rgba(255,255,255,1)&quot; class=&quot;myNavbar text-white&quot;&gt;
    &lt;div slot=&quot;title&quot;&gt;
      &lt;vs-navbar-title&gt;
        Navbar Color
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

    &lt;vs-spacer&gt;&lt;/vs-spacer&gt;

    &lt;vs-button color-text=&quot;rgb(255, 255, 255)&quot; color=&quot;rgba(255, 255, 255, 0.3)&quot; type=&quot;flat&quot; icon=&quot;more_horiz&quot;&gt;&lt;/vs-button&gt;
  &lt;/vs-navbar&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: ()=&gt;({
    colorx:'#7367F0',
    indexActive: 0
  })
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        colorx: '#7367F0',
        indexActive: 0
    })
}
</script>
