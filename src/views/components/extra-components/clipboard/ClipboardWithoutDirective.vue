<!-- =========================================================================================
	File Name: ClipboardWithoutDirective.vue
	Description: Clipboard demo without directive
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
	<vx-card title="Without directive" subtitle="You can copy text without a specific button. Use $copyText to copy text when event got fired." code-toggler>
		<vs-input v-model="text2" class="inline-flex mb-2 mr-2" />
		<vs-button @click="copyText">Copy!</vs-button>
		<template slot="codeContainer">
&lt;template&gt;
    &lt;vs-input v-model=&quot;text2&quot; class=&quot;inline-flex&quot; /&gt;
    &lt;vs-button @click=&quot;copyText&quot;&gt;Copy!&lt;/vs-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            text2: 'Copy Me Without Directive!',
        }
    },
    methods: {
        copyText() {
            const thisIns = this;
            this.$copyText(this.text2).then(function() {
                thisIns.$vs.notify({
                    title: 'Success!',
                    text: 'Text copied successfully.',
                    color: 'success',
                    iconPack: 'feather',
                    position: 'top-center',
                    icon: 'icon-check-circle'
                })
            }, function() {
                thisIns.$vs.notify({
                    title: 'Failed!',
                    text: 'Error in copying text.',
                    color: 'danger',
                    iconPack: 'feather',
                    position: 'top-center',
                    icon: 'icon-alert-circle'
                })
            })
        }
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
            text2: 'Copy Me Without Directive!',
        }
    },
    methods: {
        copyText() {
            const thisIns = this;
            this.$copyText(this.text2).then(function() {
                thisIns.$vs.notify({
                    title: 'Success!',
                    text: 'Text copied successfully.',
                    color: 'success',
                    iconPack: 'feather',
                    position: 'top-center',
                    icon: 'icon-check-circle'
                })
            }, function() {
                thisIns.$vs.notify({
                    title: 'Failed!',
                    text: 'Error in copying text.',
                    color: 'danger',
                    iconPack: 'feather',
                    position: 'top-center',
                    icon: 'icon-alert-circle'
                })
            })
        }
    }
}
</script>
