<template>
  <vx-card title="Sizing" code-toggler>

    <div class="mb-base">
      <span>You can use <code>size</code> prop of <code>vs-input</code> component to change size of input group.</span>
    </div>

    <!-- SMALL -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Small</span>
        </div>
      </template>

      <vs-input v-model="input1" size="small" />
    </vx-input-group>
    <!-- /SMALL -->

    <!-- DEFAULT -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Default</span>
        </div>
      </template>

      <vs-input v-model="input2" />
    </vx-input-group>
    <!-- /DEFAULT -->

    <!-- LARGE -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Large</span>
        </div>
      </template>

      <vs-input v-model="input3" size="large" />
    </vx-input-group>
    <!-- /LARGE -->

    <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- SMALL --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;Small&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;input1&quot; size=&quot;small&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /SMALL --&gt;

  &lt;!-- DEFAULT --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;Default&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;input2&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /DEFAULT --&gt;

  &lt;!-- LARGE --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;Large&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;input3&quot; size=&quot;large&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /LARGE --&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: &apos;&apos;,
      input2: &apos;&apos;,
      input3: &apos;&apos;
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
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>
