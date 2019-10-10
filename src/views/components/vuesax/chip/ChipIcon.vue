<!-- =========================================================================================
    File Name: ChipIcon.vue
    Description: Add a nice icon to the chip
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>
        
        <p>Add a nice icon to the chip</p>

        <div class="demo-alignment">

            <vs-chip>
                <vs-avatar icon-pack="feather" icon="icon-user" />
                <span>Icon Default</span>
            </vs-chip>
            <vs-chip color="primary">
                <vs-avatar icon-pack="feather" icon="icon-send" />
                <span>Icon send</span>
            </vs-chip>
            <vs-chip color="success">
                <vs-avatar icon-pack="feather" icon="icon-mail" />
                <span>Icon markunread</span>
            </vs-chip>
            <vs-chip color="danger">
                <vs-avatar icon-pack="feather" icon="icon-slash" />
                <span>Icon block</span>
            </vs-chip>
            <vs-chip color="warning">
                <vs-avatar icon-pack="feather" icon="icon-battery" />
                <span>Icon battery_alert</span>
            </vs-chip>
            <vs-chip color="dark">
                <vs-avatar icon-pack="feather" icon="icon-edit" />
                <span>Icon edit</span>
            </vs-chip>

        </div>

        <template slot="codeContainer">
&lt;div class=&quot;demo-alignment&quot;&gt;

  &lt;vs-chip&gt;
    &lt;vs-avatar icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; /&gt;
    &lt;span&gt;Icon Default&lt;/span&gt;
  &lt;/vs-chip&gt;

  &lt;vs-chip color=&quot;primary&quot;&gt;
    &lt;vs-avatar icon-pack=&quot;feather&quot; icon=&quot;icon-send&quot; /&gt;
    &lt;span&gt;Icon send&lt;/span&gt;
  &lt;/vs-chip&gt;

  &lt;vs-chip color=&quot;success&quot;&gt;
    &lt;vs-avatar icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; /&gt;
    &lt;span&gt;Icon markunread&lt;/span&gt;
  &lt;/vs-chip&gt;

  &lt;vs-chip color=&quot;danger&quot;&gt;
    &lt;vs-avatar icon-pack=&quot;feather&quot; icon=&quot;icon-slash&quot; /&gt;
    &lt;span&gt;Icon block&lt;/span&gt;
  &lt;/vs-chip&gt;

  &lt;vs-chip color=&quot;warning&quot;&gt;
    &lt;vs-avatar icon-pack=&quot;feather&quot; icon=&quot;icon-battery&quot; /&gt;
    &lt;span&gt;Icon battery_alert&lt;/span&gt;
  &lt;/vs-chip&gt;
  
  &lt;vs-chip color=&quot;dark&quot;&gt;
    &lt;vs-avatar icon-pack=&quot;feather&quot; icon=&quot;icon-edit&quot; /&gt;
    &lt;span&gt;Icon edit&lt;/span&gt;
  &lt;/vs-chip&gt;
&lt;/div&gt;
        </template>

    </vx-card>
</template>