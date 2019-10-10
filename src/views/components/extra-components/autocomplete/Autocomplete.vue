<!-- =========================================================================================
    File Name: Autocomplete.vue
    Description: Autocomplete demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-autocomplete-demo">

    <!-- BASIC AUTOCOMPLETE -->
    <vx-card title="Basic Autocomplete" code-toggler>
      <vue-simple-suggest
        v-model="chosen"
        :list="simpleSuggestionList"
        :filter-by-query="true">
      </vue-simple-suggest>

      <p class="mt-4">Chosen element: {{ chosen }}</p>

      <template slot="codeContainer">
&lt;template&gt;
  &lt;vue-simple-suggest
    v-model=&quot;chosen&quot;
    :list=&quot;simpleSuggestionList&quot;
    :filter-by-query=&quot;true&quot;&gt;
    &lt;!-- Filter by input text to only show the matching results --&gt;
  &lt;/vue-simple-suggest&gt;

  &lt;p class=&quot;mt-4&quot;&gt;Chosen element: {{ chosen }}&lt;/p&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      chosen: &apos;&apos;,
    }
  },
  methods: {
    simpleSuggestionList() {
      return [
        &apos;Vue.js&apos;,
        &apos;React.js&apos;,
        &apos;Angular.js&apos;
      ]
    },
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
@import &quot;@/assets/scss/vuesax/extraComponents/autocomplete.scss&quot;;
&lt;/style&gt;
      </template>
    </vx-card>
    <!-- /BASIC AUTOCOMPLETE -->


    <!-- AJAX BASED AUTOCOMPLETE -->
    <vx-card title="Ajax Based Autocomplete" code-toggler>
      <vue-simple-suggest pattern="\w+"
        v-model="model"
        :list="getList"
        :max-suggestions="10"
        :min-length="3"
        :debounce="200"
        :filter-by-query="false"
        :prevent-submit="true"
        :controls="{
          selectionUp: [38, 33],
          selectionDown: [40, 34],
          select: [13, 36],
          hideList: [27, 35]
        }"
        :mode="mode"
        :nullable-select="true"
        ref="suggestComponent"
        placeholder="Search information..."
        value-attribute="id"
        display-attribute="text"
        @select="onSuggestSelect">

        <div class="g">
          <input type="text">
        </div>

        <template slot="misc-item-above" slot-scope="{ suggestions, query }">
          <div class="misc-item">
            <span>You're searching for '{{ query }}'.</span>
          </div>

          <template v-if="suggestions.length > 0">
            <div class="misc-item">
              <span>{{ suggestions.length }} suggestions are shown...</span>
            </div>
            <hr>
          </template>

          <div class="misc-item" v-else-if="!loading">
            <span>No results</span>
          </div>
        </template>

        <div slot="suggestion-item" slot-scope="scope" :title="scope.suggestion.description">
          <div class="text">
            <span v-html="boldenSuggestion(scope)"></span>
          </div>
        </div>

        <div class="misc-item" slot="misc-item-below" slot-scope="{ suggestions }" v-if="loading">
          <span>Loading...</span>
        </div>
      </vue-simple-suggest>

      <p class="mt-3">Selected element ({{ typeof selected }}): <pre class="selected hljs"><span v-html="selected"></span></pre></p>

      <template slot="codeContainer">
&lt;template&gt;
  &lt;vue-simple-suggest
    pattern=&quot;\w+&quot;
    v-model=&quot;model&quot;
    :list=&quot;getList&quot;
    :max-suggestions=&quot;10&quot;
    :min-length=&quot;3&quot;
    :debounce=&quot;200&quot;
    :filter-by-query=&quot;false&quot;
    :prevent-submit=&quot;true&quot;
    :controls=&quot;{
      selectionUp: [38, 33],
      selectionDown: [40, 34],
      select: [13, 36],
      hideList: [27, 35]
    }&quot;
    :mode=&quot;mode&quot;
    :nullable-select=&quot;true&quot;
    ref=&quot;suggestComponent&quot;
    placeholder=&quot;Search information...&quot;
    value-attribute=&quot;id&quot;
    display-attribute=&quot;text&quot;
    @select=&quot;onSuggestSelect&quot;&gt;

    &lt;div class=&quot;g&quot;&gt;
      &lt;input type=&quot;text&quot;&gt;
    &lt;/div&gt;

    &lt;template slot=&quot;misc-item-above&quot; slot-scope=&quot;{ suggestions, query }&quot;&gt;
      &lt;div class=&quot;misc-item&quot;&gt;
        &lt;span&gt;You&apos;re searching for &apos;{{ "\{\{ query \}\}" }}&apos;.&lt;/span&gt;
      &lt;/div&gt;

      &lt;template v-if=&quot;suggestions.length &gt; 0&quot;&gt;
        &lt;div class=&quot;misc-item&quot;&gt;
          &lt;span&gt;{{ "\{\{ suggestions.length \}\}" }} suggestions are shown...&lt;/span&gt;
        &lt;/div&gt;
        &lt;hr&gt;
      &lt;/template&gt;

      &lt;div class=&quot;misc-item&quot; v-else-if=&quot;!loading&quot;&gt;
        &lt;span&gt;No results&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;div slot=&quot;suggestion-item&quot; slot-scope=&quot;scope&quot; :title=&quot;scope.suggestion.description&quot;&gt;
      &lt;div class=&quot;text&quot;&gt;
        &lt;span v-html=&quot;boldenSuggestion(scope)&quot;&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;misc-item&quot; slot=&quot;misc-item-below&quot; slot-scope=&quot;{ suggestions }&quot; v-if=&quot;loading&quot;&gt;
      &lt;span&gt;Loading...&lt;/span&gt;
    &lt;/div&gt;
  &lt;/vue-simple-suggest&gt;

  &lt;p class=&quot;mt-3&quot;&gt;Selected element ({{ "\{\{ typeof selected \}\}" }}): &lt;pre class=&quot;selected hljs&quot;&gt;&lt;span v-html=&quot;selected&quot;&gt;&lt;/span&gt;&lt;/pre&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      model: null,
    }
  },
  methods: {
    getList (inputValue) {
      return new Promise((resolve, reject) =&gt; {
        let url = &grave;https://en.wikipedia.org/w/api.php?origin=*&amp;action=opensearch&amp;namespace=*&amp;search=${inputValue}&amp;limit=10&amp;namespace=0&amp;format=json&grave;
        fetch(url).then(response =&gt; {
          if (!response.ok) {
            reject()
          }
          response.json().then(json =&gt; {
            json.shift();
            let result = []
            const fields = [&apos;text&apos;, &apos;description&apos;, &apos;link&apos;]
            json.forEach((part, i) =&gt; {
              part.forEach((el, j) =&gt; {
                if (!result[j]) {
                  result.push({
                    id: j+1
                  })
                }
                result[j][fields[i]] = el
              })
            })
            resolve(result)
            // resolve([...(json.items || [])])
          }).catch(e =&gt; {
            reject(e)
          })
        }).catch(error =&gt; {
          this.loading = false
          reject(error)
        })
      })
    },
    onSuggestSelect (suggest) {
      this.selected = suggest
    },
    boldenSuggestion(scope) {
      if (!scope) return scope;
      const { suggestion, query } = scope;
      let result = this.$refs.suggestComponent.displayProperty(suggestion);
      if (!query) return result;
      const texts = query.split(/[\s-_/\\|.]/gm).filter(t =&gt; !!t) || [&apos;&apos;];
      return result.replace(new RegExp(&apos;(.*?)(&apos; + texts.join(&apos;|&apos;) + &apos;)(.*?)&apos;,&apos;gi&apos;), &apos;$1&lt;b&gt;$2&lt;/b&gt;$3&apos;);
    },
  }
}
&lt;/script&gt;
      </template>
    </vx-card>
    <!-- /AJAX BASED AUTOCOMPLETE -->


    <!-- MODE -->
    <vx-card title="Mode">
      <p class="mb-3">Determines the event, that triggers <code>v-model</code>. Can be one of <code>'input'</code> (default) or <code>'select'</code>.</p>

      <p class="mb-3">For example, if <code>'input'</code> is chosen - then v-model will update the value each time an <code>input</code> event is fired, setting the input's string.</p>

      <p class="mb-3">Same is for <code>'select'</code> - v-model changes only when something is selected from the list, setting the selected value (string, object or whatever) to its argument.</p>

      <p class="mb-3">A proper use-case for it being when one wants to use the component only for selection binding and custom input for text binding:</p>

      <prism language="markup" class="rounded-lg">
&lt;vue-simple-suggest v-model=&quot;selected&quot; mode=&quot;select&quot;&gt;
  &lt;input v-model=&quot;text&quot;&gt;
&lt;/vue-simple-suggest&gt;
      </prism>
    </vx-card>
    <!-- /MODE -->

  </div>
</template>

<script>
  import VueSimpleSuggest from 'vue-simple-suggest';
  import 'vue-simple-suggest/dist/styles.css'

  import Prism from 'vue-prism-component'

  export default {
    name: 'Autocomplete',
    data () {
      return {
        chosen: '',
        selected: null,
        model: null,
        mode: 'input',
        loading: false,
        log: []
      }
    },
    methods: {
      simpleSuggestionList() {
        return [
          'Vue.js',
          'React.js',
          'Angular.js'
        ]
      },
      onSuggestSelect (suggest) {
        this.selected = suggest
      },
      boldenSuggestion(scope) {
        if (!scope) return scope;
        const { suggestion, query } = scope;
        let result = this.$refs.suggestComponent.displayProperty(suggestion);
        if (!query) return result;
        const texts = query.split(/[\s-_/\\|.]/gm).filter(t => !!t) || [''];
        return result.replace(new RegExp('(.*?)(' + texts.join('|') + ')(.*?)','gi'), '$1<b>$2</b>$3');
      },
      getList (inputValue) {
        return new Promise((resolve, reject) => {
          let url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&namespace=*&search=${inputValue}&limit=10&namespace=0&format=json`
          fetch(url).then(response => {
            if (!response.ok) {
              reject()
            }
            response.json().then(json => {
              json.shift();
              let result = []
              const fields = ['text', 'description', 'link']
              json.forEach((part, i) => {
                part.forEach((el, j) => {
                  if (!result[j]) {
                    result.push({
                      id: j+1
                    })
                  }
                  result[j][fields[i]] = el
                })
              })
              resolve(result)
            }).catch(e => {
              reject(e)
            })
          }).catch(error => {
            this.loading = false
            reject(error)
          })
        })
      }
    },
    components: {
      VueSimpleSuggest,
      Prism
    }
  }
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/extraComponents/autocomplete.scss";
</style>
