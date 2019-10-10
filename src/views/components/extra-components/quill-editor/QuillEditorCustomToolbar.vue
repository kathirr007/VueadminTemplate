<!-- =========================================================================================
    File Name: QuillEditorCustomToolbar.vue
    Description: Quill editor with custom toolbar
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Custom Toolbar" code-toggler>
        <p class="mb-5">You have freedom to create your own custom toolbar</p>
        <div class="vx-row">
            <div class="vx-col w-full md:w-1/2">
                <quill-editor v-model="content" :options="editorOption">
                    <div id="toolbar" slot="toolbar">

                        <!-- Add a bold button -->
                        <button class="ql-bold">Bold</button>
                        <button class="ql-italic">Italic</button>

                        <!-- Add font size dropdown -->
                        <select class="ql-size">
                            <option value="small"></option>

                            <!-- Note a missing, thus falsy value, is used to reset to default -->
                            <option selected></option>
                            <option value="large"></option>
                            <option value="huge"></option>
                        </select>

                        <select class="ql-font">
                            <option selected="selected"></option>
                            <option value="serif"></option>
                            <option value="monospace"></option>
                        </select>

                        <!-- Add subscript and superscript buttons -->
                        <button class="ql-script" value="sub"></button>
                        <button class="ql-script" value="super"></button>

                        <!-- You can also add your own -->
                        <button style="width:auto" @click="customButtonClick">Click here</button>
                    </div>
                </quill-editor>
            </div>

            <div class="vx-col w-full md:w-1/2 flex">
                <prism class="rounded-lg"> {{ content }} </prism>
            </div>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;quill-editor v-model=&quot;content&quot; :options=&quot;editorOption&quot;&gt;

    &lt;div id=&quot;toolbar&quot; slot=&quot;toolbar&quot;&gt;

      &lt;!-- Add a bold button --&gt;
      &lt;button class=&quot;ql-bold&quot;&gt;Bold&lt;/button&gt;
      &lt;button class=&quot;ql-italic&quot;&gt;Italic&lt;/button&gt;

      &lt;!-- Add font size dropdown --&gt;
      &lt;select class=&quot;ql-size&quot;&gt;
        &lt;option value=&quot;small&quot;&gt;&lt;/option&gt;
        &lt;!-- Note a missing, thus falsy value, is used to reset to default --&gt;
        &lt;option selected&gt;&lt;/option&gt;
        &lt;option value=&quot;large&quot;&gt;&lt;/option&gt;
        &lt;option value=&quot;huge&quot;&gt;&lt;/option&gt;
      &lt;/select&gt;

      &lt;select class=&quot;ql-font&quot;&gt;
        &lt;option selected=&quot;selected&quot;&gt;&lt;/option&gt;
        &lt;option value=&quot;serif&quot;&gt;&lt;/option&gt;
        &lt;option value=&quot;monospace&quot;&gt;&lt;/option&gt;
      &lt;/select&gt;

      &lt;!-- Add subscript and superscript buttons --&gt;
      &lt;button class=&quot;ql-script&quot; value=&quot;sub&quot;&gt;&lt;/button&gt;
      &lt;button class=&quot;ql-script&quot; value=&quot;super&quot;&gt;&lt;/button&gt;

      &lt;!-- You can also add your own --&gt;
      &lt;button style=&quot;width:auto&quot; @click=&quot;customButtonClick&quot;&gt;Click here&lt;/button&gt;
    &lt;/div&gt;
  &lt;/quill-editor&gt;
&lt;/template&gt;

&lt;script&gt;
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: '#toolbar'
        }
      },
      content: `...`,
    }
  },
  components: {
    quillEditor,
  },
  methods: {
    customButtonClick() {
      alert(&quot;Button clicked!&quot;);
    }
  }
}
&lt;/script&gt;
        </template>
        
    </vx-card>
</template>

<script>
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import Prism from 'vue-prism-component'

export default {
    data() {
        return {
            editorOption: {
                modules: {
                    toolbar: '#toolbar'
                }
            },
            content: `
<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />
<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><br />
<iframe class="ql-video ql-align-center" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>
            `,
        }
    },
    components: {
        quillEditor,
        Prism
    },
    methods: {
        customButtonClick() {
            alert("Button clicked!");
        }
    }
}
</script>