<template>
    <div id="access-conttrol-editor">
        <vx-card>

            <p>Your current role is <strong>{{ $acl.get[0] }}</strong>.</p>
            <div class="demo-alignment mb-base">
                <vs-radio v-model="userRole" vs-value="editor">Editor</vs-radio>
                <vs-radio v-model="userRole" vs-value="admin">Admin</vs-radio>
            </div>

			<vx-card title="Buttons" no-shadow card-border code-toggler>
                <vs-button v-show="$acl.check('editor')" class="mr-4 mb-2">Editor And Admin</vs-button>
                <vs-button v-show="$acl.check('admin')">Only Admin</vs-button>
                <template slot="codeContainer">
&lt;vs-button v-show=&quot;$acl.check('editor')&quot; class=&quot;mr-4&quot;&gt;Editor And Admin&lt;/vs-button&gt;
&lt;vs-button v-show=&quot;$acl.check('admin')&quot;&gt;Only Admin&lt;/vs-button&gt;
                </template>
            </vx-card>

            <vx-card title="Collapse" class="mt-base" no-shadow card-border code-toggler>
				<vs-collapse>

					<vs-collapse-item>

						<div slot="header">Article 1</div>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
						<br><br>
						Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
					</vs-collapse-item>

					<vs-collapse-item>

						<div slot="header">Article 2</div>

						Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
						<br><br>
						eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
						<br><br>
						efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
					</vs-collapse-item>

					<vs-collapse-item v-show="$acl.check('admin')">

						<div slot="header">Article 3 - Only Admin</div>

						Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
					</vs-collapse-item>

					<vs-collapse-item>

						<div slot="header">Article 4</div>

						Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
					</vs-collapse-item>
				</vs-collapse>
                <template slot="codeContainer">
&lt;vs-collapse&gt;
    &lt;vs-collapse-item&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 1
        &lt;/div&gt;
        Lorem....metus.
    &lt;/vs-collapse-item&gt;
    &lt;vs-collapse-item&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 2
        &lt;/div&gt;
        Nunc....maximus.
    &lt;/vs-collapse-item&gt;
    &lt;vs-collapse-item v-show=&quot;$acl.check('admin')&quot;&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 3 - Only Admin
        &lt;/div&gt;
        Suspendisse....eu
    &lt;/vs-collapse-item&gt;
    &lt;vs-collapse-item&gt;
        &lt;div slot=&quot;header&quot;&gt;
            Article 4
        &lt;/div&gt;
        Suspendisse....finibus.
    &lt;/vs-collapse-item&gt;
&lt;/vs-collapse&gt;
                </template>
            </vx-card>
        </vx-card>
    </div>
</template>

<script>
export default{
	data() {
		return {
			userRole: this.$acl.get[0]
		}
	},
	watch: {
		userRole(val) {
			this.$acl.change(val)
			this.$store.dispatch('updateUserRole', val)
		}
	}
}
</script>
