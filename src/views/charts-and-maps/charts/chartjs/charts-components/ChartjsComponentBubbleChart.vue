<!-- =========================================================================================
	File Name: ChartjsComponentBubbleChart.vue
	Description: Chartjs component - Bubble Chart
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<script>
import { Bubble } from 'vue-chartjs'

export default {
    extends: Bubble,
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