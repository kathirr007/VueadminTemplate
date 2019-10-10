<!-- =========================================================================================
	File Name: BreadcrumbAlignment.vue
	Description: Align breadcrumb to left, right or center
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Alignment" code-toggler>

		<p>Use <code>align</code> to either align the breadcrumb to the left, center or right</p>

		<div class="mt-5">

			<vs-breadcrumb :items="items" align="left" class="op-block mb-2"></vs-breadcrumb>
			<vs-breadcrumb :items="items" align="center" class="op-block mb-2"></vs-breadcrumb>
			<vs-breadcrumb :items="items" align="right" class="op-block mb-2"></vs-breadcrumb>

		</div>

		<template slot="codeContainer">
&lt;vs-breadcrumb align=&quot;left&quot;&gt;...&lt;/vs-breadcrumb&gt;
&lt;vs-breadcrumb align=&quot;center&quot;&gt;...&lt;/vs-breadcrumb&gt;
&lt;vs-breadcrumb align=&quot;right&quot;&gt;...&lt;/vs-breadcrumb&gt;
		</template>

	</vx-card>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#3DC9B3',
    items:[
      {
        title: 'Dashboard',
        url: '/'
      },
      {
        title: 'Link 1',
        url: '/blog'
      },
      {
        title: 'Link 2',
        disabled: true
      },
      {
        title: 'Active',
        active: true
      }
    ]
  })
}
</script>
