<!-- =========================================================================================
    File Name: ChipDefault.vue
    Description: Rendering of default chip
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>Helps you represent simple data with colorful options</p>

        <div class="demo-alignment">

            <vs-chip>Basic Chip</vs-chip>
            <vs-chip>
                <vs-avatar text="LD" />
                Avatar Text
            </vs-chip>
            <vs-chip>
                <vs-avatar />
                Avatar Icon
            </vs-chip>
            <vs-chip>
                <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />
                Avatar Image
            </vs-chip>
            <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable>
                Closable chip
            </vs-chip>

        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-chip&gt;Basic Chip&lt;/vs-chip&gt;

    &lt;vs-chip&gt;
      &lt;vs-avatar text=&quot;LD&quot;/&gt;
      Avatar Text
    &lt;/vs-chip&gt;

    &lt;vs-chip&gt;
      &lt;vs-avatar /&gt;
      Avatar Icon
    &lt;/vs-chip&gt;

    &lt;vs-chip&gt;
      &lt;vs-avatar src=&quot;https://randomuser.me/api/portraits/men/4.jpg&quot;/&gt;
      Avatar Image
    &lt;/vs-chip&gt;

    &lt;vs-chip @click=&quot;isDeleted=true&quot; v-if=&quot;!isDeleted&quot; closable&gt;
      Closable chip
    &lt;/vs-chip&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isDeleted: false,
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
        }
    }
}
</script>