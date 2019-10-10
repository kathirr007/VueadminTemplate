<!-- =========================================================================================
    File Name: ChartRadarChart.vue
    Description: Create radar chart
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Radar Chart" class="mb-base" code-toggler>

        <div class="mt-5">
            <chartjs-component-radar-chart :height=250 :data="data" :options="options"></chartjs-component-radar-chart>
        </div>

        <template slot="codeContainer">
&lt;script&gt;
import { Radar } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      data: {
        labels: [&quot;Africa&quot;, &quot;Asia&quot;, &quot;Europe&quot;, &quot;Latin America&quot;, &quot;North America&quot;],
        datasets: [{
          label: &quot;1950&quot;,
          fill: true,
          backgroundColor: &quot;rgba(179,181,198,0.2)&quot;,
          borderColor: &quot;rgba(179,181,198,1)&quot;,
          pointBorderColor: &quot;#fff&quot;,
          pointBackgroundColor: &quot;rgba(179,181,198,1)&quot;,
          data: [8.77, 55.61, 21.69, 6.62, 6.82]
        }, {
          label: &quot;2050&quot;,
          fill: true,
          backgroundColor: &quot;rgba(255,99,132,0.2)&quot;,
          borderColor: &quot;rgba(255,99,132,1)&quot;,
          pointBorderColor: &quot;#fff&quot;,
          pointBackgroundColor: &quot;rgba(255,99,132,1)&quot;,
          pointBorderColor: &quot;#fff&quot;,
          data: [25.48, 54.16, 7.61, 8.06, 4.45]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Distribution in % of world population'
        }
      }
    }
  }
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import ChartjsComponentRadarChart from "./charts-components/ChartjsComponentRadarChart.vue"
export default {
    data() {
        return {
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [{
                    label: "1950",
                    fill: true,
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    data: [8.77, 55.61, 21.69, 6.62, 6.82]
                }, {
                    label: "2050",
                    fill: true,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    data: [25.48, 54.16, 7.61, 8.06, 4.45]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Distribution in % of world population'
                }
            }
        }
    },
    components: {
        ChartjsComponentRadarChart
    }
}
</script>