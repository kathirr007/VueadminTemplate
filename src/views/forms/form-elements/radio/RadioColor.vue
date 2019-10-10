<!-- =========================================================================================
    File Name: RadioColor.vue
    Description: Change color of radio
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color with the property <code>color</code>. You are able to use the <router-link to="/colors">Main Colors</router-link> or <strong>RGB</strong> and <strong>HEX</strong> colors.</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <ul class="demo-alignment">
            <li>
                <vs-radio v-model="radios2" vs-value="primary">Primary</vs-radio>
            </li>
            <li>
                <vs-radio color="success" v-model="radios2" vs-value="Success">Success</vs-radio>
            </li>
            <li>
                <vs-radio color="danger" v-model="radios2" vs-value="Danger">Danger</vs-radio>
            </li>
            <li>
                <vs-radio color="warning" v-model="radios2" vs-value="Warning">Warning</vs-radio>
            </li>
            <li>
                <vs-radio color="dark" v-model="radios2" vs-value="Dark">Dark</vs-radio>
            </li>
            <li>
                <vs-radio color="rgb(87, 251, 187)" v-model="radios2" vs-value="RGB">RGB</vs-radio>
            </li>
            <li>
                <vs-radio color="#e48346" v-model="radios2" vs-value="HEX">HEX</vs-radio>
            </li>
            <li class="op-block">
                {{radios2}}
            </li>
        </ul>

        <template slot="codeContainer">

&lt;template&gt;
    &lt;ul class=&quot;centerx&quot;&gt;
      &lt;li&gt;
        &lt;vs-radio v-model=&quot;radios2&quot; vs-value=&quot;primary&quot;&gt;Primary&lt;/vs-radio&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-radio color=&quot;success&quot; v-model=&quot;radios2&quot; vs-value=&quot;Success&quot;&gt;Success&lt;/vs-radio&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-radio color=&quot;danger&quot; v-model=&quot;radios2&quot; vs-value=&quot;Danger&quot;&gt;Danger&lt;/vs-radio&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-radio color=&quot;warning&quot; v-model=&quot;radios2&quot; vs-value=&quot;Warning&quot;&gt;Warning&lt;/vs-radio&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-radio color=&quot;dark&quot; v-model=&quot;radios2&quot; vs-value=&quot;Dark&quot;&gt;Dark&lt;/vs-radio&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-radio color=&quot;rgb(87, 251, 187)&quot; v-model=&quot;radios2&quot; vs-value=&quot;RGB&quot;&gt;RGB&lt;/vs-radio&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;vs-radio color=&quot;#e48346&quot; v-model=&quot;radios2&quot; vs-value=&quot;HEX&quot;&gt;HEX&lt;/vs-radio&gt;
      &lt;/li&gt;
      &lt;li class=&quot;modelx&quot;&gt;
        {{ "\{\{ radios2 \}\}" }}}
      &lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      radios2:&apos;primary&apos;,
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
            radios2: 'primary',
        }
    }
}
</script>