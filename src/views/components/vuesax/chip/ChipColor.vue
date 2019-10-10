<!-- =========================================================================================
    File Name: ChipColor.vue
    Description: Change background color of chips using color prop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>
        
        <p>Change the background color of the chip</p>

        <vs-alert icon="warning" active="true" color="warning" class="my-3">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment">

            <vs-chip color="primary">
                Basic Chip
            </vs-chip>
            <vs-chip color="success">
                <vs-avatar text="LD" />
                Avatar Text
            </vs-chip>
            <vs-chip color="danger">
                <vs-avatar />
                Avatar Icon
            </vs-chip>
            <vs-chip color="warning">
                <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />
                Avatar Image
            </vs-chip>
            <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable color="dark">
                Closable chip
            </vs-chip>
            <vs-chip @click="isDeleted2=true" v-if="!isDeleted2" closable color="#24c1a0" close-icon="close">
                <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" />
                Closable chip
            </vs-chip>

        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-chip color=&quot;primary&quot;&gt;Basic Chip&lt;/vs-chip&gt;

    &lt;vs-chip color=&quot;success&quot;&gt;
      &lt;vs-avatar text=&quot;LD&quot; /&gt;
      Avatar Text
    &lt;/vs-chip&gt;

    &lt;vs-chip color=&quot;danger&quot;&gt;
      &lt;vs-avatar /&gt;
      Avatar Icon
    &lt;/vs-chip&gt;

    &lt;vs-chip color=&quot;warning&quot;&gt;
      &lt;vs-avatar src=&quot;https://randomuser.me/api/portraits/men/4.jpg&quot; /&gt;
      Avatar Image
    &lt;/vs-chip&gt;

    &lt;vs-chip @click=&quot;isDeleted=true&quot; v-if=&quot;!isDeleted&quot; closable color=&quot;dark&quot;&gt;
      Closable chip
    &lt;/vs-chip&gt;

    &lt;vs-chip @click=&quot;isDeleted2=true&quot; v-if=&quot;!isDeleted2&quot; closable color=&quot;#24c1a0&quot; close-icon=&quot;close&quot;&gt;
      &lt;vs-avatar src=&quot;https://randomuser.me/api/portraits/men/16.jpg&quot; /&gt;
      Closable chip
    &lt;/vs-chip&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isDeleted: false,
      isDeleted2: false,
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
            isDeleted: false,
            isDeleted2: false,
        }
    }
}
</script>