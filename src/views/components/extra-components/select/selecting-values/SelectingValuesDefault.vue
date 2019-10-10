<!-- =========================================================================================
    File Name: SelectingValueDefault.vue
    Description: Default way to selecting values
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Dafault" code-toggler no-shadow card-border>

        <div>

            <p class="mb-3">The most common use case for vue-select is to have the chosen value synced with a parent component. vue-select takes advantage of the v-model syntax to sync values with a parent</p>

            <v-select v-model="selected" :options="options"></v-select><br>

            <p>If you don't require the value to be synced, you can also pass the prop directly:</p>

            <prism class="rounded-lg">          
&lt;v-select :value=&quot;selected&quot;&gt;&lt;/v-select&gt;
            </prism>

            <p class="mt-5">This method allows you to pre-select a value(s), without syncing any changes to the parent component. This is also very useful when using a state management tool, like Vuex</p>
            
        </div>
        
        <template slot="codeContainer">
&lt;template&gt;
  &lt;v-select v-model=&quot;selected&quot; :options=&quot;options&quot;&gt;&lt;/v-select&gt;&lt;br&gt;
&lt;/template&gt;

&lt;script&gt;
import vSelect from 'vue-select'

export default{
  data() {
    return {
      options: [
        {id: 1, label: 'foo'},
        {id: 3, label: 'bar'},
        {id: 2, label: 'baz'},
      ],
      selected: {id: 3, label: 'bar'},
    }
  },
  components: {
    'v-select': vSelect,
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import vSelect from 'vue-select'
import Prism from 'vue-prism-component'

export default{
    data() {
        return {
            options: [
                {id: 1, label: 'foo'},
                {id: 3, label: 'bar'},
                {id: 2, label: 'baz'},
            ],
            selected: {id: 3, label: 'bar'},
        }
    },
    components: {
        'v-select': vSelect,
        Prism,
    }
}
</script>