<template>
  <vx-card title="Basic" code-toggler>

    <div class="mb-base">
      <p><code>vx-input-group</code> component provides various options to create desired form input group.</p>
    </div>

    <!-- TITLE -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>@</span>
        </div>
      </template>

      <vs-input v-model="title" placeholder="Email" />
    </vx-input-group>
    <!-- /TITLE -->

    <!-- URL -->
    <vx-input-group class="mb-base">
      <vs-input v-model="username" placeholder="Username" />

      <template slot="append">
        <div class="append-text bg-primary">
          <span>@url.com</span>
        </div>
      </template>
    </vx-input-group>
    <!-- /URL -->

    <!-- USERNAME -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>https://pixinvent.com/users/</span>
        </div>
      </template>

      <vs-input v-model="siteUsername" />
    </vx-input-group>
    <!-- /USERNAME -->

    <!-- currency -->
    <vx-input-group class="mb-base">
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>$</span>
        </div>
      </template>

      <vs-input v-model="amount" />

      <template slot="append">
        <div class="append-text bg-primary">
          <span>.00</span>
        </div>
      </template>
    </vx-input-group>
    <!-- /currency -->

    <!-- Textarea -->
    <vx-input-group>
      <template slot="prepend">
        <div class="prepend-text bg-primary">
          <span>Description</span>
        </div>
      </template>

      <vs-textarea v-model="textarea" />
    </vx-input-group>
    <!-- /Textarea -->

    <template slot="codeContainer">
&lt;tempalte&gt;
  &lt;!-- TITLE --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;@&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;title&quot; placeholder=&quot;Email&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /TITLE --&gt;

  &lt;!-- URL --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;vs-input v-model=&quot;username&quot; placeholder=&quot;Username&quot; /&gt;

    &lt;template slot=&quot;append&quot;&gt;
      &lt;div class=&quot;append-text bg-primary&quot;&gt;
        &lt;span&gt;@url.com&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /URL --&gt;

  &lt;!-- USERNAME --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;https://pixinvent.com/users/&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;siteUsername&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /USERNAME --&gt;

  &lt;!-- currency --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;$&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;amount&quot; /&gt;

    &lt;template slot=&quot;append&quot;&gt;
      &lt;div class=&quot;append-text bg-primary&quot;&gt;
        &lt;span&gt;.00&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /currency --&gt;

  &lt;!-- Textarea --&gt;
  &lt;vx-input-group&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text bg-primary&quot;&gt;
        &lt;span&gt;Description&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-textarea v-model=&quot;textarea&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /Textarea --&gt;
&lt;/tempalte&gt;

&lt;script&gt;
export default {
  data() {
    return {
      title: &apos;&apos;,
      username: &apos;&apos;,
      siteUsername: &apos;&apos;,
      amount: &apos;&apos;,
      textarea: &apos;&apos;,
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
      title: '',
      username: '',
      siteUsername: '',
      amount: '',
      textarea: '',
    }
  }
}
</script>
