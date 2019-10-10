<!-- =========================================================================================
    File Name: DropdownGroupCollapse.vue
    Description: Option 2 - Collapse groups
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Group Collapse" code-toggler no-shadow card-border>

        <vs-dropdown>
            <a class="flex items-center" href.prevent>
                Dropdown Group Collapse
                <i class="material-icons">expand_more</i>
            </a>

            <vs-dropdown-menu>

                <vs-dropdown-item to="/components/"> Option 1 </vs-dropdown-item>

                <vs-dropdown-item> Option 2 </vs-dropdown-item>

                <vs-dropdown-group vs-collapse vs-label="Group Collapse" vs-icon="add">

                    <vs-dropdown-item> Option Collapse 1 </vs-dropdown-item>

                    <vs-dropdown-item> Option Collapse 2 </vs-dropdown-item>

                    <vs-dropdown-group>

                        <vs-dropdown-item> Sub Options 1 </vs-dropdown-item>

                        <vs-dropdown-item> Sub Options 2 </vs-dropdown-item>

                        <vs-dropdown-group vs-collapse>

                            <vs-dropdown-item vs-label="Sub Collapse"> Sub Collapse 1 </vs-dropdown-item>

                            <vs-dropdown-item> Sub Collapse 2 </vs-dropdown-item>
                        </vs-dropdown-group>
                    </vs-dropdown-group>
                </vs-dropdown-group>

                <vs-dropdown-item divider> Option 3 </vs-dropdown-item>
            </vs-dropdown-menu>
        </vs-dropdown>
        
        <template slot="codeContainer">
&lt;template&gt;

  &lt;div class=&quot;demo-alignment&quot;&gt;

    &lt;vs-dropdown&gt;

      &lt;a class=&quot;flex items-center&quot; href.prevent&gt;
          Dropdown Group Collapse
          &lt;i class=&quot;material-icons&quot;&gt;expand_more&lt;/i&gt;
      &lt;/a&gt;

      &lt;vs-dropdown-menu&gt;

        &lt;vs-dropdown-item to=&quot;/components/&quot;&gt; Option 1 &lt;/vs-dropdown-item&gt;
        &lt;vs-dropdown-item&gt; Option 2 &lt;/vs-dropdown-item&gt;

        &lt;vs-dropdown-group vs-collapse vs-label=&quot;Group Collapse&quot; vs-icon=&quot;add&quot;&gt;

          &lt;vs-dropdown-item&gt; Option Collapse 1 &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt; Option Collapse 2 &lt;/vs-dropdown-item&gt;

          &lt;vs-dropdown-group&gt;

            &lt;vs-dropdown-item&gt; Sub Options 1 &lt;/vs-dropdown-item&gt;
            &lt;vs-dropdown-item&gt; Sub Options 2 &lt;/vs-dropdown-item&gt;

            &lt;vs-dropdown-group vs-collapse&gt;

              &lt;vs-dropdown-item vs-label=&quot;Sub Collapse&quot;&gt; Sub Collapse 1 &lt;/vs-dropdown-item&gt;
              &lt;vs-dropdown-item&gt; Sub Collapse 2 &lt;/vs-dropdown-item&gt;

            &lt;/vs-dropdown-group&gt;
          &lt;/vs-dropdown-group&gt;
        &lt;/vs-dropdown-group&gt;
        
        &lt;vs-dropdown-item divider&gt; Option 3 &lt;/vs-dropdown-item&gt;
      &lt;/vs-dropdown-menu&gt;
    &lt;/vs-dropdown&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
    </vx-card>
</template>