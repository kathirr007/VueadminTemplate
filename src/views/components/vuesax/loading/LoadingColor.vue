<!-- =========================================================================================
    File Name: LoadingColor.vue
    Description: Change color of loading animation
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the loading with the property <code>color</code></p>

        <div class="demo-alignment mt-3">
            <input type="color" v-model="colorLoading" name="" value="">
            <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Loading</vs-button>
        </div>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;input type=&quot;color&quot; v-model=&quot;colorLoading&quot; name=&quot;&quot; value=&quot;&quot;&gt;
    &lt;vs-button @click=&quot;openLoadingColor&quot; type=&quot;filled&quot; :color=&quot;colorLoading&quot;&gt;Loading&lt;/vs-button&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      colorLoading: &apos;#ff8000&apos;,
    }
  },
  methods: {
    openLoadingColor() {
      this.$vs.loading({ color: this.colorLoading })
      setTimeout(() =&gt; {
        this.$vs.loading.close()
      }, 2000);
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
            colorLoading: '#ff8000',
        }
    },
    methods: {
        openLoadingColor() {
            this.$vs.loading({ color: this.colorLoading })
            setTimeout(() => {
                this.$vs.loading.close()
            }, 2000);
        },
    }
}
</script>
