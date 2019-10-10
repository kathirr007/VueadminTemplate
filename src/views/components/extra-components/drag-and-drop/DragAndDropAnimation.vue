<!-- =========================================================================================
    File Name: DragAndDropAnimation.vue
    Description: Add animation to drag and drop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="With Animation" code-toggler>
        <p>Add animation to changes using <code>transition-group</code>.</p>
        
        <div class="mt-5">
            <vs-list>
                <vs-list-header title="People Group" color="primary"></vs-list-header>
                <draggable :list="list" class="cursor-move">
                    <transition-group>
                        <vs-list-item class="list-item" v-for="listItem in list" :key="listItem.email" :title="listItem.name" :subtitle="listItem.email"><vs-avatar slot="avatar" :text="listItem.name" /></vs-list-item>
                    </transition-group>
                </draggable>
            </vs-list>
        </div>

        <prism language="js" class="rounded-lg">            
{{ list }}
        </prism>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-list&gt;
    &lt;vs-list-header title=&quot;People Group&quot; color=&quot;primary&quot;&gt;&lt;/vs-list-header&gt;

    &lt;draggable :list=&quot;list&quot;&gt;
      &lt;transition-group&gt;
        &lt;vs-list-item class=&quot;list-item&quot; v-for=&quot;listItem in list&quot; :key=&quot;listItem.email&quot; :title=&quot;listItem.name&quot; :subtitle=&quot;listItem.email&quot;&gt;
          &lt;vs-avatar slot=&quot;avatar&quot; :text=&quot;listItem.name&quot; /&gt;
        &lt;/vs-list-item&gt;
      &lt;/transition-group&gt;
    &lt;/draggable&gt;
    
  &lt;/vs-list&gt;
&lt;/template&gt;
&lt;script&gt;
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      list: [{
          name: &quot;Paz Joya&quot;,
          email: &quot;girliness@spotlike.co.uk&quot;,
        },
        {
          name: &quot;Sunshine Cose&quot;,
          email: &quot;executrixship@equisized.edu&quot;,
        },
        {
          name: &quot;Alba Dobbin&quot;,
          email: &quot;bidding@demibob.or&quot;,
        },
        {
          name: &quot;Marlin Hinchee&quot;,
          email: &quot;preholding@scuffly.co.uk&quot;,
        },
        {
          name: &quot;Leia Atienza&quot;,
          email: &quot;unmeasurableness@interlamellar.co.uk&quot;
        },
        {
          name: &quot;Lashawna Vaudrainm&quot;,
          email: &quot;soaking@khubber.com&quot;
        },
        {
          name: &quot;Liliana Henscheid&quot;,
          email: &quot;lecideine@turndown.org&quot;
        },
        {
          name: &quot;Keven Kolter&quot;,
          email: &quot;nontenure@anglicanum.co.uk&quot;
        }
      ],
    }
  },
  components: {
    draggable
  }
}
&lt;/script&gt;
&lt;style&gt;
.list-item {
  transition: all 1s
}
&lt;/style&gt;
        </template>
    </vx-card>
</template>

<script>
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'

export default {
    data() {
        return {
            list: [
                {
                    name: "Paz Joya",
                    email: "girliness@spotlike.co.uk",
                },
                {
                    name: "Sunshine Cose",
                    email: "executrixship@equisized.edu",
                },
                {
                    name: "Alba Dobbin",
                    email: "bidding@demibob.or",
                },
                {
                    name: "Marlin Hinchee",
                    email: "preholding@scuffly.co.uk",
                },
                {
                    name: "Leia Atienza",
                    email: "unmeasurableness@interlamellar.co.uk"
                },
                {
                    name: "Lashawna Vaudrainm",
                    email: "soaking@khubber.com"
                },
                {
                    name: "Liliana Henscheid",
                    email: "lecideine@turndown.org"
                },
                {
                    name: "Keven Kolter",
                    email: "nontenure@anglicanum.co.uk"
                }
            ],
        }
    },
    components: {
        draggable,
        Prism
    }
}
</script>

<style>
.list-item { transition: all .5s }
</style>