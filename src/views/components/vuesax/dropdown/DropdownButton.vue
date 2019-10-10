<!-- =========================================================================================
    File Name: DropdownButton.vue
    Description: Create dropdown using button
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Button" code-toggler>
        
        <p>You can customize the component or element that initialize the dropdown in this case, it is a Button that is the most common</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>The component or element that initializes the dropdown is the one inside it with the possibility of total customization and flexibility in the required use</p>
        </vs-alert>

        <vs-alert color="primary" icon="new_releases" active="true" class="my-5">
            <p>Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>.</p>
            <p>FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.</p>
        </vs-alert>

        <prism  class="rounded-lg">
&lt;vs-dropdown&gt;
  &lt;!-- element that initializes the dropdown --&gt;

  &lt;vs-dropdown-menu&gt;
    &lt;!-- items and elements within the menu or custom dropdown --&gt;
  &lt;/vs-dropdown-menu&gt;
&lt;/vs-dropdown&gt;
        </prism>

        <div class="mt-5 demo-alignment">

        <div class="dropdown-button-container">
            <vs-button class="btnx" type="filled">Dropdown</vs-button>
            <vs-dropdown>
                <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
                <vs-dropdown-menu>

                    <vs-dropdown-item> option 1 </vs-dropdown-item>
                    <vs-dropdown-item> option 2 </vs-dropdown-item>

                    <vs-dropdown-group>
                        <vs-dropdown-item> option 1 </vs-dropdown-item>
                        <vs-dropdown-item> option 2 </vs-dropdown-item>
                    </vs-dropdown-group>

                    <vs-dropdown-item divider> option 3 </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
        </div>

        <div class="dropdown-button-container">
            <vs-button class="btnx" color="success" type="gradient">Dropdown</vs-button>
            <vs-dropdown>
                <vs-button class="btn-drop" color="success" type="gradient" icon="more_horiz"></vs-button>
                <vs-dropdown-menu>

                    <vs-dropdown-item> Home </vs-dropdown-item>
                    <vs-dropdown-item> Contributors </vs-dropdown-item>
                    <vs-dropdown-item divider> Logout </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
        </div>

        <div class="dropdown-button-container">
            <vs-button class="btnx" type="line" color="danger">Icons</vs-button>
            <vs-dropdown>
                <vs-button class="btn-drop" type="line" color="danger" icon="mood"></vs-button>
                <vs-dropdown-menu>

                    <vs-dropdown-item>
                        <i class="material-icons"> mood </i>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                        <i class="material-icons"> mood_bad </i>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                        <i class="material-icons"> sentiment_dissatisfied </i>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                        <i class="material-icons"> sentiment_satisfied </i>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                        <i class="material-icons"> sentiment_very_dissatisfied </i>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                        <i class="material-icons"> sentiment_very_satisfied </i>
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
        </div>

        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;!-- Dropdown Button 1 --&gt;
    &lt;div class=&quot;dropdown-button-container&quot;&gt;
      &lt;vs-button class=&quot;btnx&quot; type=&quot;filled&quot;&gt;Dropdown&lt;/vs-button&gt;

      &lt;vs-dropdown&gt;
        &lt;vs-button class=&quot;btn-drop&quot; type=&quot;filled&quot; icon=&quot;expand_more&quot;&gt;&lt;/vs-button&gt;
        &lt;vs-dropdown-menu&gt;

          &lt;vs-dropdown-item&gt; option 1 &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt; option 2 &lt;/vs-dropdown-item&gt;

          &lt;vs-dropdown-group&gt;
            &lt;vs-dropdown-item&gt; option 1 &lt;/vs-dropdown-item&gt;
            &lt;vs-dropdown-item&gt; option 2 &lt;/vs-dropdown-item&gt;
          &lt;/vs-dropdown-group&gt;

          &lt;vs-dropdown-item divider&gt; option 3 &lt;/vs-dropdown-item&gt;
        &lt;/vs-dropdown-menu&gt;
      &lt;/vs-dropdown&gt;
    &lt;/div&gt;

    &lt;!-- Dropdown Button 2 --&gt;
    &lt;div class=&quot;dropdown-button-container&quot;&gt;
      &lt;vs-button class=&quot;btnx&quot; color=&quot;success&quot; type=&quot;gradient&quot;&gt;Dropdown&lt;/vs-button&gt;

      &lt;vs-dropdown&gt;
        &lt;vs-button class=&quot;btn-drop&quot; color=&quot;success&quot; type=&quot;gradient&quot; icon=&quot;more_horiz&quot;&gt;&lt;/vs-button&gt;
        &lt;vs-dropdown-menu&gt;

          &lt;vs-dropdown-item&gt; Home &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt; Contributors &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item divider&gt; Logout &lt;/vs-dropdown-item&gt;
        &lt;/vs-dropdown-menu&gt;
      &lt;/vs-dropdown&gt;
    &lt;/div&gt;

    &lt;!-- Dropdown Button 3 --&gt;
    &lt;div class=&quot;dropdown-button-container&quot;&gt;
      &lt;vs-button class=&quot;btnx&quot; type=&quot;line&quot; color=&quot;danger&quot;&gt;Icons&lt;/vs-button&gt;

      &lt;vs-dropdown&gt;
        &lt;vs-button class=&quot;btn-drop&quot; type=&quot;line&quot; color=&quot;danger&quot; icon=&quot;mood&quot;&gt;&lt;/vs-button&gt;
        &lt;vs-dropdown-menu&gt;

          &lt;vs-dropdown-item&gt;
            &lt;i class=&quot;material-icons&quot;&gt; mood &lt;/i&gt;
          &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt;
            &lt;i class=&quot;material-icons&quot;&gt; mood_bad &lt;/i&gt;
          &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt;
            &lt;i class=&quot;material-icons&quot;&gt; sentiment_dissatisfied &lt;/i&gt;
          &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt;
            &lt;i class=&quot;material-icons&quot;&gt; sentiment_satisfied &lt;/i&gt;
          &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt;
            &lt;i class=&quot;material-icons&quot;&gt; sentiment_very_dissatisfied &lt;/i&gt;
          &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt;
            &lt;i class=&quot;material-icons&quot;&gt; sentiment_very_satisfied &lt;/i&gt;
          &lt;/vs-dropdown-item&gt;
        &lt;/vs-dropdown-menu&gt;
      &lt;/vs-dropdown&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot;&gt;
.dropdown-button-container {
  display: flex;
  align-items: center;

  .btnx {
    border-radius: 5px 0px 0px 5px;
  }

  .btn-drop {
    border-radius: 0px 5px 5px 0px;
    border-left: 1px solid rgba(255, 255, 255, .2);
  }
}
&lt;/style&gt;
        </template>

    </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
    data: () => ({
        value1: '',
        value2: '',
    }),
    components: {
        Prism,
    }
}
</script>