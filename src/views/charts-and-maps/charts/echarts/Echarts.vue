<!-- =========================================================================================
    File Name: Echarts.vue
    Description: Echarts (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-echarts-demo">
        <p class="mb-4">ECharts component for Vue.js. Read full documnetation <a href="https://github.com/ecomfe/vue-echarts" target="_blank" rel="nofollow">here</a></p>
        
        <div class="vx-row match-height">
            <div class="vx-col w-full">
                <echarts-bar-chart></echarts-bar-chart>
            </div>
            <div class="vx-col w-full">
                <echarts-line-chart></echarts-line-chart>
            </div>
            <div class="vx-col w-full">
                <echarts-pie-chart></echarts-pie-chart>
            </div>
            <div class="vx-col w-full">
                <echarts-scatter-chart></echarts-scatter-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <echarts-polar-chart></echarts-polar-chart>
            </div>
            <div class="vx-col w-full md:w-1/2">
                <echarts-radar-chart></echarts-radar-chart>
            </div>
        </div>
    </div>
</template>

<script>
import EchartsBarChart from './EchartsBarChart.vue'
import EchartsLineChart from './EchartsLineChart.vue'
import EchartsPieChart from './EchartsPieChart.vue'
import EchartsPolarChart from './EchartsPolarChart.vue'
import EchartsScatterChart from './EchartsScatterChart.vue'
import EchartsRadarChart from './EchartsRadarChart.vue'

export default {
    components: {
        EchartsBarChart,
        EchartsLineChart,
        EchartsPieChart,
        EchartsPolarChart,
        EchartsScatterChart,
        EchartsRadarChart,
    }
}
</script>