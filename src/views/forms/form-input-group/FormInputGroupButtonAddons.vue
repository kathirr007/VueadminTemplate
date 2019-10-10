<template>
  <vx-card title="Button addons" code-toggler>

    <div class="mb-base">
      <span>You can also use button as addons to your input</span>
    </div>

    <!-- Basic -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text btn-addon">
          <vs-button color="primary">Button</vs-button>
        </div>
      </template>

      <vs-input v-model="input1" />
    </vx-input-group>
    <!-- /Basic -->

    <!-- Append Button -->
    <vx-input-group class="mb-base">
      <vs-input v-model="input2" />

      <template slot="append">
        <div class="append-text btn-addon">
          <vs-button color="primary">Button</vs-button>
        </div>
      </template>
    </vx-input-group>
    <!-- /Append Button -->

    <!-- Prepend Two Buttons -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text btn-addon">
          <vs-button color="primary" type="border">Button1</vs-button>
          <vs-button color="primary" type="border">Button2</vs-button>
        </div>
      </template>

      <vs-input v-model="input3" />
    </vx-input-group>
    <!-- /Prepend Two Buttons -->

    <!-- Append Two Buttons -->
    <vx-input-group class="mb-base">
      <vs-input v-model="input4" />

      <template slot="append">
        <div class="append-text btn-addon">
          <vs-button color="primary" type="border">Button1</vs-button>
          <vs-button color="primary" type="border">Button2</vs-button>
        </div>
      </template>
    </vx-input-group>
    <!-- /Append Two Buttons -->

    <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Basic --&gt;
    &lt;vx-input-group class=&quot;mb-base&quot;&gt;
      &lt;template slot=&quot;prepend&quot;&gt;
        &lt;div class=&quot;prepend-text btn-addon&quot;&gt;
          &lt;vs-button color=&quot;primary&quot;&gt;Button&lt;/vs-button&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;vs-input v-model=&quot;input1&quot; /&gt;
    &lt;/vx-input-group&gt;
    &lt;!-- /Basic --&gt;

    &lt;!-- Append Button --&gt;
    &lt;vx-input-group class=&quot;mb-base&quot;&gt;
      &lt;vs-input v-model=&quot;input2&quot; /&gt;

      &lt;template slot=&quot;append&quot;&gt;
        &lt;div class=&quot;append-text btn-addon&quot;&gt;
          &lt;vs-button color=&quot;primary&quot;&gt;Button&lt;/vs-button&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/vx-input-group&gt;
    &lt;!-- /Append Button --&gt;

    &lt;!-- Prepend Two Buttons --&gt;
    &lt;vx-input-group class=&quot;mb-base&quot;&gt;
      &lt;template slot=&quot;prepend&quot;&gt;
        &lt;div class=&quot;prepend-text btn-addon&quot;&gt;
          &lt;vs-button color=&quot;primary&quot; type=&quot;border&quot;&gt;Button1&lt;/vs-button&gt;
          &lt;vs-button color=&quot;primary&quot; type=&quot;border&quot;&gt;Button2&lt;/vs-button&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;vs-input v-model=&quot;input3&quot; /&gt;
    &lt;/vx-input-group&gt;
    &lt;!-- /Prepend Two Buttons --&gt;

    &lt;!-- Append Two Buttons --&gt;
    &lt;vx-input-group class=&quot;mb-base&quot;&gt;
      &lt;vs-input v-model=&quot;input4&quot; /&gt;

      &lt;template slot=&quot;append&quot;&gt;
        &lt;div class=&quot;append-text btn-addon&quot;&gt;
          &lt;vs-button color=&quot;primary&quot; type=&quot;border&quot;&gt;Button1&lt;/vs-button&gt;
          &lt;vs-button color=&quot;primary&quot; type=&quot;border&quot;&gt;Button2&lt;/vs-button&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/vx-input-group&gt;
    &lt;!-- /Append Two Buttons --&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: &apos;&apos;,
      input2: &apos;&apos;,
      input3: &apos;&apos;,
      input4: &apos;&apos;
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
      input3: '',
      input4: ''
    }
  }
}
</script>
