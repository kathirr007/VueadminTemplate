<!-- =========================================================================================
    File Name: DropdownOptionGroup.vue
    Description: Option 1 - Option Grouping
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Option Grouping" code-toggler no-shadow card-border>

        <vs-dropdown>
            <a class="flex items-center" href.prevent>
                Dropdown Option Group
                <i class="material-icons"> expand_more </i>
            </a>

            <vs-dropdown-menu>

                <vs-dropdown-item> Option 1 </vs-dropdown-item>

                <vs-dropdown-item> Option 2 </vs-dropdown-item>

                <vs-dropdown-group>

                    <vs-dropdown-item> Option 1 </vs-dropdown-item>

                    <vs-dropdown-item> Option 2 </vs-dropdown-item>

                    <vs-dropdown-group>

                        <vs-dropdown-item> sub Options 1 </vs-dropdown-item>

                        <vs-dropdown-item> sub Options 2 </vs-dropdown-item>
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
          Dropdown Option Group
          &lt;i class=&quot;material-icons&quot;&gt; expand_more &lt;/i&gt;
      &lt;/a&gt;

      &lt;vs-dropdown-menu&gt;

        &lt;vs-dropdown-item&gt; Option 1 &lt;/vs-dropdown-item&gt;
        &lt;vs-dropdown-item&gt; Option 2 &lt;/vs-dropdown-item&gt;

        &lt;vs-dropdown-group&gt;

          &lt;vs-dropdown-item&gt; Option 1 &lt;/vs-dropdown-item&gt;
          &lt;vs-dropdown-item&gt; Option 2 &lt;/vs-dropdown-item&gt;

          &lt;vs-dropdown-group&gt;

            &lt;vs-dropdown-item&gt; sub Options 1 &lt;/vs-dropdown-item&gt;
            &lt;vs-dropdown-item&gt; sub Options 2 &lt;/vs-dropdown-item&gt;

          &lt;/vs-dropdown-group&gt;
        &lt;/vs-dropdown-group&gt;

        &lt;vs-dropdown-item divider&gt; Option 3 &lt;/vs-dropdown-item&gt;
      &lt;/vs-dropdown-menu&gt;
    &lt;/vs-dropdown&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;template&gt;
        </template>
    </vx-card>
</template>