<!-- =========================================================================================
    File Name: ChartScatterChart.vue
    Description: Create scatter chart
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Scatter Chart" class="" code-toggler>

        <div class="mt-5">
            <chartjs-component-scatter-chart :height=300 :data="data" :options="options"></chartjs-component-scatter-chart>
        </div>

        <template slot="codeContainer">
&lt;script&gt;
import { Scatter } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      data: {
        datasets: [{
          label: &quot;My First dataset&quot;,
          data: [{
            x: 65, y: 28,
          }, {
            x: 59, y: 48,
          }, {
            x: 80, y: 40,
          }, {
            x: 81, y: 19,
          }, {
            x: 56, y: 86,
          }, {
            x: 55, y: 27,
          }, {
            x: 40, y: 89,
          }],
          backgroundColor: &quot;rgba(209,212,219,.3)&quot;,
          borderColor: &quot;transparent&quot;,
          pointBorderColor: &quot;#D1D4DB&quot;,
          pointBackgroundColor: &quot;#FFF&quot;,
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 4,
        }, {
          label: &quot;My Second dataset&quot;,
          data: [{
            x: 45, y: 17,
          }, {
            x: 25, y: 62,
          }, {
            x: 16, y: 78,
          }, {
            x: 36, y: 88,
          }, {
            x: 67, y: 26,
          }, {
            x: 18, y: 48,
          }, {
            x: 76, y: 73,
          }],
          backgroundColor: &quot;rgba(81,117,224,.6)&quot;,
          borderColor: &quot;transparent&quot;,
          pointBorderColor: &quot;#5175E0&quot;,
          pointBackgroundColor: &quot;#FFF&quot;,
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 4,
        }]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 800,
        title: {
          display: false,
          text: 'Chart.js Scatter Chart'
        },
        scales: {
          xAxes: [{
            position: 'top',
            gridLines: {
              zeroLineColor: &quot;rgba(0,255,0,1)&quot;,
              color: &quot;#f3f3f3&quot;,
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: 'x axis'
            }
          }],
          yAxes: [{
            position: 'right',
            gridLines: {
              zeroLineColor: &quot;rgba(0,255,0,1)&quot;,
              color: &quot;#f3f3f3&quot;,
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
              labelString: 'y axis'
            }
          }]
        }
      },
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
import ChartjsComponentScatterChart from "./charts-components/ChartjsComponentScatterChart.vue"
export default {
    data() {
        return {
            data: {
                datasets: [{
                    label: "My First dataset",
                    data: [{
                        x: 65,
                        y: 28,
                    }, {
                        x: 59,
                        y: 48,
                    }, {
                        x: 80,
                        y: 40,
                    }, {
                        x: 81,
                        y: 19,
                    }, {
                        x: 56,
                        y: 86,
                    }, {
                        x: 55,
                        y: 27,
                    }, {
                        x: 40,
                        y: 89,
                    }],
                    backgroundColor: "rgba(209,212,219,.3)",
                    borderColor: "transparent",
                    pointBorderColor: "#D1D4DB",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                }, {
                    label: "My Second dataset",
                    data: [{
                        x: 45,
                        y: 17,
                    }, {
                        x: 25,
                        y: 62,
                    }, {
                        x: 16,
                        y: 78,
                    }, {
                        x: 36,
                        y: 88,
                    }, {
                        x: 67,
                        y: 26,
                    }, {
                        x: 18,
                        y: 48,
                    }, {
                        x: 76,
                        y: 73,
                    }],
                    backgroundColor: "rgba(81,117,224,.6)",
                    borderColor: "transparent",
                    pointBorderColor: "#5175E0",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                responsiveAnimationDuration: 800,
                title: {
                    display: false,
                    text: 'Chart.js Scatter Chart'
                },
                scales: {
                    xAxes: [{
                        position: 'top',
                        gridLines: {
                            zeroLineColor: "rgba(0,255,0,1)",
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'x axis'
                        }
                    }],
                    yAxes: [{
                        position: 'right',
                        gridLines: {
                            zeroLineColor: "rgba(0,255,0,1)",
                            color: "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'y axis'
                        }
                    }]
                }
            },
        }
    },
    components: {
        ChartjsComponentScatterChart
    }
}
</script>