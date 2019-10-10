<!-- =========================================================================================
	File Name: ClipboardDirective.vue
	Description: Clipboard demo
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
	<vx-card title="Using Directive" subtitle="Use directive on button to copy text." code-toggler>
		<vs-input v-model="text" class="inline-flex mb-2 mr-2" />
		<vs-button
			v-clipboard:copy="text"
			v-clipboard:success="onCopy"
			v-clipboard:error="onError">
			Copy!
		</vs-button>
		<template slot="codeContainer">
&lt;template&gt;
    &lt;vs-input v-model=&quot;text&quot; class=&quot;inline-flex&quot; /&gt;
    &lt;vs-button
        v-clipboard:copy=&quot;text&quot;
        v-clipboard:success=&quot;onCopy&quot;
        v-clipboard:error=&quot;onError&quot;&gt;
        Copy!
    &lt;/vs-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            text: 'Copy Me!',
        }
    },
    methods: {
        onCopy() {
            this.$vs.notify({
                title: 'Success!',
                text: 'Text copied successfully.',
                color: 'success',
                iconPack: 'feather',
                position: 'top-center',
                icon: 'icon-check-circle'
            })
        },
        onError() {
            this.$vs.notify({
                title: 'Failed!',
                text: 'Error in copying text.',
                color: 'danger',
                iconPack: 'feather',
                position: 'top-center',
                icon: 'icon-alert-circle'
            })
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
            text: 'Copy Me!',
        }
    },
    methods: {
        onCopy() {
            this.$vs.notify({
                title: 'Success!',
                text: 'Text copied successfully.',
                color: 'success',
                iconPack: 'feather',
                position: 'top-center',
                icon:'icon-check-circle'
            })
        },
        onError() {
            this.$vs.notify({
                title: 'Failed!',
                text: 'Error in copying text.',
                color: 'danger',
                iconPack: 'feather',
                position: 'top-center',
                icon:'icon-alert-circle'
            })
        },
    }
}
</script>
