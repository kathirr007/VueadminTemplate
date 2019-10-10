<!-- =========================================================================================
    File Name: ApexCharts.vue
    Description: Apex Charts Demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-chartist-demo">
        <p class="mb-4">A Vue.js component for ApexCharts. Read full documnetation <a href="https://apexcharts.com/docs/installation/" target="_blank" rel="nofollow">here</a></p>
        
        <div class="vx-row">
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Line Chart" code-toggler>
                    <vue-apex-charts type="line" height="350" :options="apexChatData.lineChartSimple.chartOptions" :series="apexChatData.lineChartSimple.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.lineChartSimpleCode }}
                    </template>
                </vx-card>
            </div>

            <!-- LINE AREA CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Line Area Chart" code-toggler>
                    <vue-apex-charts type="area" height="350" :options="apexChatData.lineAreaChartSpline.chartOptions" :series="apexChatData.lineAreaChartSpline.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.lineAreaChartSplineCode }}
                    </template>
                </vx-card>
            </div>

            <!-- COLUMN CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Column Chart" code-toggler>
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.columnChart.chartOptions" :series="apexChatData.columnChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.columnChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- Bar CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Bar Chart" code-toggler>
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.barChart.chartOptions" :series="apexChatData.barChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.barChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- MIXED CHART -->
            <div class="vx-col w-full mb-base">
                <vx-card title="Mixed Chart" code-toggler>
                    <vue-apex-charts type="line" height="350" :options="apexChatData.mixedChart.chartOptions" :series="apexChatData.mixedChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.mixedChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- CANDLESTICK CHART -->
            <div class="vx-col w-full mb-base">
                <vx-card title="Candlestick Chart" code-toggler>
                    <vue-apex-charts type="candlestick" height="350" :options="apexChatData.candlestickChart.chartOptions" :series="apexChatData.candlestickChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.candlestickChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- BUBBLE CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="3D Bubble Chart" code-toggler>
                    <vue-apex-charts type="bubble" height="350" :options="apexChatData.bubbleChart.chartOptions" :series="apexChatData.bubbleChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.bubbleChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- SCATTER CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Scatter Chart" code-toggler>
                    <vue-apex-charts type="scatter" height="350" :options="apexChatData.scatterChart.chartOptions" :series="apexChatData.scatterChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.scatterChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- HEAT MAP CHART -->
            <div class="vx-col w-full mb-base">
                <vx-card title="Heat Map Chart" code-toggler>
                    <vue-apex-charts type="heatmap" height="350" :options="apexChatData.heatMapChart.chartOptions" :series="apexChatData.heatMapChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.heatMapChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- PIE CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Pie Chart" code-toggler>
                    <vue-apex-charts type="pie" height="350" :options="apexChatData.pieChart.chartOptions" :series="apexChatData.pieChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.pieChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- DONUT CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Donut Chart" code-toggler>
                    <vue-apex-charts type="donut" height="350" :options="apexChatData.donutChart.chartOptions" :series="apexChatData.donutChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.donutChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- RADIAL BAR CHART -->
            <div class="vx-col md:w-1/2 w-full">
                <vx-card title="Radial Bar Chart" code-toggler>
                    <vue-apex-charts type="radialBar" height="350" :options="apexChatData.radialBarChart.chartOptions" :series="apexChatData.radialBarChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.radialBarChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- RADAR CHART -->
            <div class="vx-col md:w-1/2 w-full">
                <vx-card title="Radar Chart" code-toggler>
                    <vue-apex-charts type="radar" height="350" :options="apexChatData.radarChart.chartOptions" :series="apexChatData.radarChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.radarChartCode }}
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData.js'

export default {
    data() {
        return {
            apexChatData: apexChatData
        }
    },
    components: {
        VueApexCharts
    }
}
</script>