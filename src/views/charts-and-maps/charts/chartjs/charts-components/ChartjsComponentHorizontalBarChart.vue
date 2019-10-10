<!-- =========================================================================================
	File Name: ChartjsComponentHorizontalBarChart.vue
	Description: Chartjs component - Horizontal Bar Chart
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,
    props: {
        data: {
            type: Object,
            default: null,
        },
        options: {
            type: Object,
            default: null,
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    }
}
</script>