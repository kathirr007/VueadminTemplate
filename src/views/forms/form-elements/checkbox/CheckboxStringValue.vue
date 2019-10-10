<!-- =========================================================================================
	File Name: CheckboxStringValue.vue
	Description: Stering as a value
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
      <vx-card title="String Value" code-toggler>

         <span>You can pass as a value a string by giving it as a value of the property <code>vs-value</code></span>

        <ul class="demo-alignment">
          <li>
            <vs-checkbox v-model="checkBox1" vs-value="Luis Daniel" >Luis Daniel</vs-checkbox>
          </li>
          <li class="op-block">
            {{checkBox1==null?'null':checkBox1}}
          </li>
        </ul>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;ul class=&quot;demo-alignment&quot;&gt;
    &lt;li&gt;
      &lt;vs-checkbox v-model=&quot;checkBox1&quot; vs-value=&quot;Luis Daniel&quot;&gt;Luis Daniel&lt;/vs-checkbox&gt;
    &lt;/li&gt;
    &lt;li class=&quot;op-block&quot;&gt;
      {{ &quot;\{\{ checkBox1==null?&amp;apos;null&amp;apos;:checkBox1 \}\}&quot; }}
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      checkBox1: null,
    }
  }
}
&lt;/script&gt;
        </template>
      </vx-card>
</template>

<script>
export default {
  data(){
    return {
      checkBox1:null,
    }
  }
}
</script>