<!-- =========================================================================================
    File Name: ChartBarChart.vue
    Description: Create bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Bar Chart" class="mb-base" code-toggler>

        <div class="mt-5">
            <e-charts :options="bar" ref="bar" theme="ovilia-green" auto-resize />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;e-charts :options=&quot;bar&quot; ref=&quot;bar&quot; theme=&quot;ovilia-green&quot; auto-resize /&gt;
&lt;/template&gt;

&lt;script&gt;
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/bar'
import theme from './theme.json'

ECharts.registerTheme('ovilia-green', theme)

export default {
  data() {
    return {
      bar: {
        legend: {},
        tooltip: {},
        dataset: {
          // Provide data.
          source: [
            ['Product', '2015', '2016', '2017'],
            ['Matcha Latte', ...this.randomize()],
            ['Milk Tea', ...this.randomize()],
            ['Cheese Cocoa', ...this.randomize()],
            ['Walnut Brownie', ...this.randomize()]
          ]
        },
        // Declare X axis, which is a category axis, mapping
        // to the first column by default.
        xAxis: { type: 'category' },
        // Declare Y axis, which is a value axis.
        yAxis: {},
        // Declare several series, each of them mapped to a
        // column of the dataset by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

      },
    }
  },
  methods: {
    randomize() {
      return [0, 0, 0].map(v =&gt; {
        return Math.round(300 + Math.random() * 700) / 10
      })
    }
  },
  components: {
    ECharts
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/bar'
import theme from './theme.json'

ECharts.registerTheme('ovilia-green', theme)

export default {
    data() {
        return {
            bar: {
                legend: {},
                tooltip: {},
                dataset: {
                    // Provide data.
                    source: [
                        ['Product', '2015', '2016', '2017'],
                        ['Matcha Latte', ...this.randomize()],
                        ['Milk Tea', ...this.randomize()],
                        ['Cheese Cocoa', ...this.randomize()],
                        ['Walnut Brownie', ...this.randomize()]
                    ]
                },
                // Declare X axis, which is a category axis, mapping
                // to the first column by default.
                xAxis: { type: 'category' },
                // Declare Y axis, which is a value axis.
                yAxis: {},
                // Declare several series, each of them mapped to a
                // column of the dataset by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

            },
        }
    },
    methods: {
        randomize() {
            return [
                Math.round(300 + Math.random() * 700) / 10,
                Math.round(300 + Math.random() * 700) / 10,
                Math.round(300 + Math.random() * 700) / 10
            ]
        }
    },
    components: {
        ECharts
    }
}
</script>