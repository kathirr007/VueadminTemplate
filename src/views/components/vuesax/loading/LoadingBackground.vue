<!-- =========================================================================================
    File Name: LoadingBackground.vue
    Description: Change background color of loading animation
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Background" code-toggler>
        
        <p>If you need to change the background of the loading, you can use the property <code>background</code></p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment mt-3">
            <input type="color" v-model="backgroundLoading" name="" value="">
            <vs-button @click="openLoadingBackground" type="gradient" color="success">Success</vs-button>
        </div>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;input type=&quot;color&quot; v-model=&quot;backgroundLoading&quot; name=&quot;&quot; value=&quot;&quot;&gt;
    &lt;vs-button @click=&quot;openLoadingBackground&quot; type=&quot;gradient&quot; color=&quot;success&quot;&gt;Success&lt;/vs-button&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      backgroundLoading: &apos;#22c16b&apos;,
    }
  },
  methods: {
    openLoadingBackground() {
      this.$vs.loading({ background: this.backgroundLoading, color: &apos;rgb(255, 255, 255)&apos; })
      setTimeout(() =&gt; {
        this.$vs.loading.close()
      }, 3000);
    },
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
            backgroundLoading: '#22c16b',
        }
    },
    methods: {
        openLoadingBackground() {
            this.$vs.loading({ background: this.backgroundLoading, color: 'rgb(255, 255, 255)' })
            setTimeout(() => {
                this.$vs.loading.close()
            }, 3000);
        },
    }
}
</script>