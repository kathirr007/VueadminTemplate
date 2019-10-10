<!-- =========================================================================================
    File Name: ColorsGradient.vue.vue
    Description: Theme's main colors(primary, success etc.) with gradient
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Gradient Colors" code-toggler>
        
        <p>We have make gradient color based on our default color:</p>

        <vx-list :list="defaultColors"></vx-list>

        <p class="mb-5">For each color, we think has its functionality in the application as alerts of errors (<strong>danger</strong>), warnings to the user (<strong>warning</strong>), communications of approval (<strong>success</strong>), or main color of the application (<strong>primary</strong>).</p>

        <ul class="demo-alignment text-white">
            <li class="bg-primary-gradient text-center">
                primary gradient
            </li>
            <li class="bg-success-gradient text-center">
                success gradient
            </li>
            <li class="bg-danger-gradient text-center">
                danger gradient
            </li>
            <li class="bg-warning-gradient text-center">
                warning gradient
            </li>
            <li class="bg-dark-gradient text-center">
                dark <br> gradient
            </li>
        </ul>

        <template slot="codeContainer">
&lt;ul class=&quot;demo-alignment text-white&quot;&gt;
  &lt;li class=&quot;bg-primary-gradient&quot;&gt;primary gradient&lt;/li&gt;
  &lt;li class=&quot;bg-success-gradient&quot;&gt;success gradient&lt;/li&gt;
  &lt;li class=&quot;bg-danger-gradient&quot;&gt;danger gradient&lt;/li&gt;
  &lt;li class=&quot;bg-warning-gradient&quot;&gt;warning gradient&lt;/li&gt;
  &lt;li class=&quot;bg-dark-gradient&quot;&gt;dark gradient&lt;/li&gt;
&lt;/ul&gt;
        </template>

    </vx-card>
</template>

<script>
    export default{
        data() {
            return {
                'defaultColors': [
                    'primary gradient',
                    'success gradient',
                    'danger gradient',
                    'warning gradient',
                    'dark gradient',
                ],
            }
        },
    }
</script>