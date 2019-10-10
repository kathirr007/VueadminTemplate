<!-- =========================================================================================
  File Name: NotificationsIcon.vue
  Description: Add Icons to notifications
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Icon" code-toggler>
    
    <p>Notifications can include icons to improve the user experience and to construct a more pleasant and intuitive notification. To make this, use the <code>icon</code> property. A practical example would be: <code>icon: 'chat'</code></p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>.</p>
      <p>FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.</p>
    </vs-alert>

    <div class="demo-alignment">
      
      <vs-button color="primary" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'primary',
          iconPack: 'feather',
          icon:'icon-mail'})">Icon Mail</vs-button>

      <vs-button color="success" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'success',
          iconPack: 'feather',
          icon:'icon-check'})">Icon check_box</vs-button>

      <vs-button color="danger" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'danger',
          iconPack: 'feather',
          icon:'icon-heart'})">Icon favorite</vs-button>

      <vs-button color="warning" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'warning',
          iconPack: 'feather',
          icon:'icon-alert-circle'})">Icon error</vs-button>

      <vs-button color="dark" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'dark',
          iconPack: 'feather',
          icon:'icon-message-square'})">Icon chat</vs-button>

      <vs-button @click="randomIcon()" color="success" type="gradient">Icon Random Color</vs-button>
    </div>

    <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-button color=&quot;primary&quot; type=&quot;flat&quot;
      @click=&quot;$vs.notify({
        title:&apos;Icon mail&apos;,
        text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
        color:&apos;primary&apos;,
        iconPack: &apos;feather&apos;,
        icon:&apos;icon-mail&apos;})&quot;&gt;Icon Mail&lt;/vs-button&gt;

    &lt;vs-button color=&quot;success&quot; type=&quot;flat&quot;
      @click=&quot;$vs.notify({
        title:&apos;Icon mail&apos;,
        text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
        color:&apos;success&apos;,
        iconPack: &apos;feather&apos;,
        icon:&apos;icon-check&apos;})&quot;&gt;Icon check_box&lt;/vs-button&gt;

    &lt;vs-button color=&quot;danger&quot; type=&quot;flat&quot;
      @click=&quot;$vs.notify({
        title:&apos;Icon mail&apos;,
        text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
        color:&apos;danger&apos;,
        iconPack: &apos;feather&apos;,
        icon:&apos;icon-heart&apos;})&quot;&gt;Icon favorite&lt;/vs-button&gt;

    &lt;vs-button color=&quot;warning&quot; type=&quot;flat&quot;
      @click=&quot;$vs.notify({
        title:&apos;Icon mail&apos;,
        text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
        color:&apos;warning&apos;,
        iconPack: &apos;feather&apos;,
        icon:&apos;icon-alert-circle&apos;})&quot;&gt;Icon error&lt;/vs-button&gt;

    &lt;vs-button color=&quot;dark&quot; type=&quot;flat&quot;
      @click=&quot;$vs.notify({
        title:&apos;Icon mail&apos;,
        text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
        color:&apos;dark&apos;,
        iconPack: &apos;feather&apos;,
        icon:&apos;icon-message-square&apos;})&quot;&gt;Icon chat&lt;/vs-button&gt;

      &lt;vs-button @click=&quot;randomIcon()&quot; color=&quot;success&quot; type=&quot;gradient&quot;&gt;Icon Random Color&lt;/vs-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    randomIcon() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = &grave;rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})&grave;

      this.$vs.notify({ title: &amp;apos;Icon mail&amp;apos;, text: &amp;apos;Lorem ipsum dolor sit amet, consectetur&amp;apos;, color: color, icon: &amp;apos;verified_user&amp;apos; })
    }
  }
}
&lt;/script&gt;
    </template>

  </vx-card>
</template>

<script>
export default {
  methods: {
    randomIcon() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

      this.$vs.notify({ title: 'Icon Award', text: 'Lorem ipsum dolor sit amet, consectetur', color: color, icon: 'icon-award', iconPack: 'feather' })
    }
  }
}
</script>