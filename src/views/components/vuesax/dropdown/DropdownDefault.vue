<!-- =========================================================================================
    File Name: DropdownDefault.vue
    Description: Rendering of default dropdown
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>To add the Dropdown we have three types of components the main <code>vs-dropdown</code> that contains the element that makes the <code>vs-dropdown-menu</code> appear and to add each item within it we have the component <code>vs-dropdown-item</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>To add an internal link using <a href="https://router.vuejs.org/">vue-router</a> you can do them simply by adding the property <a href="https://router.vuejs.org/api/#to">to</a> as if it were a <a href="https://router.vuejs.org/">vue-router</a> link</p>
            <p>In case you need an external link or normal html, simply do it with the href property</p>
        </vs-alert>
        <prism language="markup" class="rounded-lg">
  &lt;!-- to: internal link --&gt;
  &lt;vs-dropdown-item to=&quot;/myLink&quot;&gt;
    my Link name
  &lt;/vs-dropdown-item&gt;

  &lt;!-- href: external link--&gt;
  &lt;vs-dropdown-item href=&quot;/myLink&quot;&gt;
    my Link name
  &lt;/vs-dropdown-item&gt;
            </prism>

        <div class="mt-5 demo-alignment">

            <vs-dropdown>
                <a class="flex items-center" href="#">
                    Dropdown hover
                    <i class="material-icons"> expand_more </i>
                </a>

                <vs-dropdown-menu>

                    <vs-dropdown-item>
                        Option 1
                    </vs-dropdown-item>

                    <vs-dropdown-item>
                        Option 2
                    </vs-dropdown-item>

                    <vs-dropdown-item divider>
                        Option 3
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>

            <vs-dropdown>
                <a class="flex items-center" href.prevent>
                    Dropdown Option Disabled
                    <i class="material-icons">expand_more</i>
                </a>

                <vs-dropdown-menu>

                    <vs-dropdown-item>
                        Option 1
                    </vs-dropdown-item>

                    <vs-dropdown-item disabled>
                        Option 2
                    </vs-dropdown-item>

                    <vs-dropdown-item disabled divider>
                        Option 3
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>

        </div>

        <template slot="codeContainer">
&lt;div class=&quot;demo-alignment&quot;&gt;

  &lt;vs-dropdown&gt;

    &lt;a class=&quot;flex items-center&quot; href=&quot;#&quot;&gt;
      Dropdown hover
      &lt;i class=&quot;material-icons&quot;&gt; expand_more &lt;/i&gt;
    &lt;/a&gt;

    &lt;vs-dropdown-menu&gt;

      &lt;vs-dropdown-item&gt;
        Option 1
      &lt;/vs-dropdown-item&gt;

      &lt;vs-dropdown-item&gt;
        Option 2
      &lt;/vs-dropdown-item&gt;

      &lt;vs-dropdown-item divider&gt;
        Option 3
      &lt;/vs-dropdown-item&gt;

    &lt;/vs-dropdown-menu&gt;
  &lt;/vs-dropdown&gt;

  &lt;vs-dropdown&gt;

    &lt;a class=&quot;flex items-center&quot; href.prevent&gt;
      Dropdown Option Disabled
      &lt;i class=&quot;material-icons&quot;&gt;expand_more&lt;/i&gt;
    &lt;/a&gt;

    &lt;vs-dropdown-menu&gt;

      &lt;vs-dropdown-item&gt;
        Option 1
      &lt;/vs-dropdown-item&gt;

      &lt;vs-dropdown-item disabled&gt;
        Option 2
      &lt;/vs-dropdown-item&gt;
      
      &lt;vs-dropdown-item disabled divider&gt;
        Option 3
      &lt;/vs-dropdown-item&gt;
    &lt;/vs-dropdown-menu&gt;
  &lt;/vs-dropdown&gt;
&lt;/div&gt;
        </template>

    </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

    export default{
        components: {
            Prism
        }   
    }
</script>