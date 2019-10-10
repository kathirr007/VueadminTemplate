<!-- =========================================================================================
    File Name: ListContent.vue
    Description: Add custom content to list items
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Content" code-toggler>
        
        <p>You can add custom content to the item. It will be pushed to the right side</p>

        <div class="demo-alignment">

            <vs-list>
                <vs-list-header title="Group 1"></vs-list-header>

                <vs-list-item title="Snickerdoodle" subtitle="An excellent companion">
                    <vs-button color="danger">One action</vs-button>
                </vs-list-item>

                <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals">
                    <vs-checkbox color="danger" />
                </vs-list-item>

                <vs-list-header title="Group 2" color="success"></vs-list-header>
                <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot.">
                    <vs-chip color="warning">Another component</vs-chip>
                </vs-list-item>

                <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">
                    <vs-switch color="warning" v-model="val" />
                </vs-list-item>
            </vs-list>

        </div>

        <template slot="codeContainer">
&lt;vs-list&gt;
  &lt;vs-list-header title=&quot;Group 1&quot;&gt;&lt;/vs-list-header&gt;

  &lt;vs-list-item title=&quot;Snickerdoodle&quot; subtitle=&quot;An excellent companion&quot;&gt;
    &lt;vs-button color=&quot;danger&quot;&gt;One action&lt;/vs-button&gt;
  &lt;/vs-list-item&gt;

  &lt;vs-list-item title=&quot;Sapporo Haru&quot; subtitle=&quot;An excellent polish restaurant, quick delivery and hearty, filling meals&quot;&gt;
    &lt;vs-checkbox color=&quot;danger&quot;/&gt;
  &lt;/vs-list-item&gt;

  &lt;vs-list-header title=&quot;Group 2&quot; color=&quot;success&quot;&gt;&lt;/vs-list-header&gt;
  &lt;vs-list-item title=&quot;Enid&apos;s&quot; subtitle=&quot;At night a bar, during the day a delicious brunch spot.&quot;&gt;
    &lt;vs-chip color=&quot;warning&quot;&gt;Another component&lt;/vs-chip&gt;
  &lt;/vs-list-item&gt;
  
  &lt;vs-list-item title=&quot;Veronika Ossi&quot; subtitle=&quot;Has not watched anything recently&quot;&gt;
    &lt;vs-switch color=&quot;warning&quot; v-model=&quot;val&quot;/&gt;
  &lt;/vs-list-item&gt;
&lt;/vs-list&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            val: false,
        }
    }
}
</script>