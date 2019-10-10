<!-- =========================================================================================
	File Name: SidebarGroupCollapsed.vue
	Description: give sidebaritems group using vs-sidebar-group
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Group Collapsed" code-toggler>
		
		<p>You can have groups of sub menus with the component <code>vs-sidebar-group</code> that as a required parameter we have the <code>title</code>, you can add as many groups as you need, including internally from the same component</p>

		<vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
			<p>By default the component is closed but if you need to initialize open you can use the property <code>open</code></p>
		</vs-alert>
		
		<div class="mt-5">

			<div id="parentx-demo-4">
				<vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>
				<vs-sidebar parent="body" default-index="1" color="primary" class="sidebarx sidebarpage" spacer v-model="active">

					<div class="header-sidebar" slot="header">
						<vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />
						<h4>
							My Name
							<vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
						</h4>
					</div>

					<vs-sidebar-group title="Aplication">
						<vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>

						<vs-sidebar-group title="Store">
							<vs-sidebar-item index="2.1" icon="store"> Store </vs-sidebar-item>
							<vs-sidebar-item index="2.2" icon="nature_people"> Nature </vs-sidebar-item>
							<vs-sidebar-item index="2.3" icon="style"> Style </vs-sidebar-item>
						</vs-sidebar-group>

						<vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>
						<vs-sidebar-item index="3" icon="https"> Security </vs-sidebar-item>
						<vs-sidebar-item index="4" icon="help"> Help </vs-sidebar-item>
					</vs-sidebar-group>

					<vs-divider icon="person" position="left"> User </vs-divider>

					<vs-sidebar-item index="5" icon="verified_user"> Configurations </vs-sidebar-item>
					<vs-sidebar-item index="6" icon="account_box"> Profile </vs-sidebar-item>

					<div class="footer-sidebar" slot="footer">
						<vs-button icon="reply" color="danger" type="flat">log out</vs-button>
						<vs-button icon="settings" color="primary" type="border"></vs-button>
					</div>
				</vs-sidebar>
			</div>
		</div>

		<template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;

  &lt;div id=&quot;parentx-demo-4&quot;&gt;

    &lt;vs-button @click=&quot;active=!active&quot; color=&quot;primary&quot; type=&quot;filled&quot;&gt;Open Sidebar&lt;/vs-button&gt;
    &lt;vs-sidebar parent=&quot;body&quot; default-index=&quot;1&quot;  color=&quot;primary&quot; class=&quot;sidebarx&quot; spacer v-model=&quot;active&quot;&gt;

      &lt;div class=&quot;header-sidebar&quot; slot=&quot;header&quot;&gt;
        &lt;vs-avatar  size=&quot;70px&quot; src=&quot;https://randomuser.me/api/portraits/men/85.jpg&quot;/&gt;
        &lt;h4&gt;
          My Name
          &lt;vs-button color=&quot;primary&quot; icon=&quot;more_horiz&quot; type=&quot;flat&quot;&gt;&lt;/vs-button&gt;
        &lt;/h4&gt;

      &lt;/div&gt;
      &lt;vs-sidebar-group title=&quot;Aplication&quot;&gt;
        &lt;vs-sidebar-item index=&quot;1&quot; icon=&quot;question_answer&quot;&gt; Dashboard &lt;/vs-sidebar-item&gt;

        &lt;vs-sidebar-group title=&quot;Store&quot;&gt;
          &lt;vs-sidebar-item index=&quot;2.1&quot; icon=&quot;store&quot;&gt; Store &lt;/vs-sidebar-item&gt;
          &lt;vs-sidebar-item index=&quot;2.2&quot; icon=&quot;nature_people&quot;&gt; Nature &lt;/vs-sidebar-item&gt;
          &lt;vs-sidebar-item index=&quot;2.3&quot; icon=&quot;style&quot;&gt; Style &lt;/vs-sidebar-item&gt;
        &lt;/vs-sidebar-group&gt;

        &lt;vs-sidebar-item index=&quot;2&quot; icon=&quot;gavel&quot;&gt; History &lt;/vs-sidebar-item&gt;
        &lt;vs-sidebar-item index=&quot;3&quot; icon=&quot;https&quot;&gt; Security &lt;/vs-sidebar-item&gt;
        &lt;vs-sidebar-item index=&quot;4&quot; icon=&quot;help&quot;&gt; Help &lt;/vs-sidebar-item&gt;
      &lt;/vs-sidebar-group&gt;


      &lt;vs-divider icon=&quot;person&quot; position=&quot;left&quot;&gt; User &lt;/vs-divider&gt;

      &lt;vs-sidebar-item index=&quot;5&quot; icon=&quot;verified_user&quot;&gt; Configurations &lt;/vs-sidebar-item&gt;
      &lt;vs-sidebar-item index=&quot;6&quot; icon=&quot;account_box&quot;&gt; Profile &lt;/vs-sidebar-item&gt;

      &lt;div class=&quot;footer-sidebar&quot; slot=&quot;footer&quot;&gt;
        &lt;vs-button icon=&quot;reply&quot; color=&quot;danger&quot; type=&quot;flat&quot;&gt;log out&lt;/vs-button&gt;
        &lt;vs-button icon=&quot;settings&quot; color=&quot;primary&quot; type=&quot;border&quot;&gt;&lt;/vs-button&gt;
      &lt;/div&gt;

    &lt;/vs-sidebar&gt;
  &lt;/div&gt;

&lt;/template&gt;

&lt;script&gt;
export default {
  data:()=&gt;({
    active:false,
  })
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    &gt; button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &gt; button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
&lt;/style&gt;
		</template>

	</vx-card>
</template>

<script>
export default {
	data: () => ({
		active: false,
	})
}
</script>