<!-- =========================================================================================
    File Name: ChartBubbleChart.vue
    Description: Create bubble chart
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Bubble Chart" class="mb-base" code-toggler>

        <div class="mt-5">
            <chartjs-component-bubble-chart :height=250 :data="data" :options="options"></chartjs-component-bubble-chart>
        </div>

        <template slot="codeContainer">
&lt;script&gt;
import { Bubble } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      data: {
        labels: &quot;Africa&quot;,
        datasets: [{
          label: [&quot;China&quot;],
          backgroundColor: &quot;rgba(255,221,50,0.2)&quot;,
          borderColor: &quot;rgba(255,221,50,1)&quot;,
          data: [{
            x: 21269017,
            y: 5.245,
            r: 15
          }]
        }, {
          label: [&quot;Denmark&quot;],
          backgroundColor: &quot;rgba(60,186,159,0.2)&quot;,
          borderColor: &quot;rgba(60,186,159,1)&quot;,
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: [&quot;Germany&quot;],
          backgroundColor: &quot;rgba(0,0,0,0.2)&quot;,
          borderColor: &quot;#000&quot;,
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: [&quot;Japan&quot;],
          backgroundColor: &quot;rgba(193,46,12,0.2)&quot;,
          borderColor: &quot;rgba(193,46,12,1)&quot;,
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: &quot;Happiness&quot;
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: &quot;GDP (PPP)&quot;
            }
          }]
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
import ChartjsComponentBubbleChart from "./charts-components/ChartjsComponentBubbleChart.vue"
export default {
    data() {
        return {
            data: {
                labels: "Africa",
                datasets: [{
                    label: ["China"],
                    backgroundColor: "rgba(255,221,50,0.2)",
                    borderColor: "rgba(255,221,50,1)",
                    data: [{
                        x: 21269017,
                        y: 5.245,
                        r: 15
                    }]
                }, {
                    label: ["Denmark"],
                    backgroundColor: "rgba(60,186,159,0.2)",
                    borderColor: "rgba(60,186,159,1)",
                    data: [{
                        x: 258702,
                        y: 7.526,
                        r: 10
                    }]
                }, {
                    label: ["Germany"],
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderColor: "#000",
                    data: [{
                        x: 3979083,
                        y: 6.994,
                        r: 15
                    }]
                }, {
                    label: ["Japan"],
                    backgroundColor: "rgba(193,46,12,0.2)",
                    borderColor: "rgba(193,46,12,1)",
                    data: [{
                        x: 4931877,
                        y: 5.921,
                        r: 15
                    }]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Happiness"
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "GDP (PPP)"
                        }
                    }]
                }
            }
        }
    },
    components: {
        ChartjsComponentBubbleChart
    }
}
</script>