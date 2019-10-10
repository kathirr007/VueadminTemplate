<!-- =========================================================================================
    File Name: ChartLineChart.vue
    Description: Create line chart
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Line Chart" class="mb-base" code-toggler>

        <div class="mt-5">
            <chartjs-component-line-chart :height=250 :data="data" :options="options"></chartjs-component-line-chart>
        </div>

        <template slot="codeContainer">
&lt;script&gt;
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: &quot;Africa&quot;,
          borderColor: &quot;#3e95cd&quot;,
          fill: false
        }, {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: &quot;Asia&quot;,
          borderColor: &quot;#8e5ea2&quot;,
          fill: false
        }, {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: &quot;Europe&quot;,
          borderColor: &quot;#3cba9f&quot;,
          fill: false
        }, {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: &quot;Latin America&quot;,
          borderColor: &quot;#e8c3b9&quot;,
          fill: false
        }, {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: &quot;North America&quot;,
          borderColor: &quot;#c45850&quot;,
          fill: false
        }]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import ChartjsComponentLineChart from "./charts-components/ChartjsComponentLineChart.vue"
export default {
    data() {
        return {
            data: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                    label: "Africa",
                    borderColor: "#7367F0",
                    fill: false
                }, {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: "Asia",
                    borderColor: "#28C76F",
                    fill: false
                }, {
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: "Europe",
                    borderColor: "#EA5455",
                    fill: false
                }, {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Latin America",
                    borderColor: "#FF9F43",
                    fill: false
                }, {
                    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                    label: "North America",
                    borderColor: "#1E1E1E",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'World population per region (in millions)'
                }
            }
        }
    },
    components: {
        ChartjsComponentLineChart
    }
}
</script>