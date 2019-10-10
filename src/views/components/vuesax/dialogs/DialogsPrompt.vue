<!-- =========================================================================================
	File Name: DialogsPrompt.vue
	Description: Add dialog of type prompt
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Prompt" code-toggler>

		<p>To add a dialog of type prompt we have a global function a completely independent component <code>vs-prompt</code>. This allows more flexibility with the input and ability to add any type of input and components</p>

		<div class="my-3">
			<span>The properties of the component are equivalent to those of the global function only with the vs before each property something like</span>
			<vx-list :list='["function: color", "component = vsColor"]'></vx-list>
		</div>

		<div class="demo-alignment">
			<vs-button @click="activePrompt = true" color="primary" type="border">Run prompt</vs-button>
			<vs-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vs-button>
			<div class="op-block">Security Code: {{ val == null ? 'null' : val }}</div>
			<div class="op-block">
				Name: {{valMultipe.value1}} |
				Last Name: {{valMultipe.value2}}
			</div>

		</div>

		<vs-prompt
			@vs-cancel="val=''"
			@vs-accept="acceptAlert"
			@vs-close="close"
			:vs-active.sync="activePrompt">
			<div class="con-exemple-prompt">
				<span>Enter the security code</span>
			<vs-input placeholder="Code" vs-placeholder="Code" v-model="val" class="mt-3 w-full" />
			</div>
		</vs-prompt>

		<vs-prompt
			@vs-cancel="clearValMultiple"
			@vs-accept="acceptAlert"
			@vs-close="close"
			:vs-is-valid="validName"
			:vs-active.sync="activePrompt2">
			<div class="con-exemple-prompt">
				Enter your first and last name to <b>continue</b>.
			<vs-input placeholder="Name" v-model="valMultipe.value1" class="mt-4 mb-2 w-full" />
			<vs-input placeholder="Last Name" v-model="valMultipe.value2" class="w-full" />

			<vs-alert :active="!validName" color="danger" vs-icon="new_releases" class="mt-4" >
				Fields can not be empty please enter the data
			</vs-alert>
			</div>
		</vs-prompt>

		<template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;demo-alignment&quot;&gt;
      &lt;vs-button @click=&quot;activePrompt = true&quot; color=&quot;primary&quot; type=&quot;border&quot;&gt;Run prompt&lt;/vs-button&gt;
      &lt;vs-button @click=&quot;activePrompt2 = true&quot; color=&quot;primary&quot; type=&quot;border&quot;&gt;Run prompt inputs&lt;/vs-button&gt;
      &lt;div class=&quot;op-block&quot;&gt;Security Code: {{ "\{\{ val == null ? 'null' : val \}\}" }} &lt;/div&gt;
      &lt;div class=&quot;op-block&quot;&gt;
        Name: {{ "\{\{ valMultipe.value1 \}\}" }} | Last Name: {{ "\{\{ valMultipe.value2 \}\}" }}
      &lt;/div&gt;

    &lt;/div&gt;

    &lt;vs-prompt
      @vs-cancel=&quot;val=''&quot;
      @vs-accept=&quot;acceptAlert&quot;
      @vs-close=&quot;close&quot;
      :vs-active.sync=&quot;activePrompt&quot;&gt;
      &lt;div class=&quot;con-exemple-prompt&quot;&gt;
        &lt;span&gt;Enter the security code&lt;/span&gt;
      &lt;vs-input placeholder=&quot;Code&quot; vs-placeholder=&quot;Code&quot; v-model=&quot;val&quot; class=&quot;mt-3 w-full&quot; /&gt;
      &lt;/div&gt;
    &lt;/vs-prompt&gt;

    &lt;vs-prompt
      @vs-cancel=&quot;clearValMultiple&quot;
      @vs-accept=&quot;acceptAlert&quot;
      @vs-close=&quot;close&quot;
      :vs-is-valid=&quot;validName&quot;
      :vs-active.sync=&quot;activePrompt2&quot;&gt;
      &lt;div class=&quot;con-exemple-prompt&quot;&gt;
        Enter your first and last name to &lt;b&gt;continue&lt;/b&gt;.
      &lt;vs-input placeholder=&quot;Name&quot; v-model=&quot;valMultipe.value1&quot; class=&quot;mt-4 mb-2 w-full&quot; /&gt;
      &lt;vs-input placeholder=&quot;Last Name&quot; v-model=&quot;valMultipe.value2&quot; class=&quot;w-full&quot; /&gt;

      &lt;vs-alert :vs-active=&quot;!validName&quot; color=&quot;danger&quot; vs-icon=&quot;new_releases&quot; &gt;
        Fields can not be empty please enter the data
      &lt;/vs-alert&gt;
      &lt;/div&gt;
    &lt;/vs-prompt&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length &gt; 0 &amp;&amp; this.valMultipe.value2.length &gt; 0)
    }
  },
  methods:{
    acceptAlert(){
      this.clearValMultiple();
      this.$vs.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
    clearValMultiple() {
      this.valMultipe.value1 = &quot;&quot;;
      this.valMultipe.value2 = &quot;&quot;;
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
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      },
    }
  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
  methods:{
    acceptAlert(){
      this.clearValMultiple();
      this.$vs.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
    clearValMultiple() {
      this.valMultipe.value1 = "";
      this.valMultipe.value2 = "";
    }
  }
}
</script>
