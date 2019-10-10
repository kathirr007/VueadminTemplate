    <!-- =========================================================================================
    File Name: EditorQuillEditor.vue
    Description: Quill editor
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-quill-editor-demo">

        <p class="mb-4"><a href="https://surmon-china.github.io/vue-quill-editor/" target="_blank" rel="nofollow">Vue-Quill-Editor</a> editor component for Vue, support SPA and SSR. Read full documnetation <a href="https://quilljs.com/docs/quickstart/" target="_blank" rel="nofollow">here</a></p>
        
        <quill-editor-theme-snow></quill-editor-theme-snow>
        <quill-editor-theme-bubble></quill-editor-theme-bubble>
        <quill-editor-custom-toolbar></quill-editor-custom-toolbar>
    </div>
</template>

<script>
import QuillEditorThemeSnow from "./QuillEditorThemeSnow.vue"
import QuillEditorThemeBubble from "./QuillEditorThemeBubble.vue"
import QuillEditorCustomToolbar from "./QuillEditorCustomToolbar.vue"

export default {
    components: {
        QuillEditorThemeSnow,
        QuillEditorThemeBubble,
        QuillEditorCustomToolbar,
    }
}
</script>