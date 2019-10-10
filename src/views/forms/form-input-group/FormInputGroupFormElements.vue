<template>
  <vx-card title="Form Elements" code-toggler>

    <div class="mb-base">
      <p>You can also add form elements to prepend/append slot. Using <strong>tailwind css</strong>, you can tune appearance as you like.</p>
    </div>

    <!-- CHECKBOX -->
    <vx-input-group class="mb-base form-element-demo" prependClasses="border border-solid form-element-border border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-checkbox v-model="checkbox1"></vs-checkbox>
        </div>
      </template>

      <vs-input v-model="input1" />
    </vx-input-group>
    <!-- /CHECKBOX -->

    <!-- RADIO -->
    <vx-input-group class="mb-base form-element-demo" prependClasses="border border-solid form-element-border border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-radio v-model="radios1" vs-value="radio1"></vs-radio>
        </div>
      </template>

      <vs-input v-model="input2" />
    </vx-input-group>
    <!-- /RADIO -->

    <!-- SWITCH -->
    <vx-input-group class="mb-base form-element-demo" prependClasses="border border-solid form-element-border border-r-0">
      <template slot="prepend">
        <div class="prepend-text">
          <vs-switch v-model="switch1" />
        </div>
      </template>

      <vs-input v-model="input3" />
    </vx-input-group>
    <!-- /SWITCH -->

    <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- CHECKBOX --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot; prependClasses=&quot;border border-solid border-grey border-r-0&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text&quot;&gt;
        &lt;vs-checkbox v-model=&quot;checkbox1&quot;&gt;&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;input1&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /CHECKBOX --&gt;

  &lt;!-- RADIO --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot; prependClasses=&quot;border border-solid border-grey border-r-0&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text&quot;&gt;
        &lt;vs-radio v-model=&quot;radios1&quot; vs-value=&quot;radio1&quot;&gt;&lt;/vs-radio&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;input2&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /RADIO --&gt;

  &lt;!-- SWITCH --&gt;
  &lt;vx-input-group class=&quot;mb-base&quot; prependClasses=&quot;border border-solid border-grey border-r-0&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;
      &lt;div class=&quot;prepend-text&quot;&gt;
        &lt;vs-switch v-model=&quot;switch1&quot; /&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;vs-input v-model=&quot;input3&quot; /&gt;
  &lt;/vx-input-group&gt;
  &lt;!-- /SWITCH --&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      checkbox1: false,
      radios1: null,
      switch1: false,
      input1: &apos;&apos;,
      input2: &apos;&apos;,
      input3: &apos;&apos;
    }
  }
}
&lt;/script&gt;

&#x3C;style lang=&#x22;scss&#x22;&#x3E;
.vx-input-group {
  .vx-input-group-prepend.form-element-border {
    border-color: rgba(0,0,0,0.25);
  }

}

.theme-dark {
  .vx-input-group {
    .vx-input-group-prepend.form-element-border {
      border-color: rgba(255,255,255,0.25);
    }

    .vs-inputx {
      border-color: rgba(255,255,255,0.25) !important;
    }
  }
}
&#x3C;/style&#x3E;
    </template>

  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      radios1: null,
      switch1: false,
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>

<style lang="scss">
.vx-input-group.form-element-demo {
  .vx-input-group-prepend.form-element-border {
    border-color: rgba(0,0,0,0.25);
  }

}

.theme-dark {
  .vx-input-group.form-element-demo {
    .vx-input-group-prepend.form-element-border {
      border-color: rgba(255,255,255,0.25);
    }

    .vs-inputx {
      border-color: rgba(255,255,255,0.25) !important;
    }
  }
}
</style>
