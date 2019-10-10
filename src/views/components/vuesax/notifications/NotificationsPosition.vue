<!-- =========================================================================================
    File Name: NotificationsPosition.vue
    Description: Change position of apperance of notification
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Position" code-toggler>
        
        <p>We can change the place where the notification appears with the property position. A practical example would be: position: 'top-right'. The supported values are</p>

        <vx-list :list="listPosition" class="mt-3"></vx-list>

        <vs-alert icon="warning" active="true" color="warning" class="mb-1">
            <span>The default notifications appear <code>bottom-right</code>, it is not necessary to add the position property if it is the desired position</span>
        </vs-alert>

        <div class="demo-alignment">
            <vs-button
                @click="$vs.notify({
                    title:'Position Default',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'primary'})"
                color="primary"
                type="flat">Position Default</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position top-right',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'success',
                    position:'top-right'})"
                color="success"
                type="flat">Position Top Right</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position top-left',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'danger',
                    position:'top-left'})"
                color="danger"
                type="flat">Position Top Left</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position bottom-left',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'warning',
                    position:'bottom-left'})"
                color="warning"
                type="flat">Position Bottom Left</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position bottom-center',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'dark',
                    position:'bottom-center'})"
                color="dark"
                type="flat"> Position Bottom Center</vs-button>

            <vs-button @click="randomCenter()" color="success" type="gradient">Position Top Center Random Color</vs-button>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

      &lt;vs-button color=&quot;primary&quot; type=&quot;flat&quot;
        @click=&quot;$vs.notify({
          title:&apos;Position Default&apos;,
          text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
          color:&apos;primary&apos;})&quot;&gt;Position Default&lt;/vs-button&gt;

      &lt;vs-button color=&quot;success&quot; type=&quot;flat&quot;
        @click=&quot;$vs.notify({
          title:&apos;Position top-right&apos;,
          text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
          color:&apos;success&apos;,
          position:&apos;top-right&apos;})&quot;&gt;Position Top Right&lt;/vs-button&gt;

      &lt;vs-button color=&quot;danger&quot; type=&quot;flat&quot;
        @click=&quot;$vs.notify({
          title:&apos;Position top-left&apos;,
          text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
          color:&apos;danger&apos;,
          position:&apos;top-left&apos;})&quot;&gt;Position Top Left&lt;/vs-button&gt;

      &lt;vs-button color=&quot;warning&quot; type=&quot;flat&quot;
        @click=&quot;$vs.notify({
          title:&apos;Position bottom-left&apos;,
          text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
          color:&apos;warning&apos;,
          position:&apos;bottom-left&apos;})&quot;&gt;Position Bottom Left&lt;/vs-button&gt;

      &lt;vs-button color=&quot;dark&quot; type=&quot;flat&quot;
        @click=&quot;$vs.notify({
          title:&apos;Position bottom-center&apos;,
          text:&apos;Lorem ipsum dolor sit amet, consectetur&apos;,
          color:&apos;dark&apos;,
          position:&apos;bottom-center&apos;})&quot;&gt; Position Bottom Center&lt;/vs-button&gt;

      &lt;vs-button @click=&quot;randomCenter()&quot; color=&quot;success&quot; type=&quot;gradient&quot;&gt;Position Top Center Random Color&lt;/vs-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    randomCenter() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = &grave;rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})&grave;
      this.$vs.notify({ title: &apos;Position top-center&apos;, text: &apos;Lorem ipsum dolor sit amet, consectetur&apos;, color: color, position: &apos;top-center&apos; })
    }
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            listPosition: [
            "top-right",
            "top-left",
            "top-center",
            "bottom-right",
            "bottom-left",
            ]
        }
    },
    methods: {
        randomCenter() {
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
            this.$vs.notify({ title: 'Position top-center', text: 'Lorem ipsum dolor sit amet, consectetur', color: color, position: 'top-center' })
        }
    }
}
</script>