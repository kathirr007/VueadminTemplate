<!-- =========================================================================================
    File Name: CheckboxChangeIcon.vue
    Description: Change icon displayed in checkbox
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Change Icon" code-toggler>

        <span>Sometimes we want to change the internal icon inside the checkbox. To do so, we have the property <code>icon</code></span>

        <ul class="demo-alignment">
            <li>
                <vs-checkbox icon-pack="feather" icon="icon-check" v-model="checkBox1">Primary</vs-checkbox>
            </li>
            <li>
                <vs-checkbox icon-pack="feather" icon="icon-message-square" color="success" v-model="checkBox2">SMS</vs-checkbox>
            </li>
            <li>
                <vs-checkbox icon-pack="feather" icon="icon-x" color="danger" v-model="checkBox3">Cancel</vs-checkbox>
            </li>
            <li>
                <vs-checkbox icon-pack="feather" icon="icon-paperclip" color="warning" v-model="checkBox4">File</vs-checkbox>
            </li>
            <li>
                <vs-checkbox icon-pack="feather" icon="icon-bold" color="dark" v-model="checkBox5">Bold</vs-checkbox>
            </li>
            <li>
                <vs-checkbox icon-pack="feather" icon="icon-map-pin" color="rgb(38, 187, 174)" v-model="checkBox6">Location</vs-checkbox>
            </li>
            <li>
                <vs-checkbox icon-pack="feather" icon="icon-camera" color="#720ea8" v-model="checkBox7">Camera</vs-checkbox>
            </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
    &lt;ul class=&quot;demo-alignment&quot;&gt;
      &lt;li&gt;
        &lt;vs-checkbox icon-pack=&quot;feather&quot; icon=&quot;icon-check&quot; v-model=&quot;checkBox1&quot;&gt;Primary&lt;/vs-checkbox&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-checkbox icon-pack=&quot;feather&quot; icon=&quot;icon-message-square&quot; color=&quot;success&quot; v-model=&quot;checkBox2&quot;&gt;SMS&lt;/vs-checkbox&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-checkbox icon-pack=&quot;feather&quot; icon=&quot;icon-x&quot; color=&quot;danger&quot; v-model=&quot;checkBox3&quot;&gt;Cancel&lt;/vs-checkbox&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-checkbox icon-pack=&quot;feather&quot; icon=&quot;icon-paperclip&quot; color=&quot;warning&quot; v-model=&quot;checkBox4&quot;&gt;File&lt;/vs-checkbox&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-checkbox icon-pack=&quot;feather&quot; icon=&quot;icon-bold&quot; color=&quot;dark&quot; v-model=&quot;checkBox5&quot;&gt;Bold&lt;/vs-checkbox&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-checkbox icon-pack=&quot;feather&quot; icon=&quot;icon-map-pin&quot; color=&quot;rgb(38, 187, 174)&quot; v-model=&quot;checkBox6&quot;&gt;Location&lt;/vs-checkbox&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-checkbox icon-pack=&quot;feather&quot; icon=&quot;icon-camera&quot; color=&quot;#720ea8&quot; v-model=&quot;checkBox7&quot;&gt;Camera&lt;/vs-checkbox&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
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
            checkBox1: true,
            checkBox2: true,
            checkBox3: true,
            checkBox4: true,
            checkBox5: true,
            checkBox6: true,
            checkBox7: true,
        }
    }
}
</script>