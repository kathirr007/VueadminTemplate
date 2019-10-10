<!-- =========================================================================================
	File Name: SelectIsSelectedItem.vue
	Description: Display/Validate on selecting option
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Is Selected Item" code-toggler>
		
		<p>You can validate if an option is selected with the property <code>is-selected.sync</code> and do with it multiple variants with changing the text of the selected options</p>

		<div class="demo-alignment">
			<vs-select class="selectExample" v-model="select1">
				<vs-select-item :is-selected.sync="item.isSelected" :key="index" :value="item.value" :text="item.isSelected?item.selectedText:item.label" v-for="(item,index) in options1" />
			</vs-select>
		</div>

		<template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div class=&quot;con-select-example&quot;&gt;

    &lt;vs-select class=&quot;selectExample&quot; v-model=&quot;select1&quot; &gt;
      &lt;vs-select-item
        :is-selected.sync=&quot;item.isSelected&quot;
        :key=&quot;index&quot;
        :value=&quot;item.value&quot;
        :text=&quot;item.isSelected?item.selectedText:item.label&quot;
        v-for=&quot;(item,index) in options1&quot;
        /&gt;
    &lt;/vs-select&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      select1:3,
      options1:[
        {value: 1, label: &apos;label 1&apos;, selectedText: &apos;show after select label 1&apos;, isSelected: false },
        {value: 2, label: &apos;label 2&apos;, selectedText: &apos;show after select label 2&apos;, isSelected: false },
        {value: 3, label: &apos;label 3&apos;, selectedText: &apos;show after select label 3&apos;, isSelected: false },
      ],
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.selectExample {
  margin: 10px;
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-select .vs-select {
  width: 100%
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vs-select {
    width: 100%
  }
}
&lt;/style&gt;
		</template>
	</vx-card>
</template>

<script>
export default {
	data() {
		return {
			select1: 3,
			options1: [
				{ value: 1, label: 'label 1', selectedText: 'show after select label 1', isSelected: false },
				{ value: 2, label: 'label 2', selectedText: 'show after select label 2', isSelected: false },
				{ value: 3, label: 'label 3', selectedText: 'show after select label 3', isSelected: false },
			],
		}
	},
}
</script>