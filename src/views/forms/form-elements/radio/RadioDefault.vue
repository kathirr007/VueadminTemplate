<!-- =========================================================================================
    File Name: RadioDefault.vue
    Description: Rendering default radio
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>To implement a radio button you just add the <code>vs-radio</code> component and add a <code>v-model</code></p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>The <strong>Radio Button</strong> is always going to replace the current value.</span>
        </vs-alert>

        <ul class="demo-alignment">
            <li>
                <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>
            </li>
            <li>
                <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>
            </li>
            <li>
                <vs-radio v-model="radios1" vs-value="summer">Summer</vs-radio>
            </li>
            <li>
                <vs-radio disabled="true" v-model="radios1" vs-value="lyon">Lyon - disabled</vs-radio>
            </li>
            <li class="op-block">
                {{radios1}}
            </li>
        </ul>

        <template slot="codeContainer">

&lt;ul class=&quot;centerx&quot;&gt;
  &lt;li&gt;
    &lt;vs-radio v-model=&quot;radios1&quot; vs-value=&quot;luis&quot;&gt;Luis&lt;/vs-radio&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;vs-radio v-model=&quot;radios1&quot; vs-value=&quot;carols&quot;&gt;Carols&lt;/vs-radio&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;vs-radio v-model=&quot;radios1&quot; vs-value=&quot;summer&quot;&gt;Summer&lt;/vs-radio&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;vs-radio disabled=&quot;true&quot; v-model=&quot;radios1&quot; vs-value=&quot;lyon&quot;&gt;Lyon - disabled&lt;/vs-radio&gt;
  &lt;/li&gt;
  &lt;li class=&quot;modelx&quot;&gt;
    {{ "\{\{ radios1 \}\}" }}
  &lt;/li&gt;
&lt;/ul&gt;

&lt;script&gt;
export default {
  data(){
    return {
      radios1:&apos;luis&apos;,
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
            radios1: 'luis',
        }
    }
}
</script>