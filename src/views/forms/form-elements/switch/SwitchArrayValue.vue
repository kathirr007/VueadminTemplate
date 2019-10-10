<!-- =========================================================================================
    File Name: Switch.vue
    Description: Create array using switch
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Array Value" code-toggler>

        <span>For saving the values in an array, you could simply pass it as a value.</span>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>For using an array as a value, we need to use the <code>vs-value</code> property inside the switch component. That is the value that will be added to the array.</span>
        </vs-alert>

        <ul class="demo-alignment">
            <li>
                <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="luis">
                    <span slot="off">Luis</span>
                </vs-switch>
            </li>
            <li>
                <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="carols">
                    <span slot="off">Carols</span>
                </vs-switch>
            </li>
            <li>
                <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="summer">
                    <span slot="off">Summer</span>
                </vs-switch>
            </li>
            <li>
                <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="lyon">
                    <span slot="off">Lyon</span>
                </vs-switch>
            </li>
        </ul>

        <p class="op-block mt-5">{{ switchArray }}</p>
        
        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;con-s&quot;&gt;
    &lt;li class=&quot;modelx&quot;&gt;
      {{ "\{\{ switchArray \}\}" }}
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch vs-icon-on=&quot;check&quot; color=&quot;success&quot; v-model=&quot;switchArray&quot; vs-value=&quot;luis&quot;&gt;
        &lt;span slot=&quot;off&quot;&gt;Luis&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch vs-icon-on=&quot;check&quot; color=&quot;success&quot; v-model=&quot;switchArray&quot; vs-value=&quot;carols&quot;&gt;
        &lt;span slot=&quot;off&quot;&gt;Carols&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch vs-icon-on=&quot;check&quot; color=&quot;success&quot; v-model=&quot;switchArray&quot; vs-value=&quot;summer&quot;&gt;
        &lt;span slot=&quot;off&quot;&gt;Summer&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;vs-switch vs-icon-on=&quot;check&quot; color=&quot;success&quot; v-model=&quot;switchArray&quot; vs-value=&quot;lyon&quot;&gt;
        &lt;span slot=&quot;off&quot;&gt;Lyon&lt;/span&gt;
      &lt;/vs-switch&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      switchArray:[&apos;luis&apos;],
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
            switchArray: ['luis'],
        }
    }
}
</script>