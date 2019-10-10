<!-- =========================================================================================
    File Name: NavbarType.vue
    Description: change navbar type - styles
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Type" code-toggler>
        
        <p>If you want you can change the style of the buttons and the navbar by changing the property <code>type</code></p>

        <div class="mt-5">

            <vs-select class="selectExample mb-5" label="Figuras" v-model="type">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in types" />
            </vs-select>

            <vs-navbar :type="type" v-model="activeItem" class="p-2">

                <div slot="title">
                    <vs-navbar-title>
                        <span>Type {{type}}</span>
                    </vs-navbar-title>
                </div>

                <vs-navbar-item index="0">
                    <a href="#">Home</a>
                </vs-navbar-item>

                <vs-navbar-item index="1">
                    <a href="#">News</a>
                </vs-navbar-item>

                <vs-navbar-item index="2">
                    <a href="#">Update</a>
                </vs-navbar-item>
            </vs-navbar>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;vs-select class=&quot;selectExample mb-5&quot; label=&quot;Figuras&quot; v-model=&quot;type&quot; class=&quot;p-2&quot;&gt;
      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in types&quot; /&gt;
    &lt;/vs-select&gt;

    &lt;vs-navbar :type=&quot;type&quot; v-model=&quot;activeItem&quot; class=&quot;nabarx&quot;&gt;

      &lt;div slot=&quot;title&quot;&gt;
        &lt;vs-navbar-title&gt;
          &lt;span&gt;Type {{ "\{\{ type \}\}" }}&lt;/span&gt;
        &lt;/vs-navbar-title&gt;
      &lt;/div&gt;

      &lt;vs-navbar-item index=&quot;0&quot;&gt;
        &lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;
      &lt;/vs-navbar-item&gt;

      &lt;vs-navbar-item index=&quot;1&quot;&gt;
        &lt;a href=&quot;#&quot;&gt;News&lt;/a&gt;
      &lt;/vs-navbar-item&gt;

      &lt;vs-navbar-item index=&quot;2&quot;&gt;
        &lt;a href=&quot;#&quot;&gt;Update&lt;/a&gt;
      &lt;/vs-navbar-item&gt;
    &lt;/vs-navbar&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    activeItem: 0,
    type: &apos;flat&apos;,
    types: [{
        value: null,
        text: &apos;Default&apos;
      },
      {
        value: &apos;flat&apos;,
        text: &apos;Flat&apos;
      },
      {
        value: &apos;fund&apos;,
        text: &apos;Fund&apos;
      },
      {
        value: &apos;border&apos;,
        text: &apos;border&apos;
      },
      {
        value: &apos;gradient&apos;,
        text: &apos;Gradient&apos;
      },
      {
        value: &apos;shadow&apos;,
        text: &apos;Shadow&apos;
      }
    ]
  })
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        activeItem: 0,
        type: 'gradient',
        types: [{
                value: null,
                text: 'Default'
            },
            {
                value: 'flat',
                text: 'Flat'
            },
            {
                value: 'fund',
                text: 'Fund'
            },
            {
                value: 'border',
                text: 'border'
            },
            {
                value: 'gradient',
                text: 'Gradient'
            },
            {
                value: 'shadow',
                text: 'Shadow'
            }
        ]
    })
}
</script>