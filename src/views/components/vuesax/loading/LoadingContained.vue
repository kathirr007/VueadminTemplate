<!-- =========================================================================================
	File Name: LoadingContained.vue
	Description: Create loading animation inside container
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Contained" code-toggler>

		<p>To add a loading within a container, call the <code>$vs.loading()</code> global function passing the <code>container</code> and the <code>scale</code> parameters. When you want to remove it we have <code>$vs.loading.close()</code>, passing the same <code>container</code> parameter</p>

		<vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
			<p>For the examples, the request or the delay is simulated with <code>setTimeout</code></p>
		</vs-alert>

		<div class="demo-alignment mt-3">

			<vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="openLoadingContained" type="relief" vslor="primary">
				Button with Loading
			</vs-button>
			<vs-button @click="openLoadingInDiv" type="relief" vslor="primary">Div with Loading</vs-button>

			<div class="contained-example-container">
				<div id="div-with-loading" class="vs-con-loading__container">Load Me!</div>
			</div>
		</div>

		<template slot="codeContainer">
&lt;template&gt;
  &lt;vs-button ref=&quot;loadableButton&quot; id=&quot;button-with-loading&quot; class=&quot;vs-con-loading__container&quot; @click=&quot;openLoadingContained&quot; type=&quot;relief&quot; vslor=&quot;primary&quot;&gt;
    Button with Loading
  &lt;/vs-button&gt;
  &lt;vs-button @click=&quot;openLoadingInDiv&quot; type=&quot;relief&quot; vslor=&quot;primary&quot;&gt;Div with Loading&lt;/vs-button&gt;

  &lt;div class=&quot;contained-example-container&quot;&gt;
    &lt;div id=&quot;div-with-loading&quot; class=&quot;vs-con-loading__container&quot;&gt;Load Me!&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      backgroundLoading:'primary',
      colorLoading:'#fff',
    }
  },
  methods:{
    openLoadingContained(){
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: &quot;#button-with-loading&quot;,
        scale: 0.45
      })
      setTimeout( ()=&gt; {
        this.$vs.loading.close(&quot;#button-with-loading &gt; .con-vs-loading&quot;)
      }, 3000);
    },
    openLoadingInDiv(){
      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout( ()=&gt; {
        this.$vs.loading.close('#div-with-loading &gt; .con-vs-loading')
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
  data(){
    return {
      backgroundLoading:'primary',
      colorLoading:'#fff',
    }
  },
  methods:{
    openLoadingContained(){
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-with-loading",
        scale: 0.45
      })
      setTimeout( ()=> {
        this.$vs.loading.close("#button-with-loading > .con-vs-loading")
      }, 3000);
    },
    openLoadingInDiv(){
      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout( ()=> {
        this.$vs.loading.close('#div-with-loading > .con-vs-loading')
      }, 3000);
    },
  }
}
</script>
