<!-- =========================================================================================
    File Name: NotificationsTime.vue
    Description: Chnage the duration of notifications
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Time" code-toggler>
        
        <p>You can change the total time that the notification stays on the screen with the <code>time</code> property. Example: <code>time: 4000</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>By default the notifications have a time of <strong>2000</strong> (2s)</p>
        </vs-alert>

        <div class="demo-alignment">
            <vs-button @click="$vs.notify({
                title:'Time default',
                text:'Lorem ipsum dolor sit amet consectetur',
                color:'primary',
                iconPack: 'feather',
                icon: 'icon-clock'
                })" color="primary" type="flat">Time default</vs-button>

            <vs-button @click="$vs.notify({
                time:4000,
                title:'Time 4s (4000)',
                text:'Lorem ipsum dolor sit amet consectetur',
                color:'primary',
                iconPack: 'feather',
                icon: 'icon-clock'
                })" color="primary" type="flat">Time 4s (4000)</vs-button>

            <vs-button @click="$vs.notify({
                time:8000,
                title:'Time 8s (8000)',
                text:'Lorem ipsum dolor sit amet consectetur',
                color:'primary',
                iconPack: 'feather',
                icon: 'icon-clock'
                })" color="primary" type="flat">Time 8s (8000)</vs-button>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-button @click=&quot;$vs.notify({
        title:&apos;Time default&apos;,
        text:&apos;Lorem ipsum dolor sit amet consectetur&apos;,
        color:&apos;primary&apos;,
        iconPack: &apos;feather&apos;,
        icon: &apos;icon-clock&apos;
        })&quot; color=&quot;primary&quot; type=&quot;flat&quot;&gt;Time default&lt;/vs-button&gt;

    &lt;vs-button @click=&quot;$vs.notify({
        time:4000,
        title:&apos;Time 4s (4000)&apos;,
        text:&apos;Lorem ipsum dolor sit amet consectetur&apos;,
        color:&apos;primary&apos;,
        iconPack: &apos;feather&apos;,
        icon: &apos;icon-clock&apos;
        })&quot; color=&quot;primary&quot; type=&quot;flat&quot;&gt;Time 4s (4000)&lt;/vs-button&gt;
        
    &lt;vs-button @click=&quot;$vs.notify({
        time:8000,
        title:&apos;Time 8s (8000)&apos;,
        text:&apos;Lorem ipsum dolor sit amet consectetur&apos;,
        color:&apos;primary&apos;,
        iconPack: &apos;feather&apos;,
        icon: 'icon-clock'
        })&quot; color=&quot;primary&quot; type=&quot;flat&quot;&gt;Time 8s (8000)&lt;/vs-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>

    </vx-card>
</template>