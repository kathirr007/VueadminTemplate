<!-- =========================================================================================
    File Name: DragAndDropSimple.vue
    Description: Simple Drag and Drop
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Simple" code-toggler>
        <p>Simple Draggable list with in sync to original list. Remove <code>list</code> prop to break synchronization with original list.</p>
        
        <div class="mt-5">
            <vs-list>
                <draggable :list="list" class="cursor-move">
                    <vs-list-item class="flex items-center p-1" v-for="(item, index) in list" :key="index" :title="item">
                    </vs-list-item>
                </draggable>
            </vs-list>
        </div>

        <prism language="js" class="rounded-lg">            
{{ list }}
        </prism>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-list&gt;
    &lt;draggable :list=&quot;list&quot; class=&quot;cursor-move&quot;&gt;
      &lt;vs-list-item class=&quot;flex items-center p-1&quot; v-for=&quot;(item, index) in list&quot; :key=&quot;index&quot; :title=&quot;item&quot;&gt;
      &lt;/vs-list-item&gt;
    &lt;/draggable&gt;
  &lt;/vs-list&gt;
&lt;/template&gt;

&lt;script&gt;
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      list: [
        &quot;Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.&quot;,
        &quot;Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.&quot;,
        &quot;Cake muffin icing topping wafer topping gummi bears apple pie.&quot;,
        &quot;Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll.&quot;,
      ]
    }
  },
  components: {
    draggable,
  }
}
&lt;/script&gt;
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
                "Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.",
                "Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.",
                "Cake muffin icing topping wafer topping gummi bears apple pie.",
                "Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll.",
            ]
        }
    },
    components: {
        draggable,
        Prism
    }
}
</script>