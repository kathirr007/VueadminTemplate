<!-- =========================================================================================
	File Name: BreadcrumbColor.vue
	Description: Change the color of active link in breadcrumb
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Color" code-toggler>

		<p>Use the <code>color</code> directive like for any other component that supports it to customize the breadcrumbs links color</p>

		<vs-alert icon="warning" active="true" color="warning" class="mt-5">
			<span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
		</vs-alert>

		<div class="demo-alignment">

			<input v-model="colorx" type="color" name="" value="">
			<vs-breadcrumb :color="colorx" :items="items"></vs-breadcrumb>

		</div>

		<template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;
    &lt;input v-model=&quot;colorx&quot; type=&quot;color&quot; name=&quot;&quot; value=&quot;&quot;&gt;
    &lt;vs-breadcrumb
    :color=&quot;colorx&quot;
    :items=&quot;items&quot;
    &gt;&lt;/vs-breadcrumb&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: ()=&gt;({
    colorx:&apos;#3DC9B3&apos;,
    items:[
      {
        title: &apos;Dashboard&apos;,
        url: &apos;/&apos;
      },
      {
        title: &apos;Link 1&apos;,
        url: &apos;/blog&apos;
      },
      {
        title: &apos;Link 2&apos;,
        disabled: true
      },
      {
        title: &apos;Active&apos;,
        active: true
      }
    ]
  })
}
&lt;/script&gt;
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
