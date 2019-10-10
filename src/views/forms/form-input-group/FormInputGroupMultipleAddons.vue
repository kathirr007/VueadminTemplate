<template>
  <vx-card title="Multiple Addons" code-toggler>

    <div class="mb-base">
      <p><code>vx-input-group</code> component provides various options to create desired form input group.</p>
    </div>

    <!-- ADDONS PREPEND -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>$</span>
        </div>
        <div class="prepend-text bg-primary">
          <span>0.00</span>
        </div>
      </template>

      <vs-input v-model="title1" />
    </vx-input-group>
    <!-- /ADDONS PREPEND -->

    <!-- ADDONS APPEND -->
    <vx-input-group class="mb-base">
      <template slot="append">
        <div class="append-text bg-primary">
          <span>$</span>
        </div>
        <div class="append-text bg-primary">
          <span>0.00</span>
        </div>
      </template>

      <vs-input v-model="title2" />
    </vx-input-group>
    <!-- /ADDONS APPEND -->

    <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- ADDONS PREPEND --&gt;
    &lt;vx-input-group class=&quot;mb-base&quot;&gt;
      &lt;template slot=&quot;prepend&quot;&gt;
        &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
          &lt;span&gt;$&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
          &lt;span&gt;0.00&lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;vs-input v-model=&quot;title1&quot; /&gt;
    &lt;/vx-input-group&gt;
    &lt;!-- /ADDONS PREPEND --&gt;

    &lt;!-- ADDONS APPEND --&gt;
    &lt;vx-input-group class=&quot;mb-base&quot;&gt;
      &lt;template slot=&quot;append&quot;&gt;
        &lt;div class=&quot;append-text bg-primary&quot;&gt;
          &lt;span&gt;$&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;append-text bg-primary&quot;&gt;
          &lt;span&gt;0.00&lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;vs-input v-model=&quot;title2&quot; /&gt;
    &lt;/vx-input-group&gt;
    &lt;!-- /ADDONS APPEND --&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      title1: &apos;&apos;,
      title2: &apos;&apos;,
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
      title1: '',
      title2: '',
    }
  }
}
</script>
