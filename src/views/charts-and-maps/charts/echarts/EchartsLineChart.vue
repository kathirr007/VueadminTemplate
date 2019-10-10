<!-- =========================================================================================
	File Name: ChartLineChart.vue
	Description: Create bar chart
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Line Chart" class="mb-base" code-toggler>

		<div class="mt-5">
			<e-charts :options="line" theme="ovilia-green" ref="line" auto-resize />
		</div>

		<template slot="codeContainer">
&lt;template&gt;
  &lt;e-charts :options=&quot;line&quot; theme=&quot;ovilia-green&quot; ref=&quot;line&quot; auto-resize /&gt;
&lt;/template&gt;

&lt;script&gt;
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import theme from './theme.json'

ECharts.registerTheme('ovilia-green', theme)

export default {
  data() {
    let data = [[&quot;2000-06-05&quot;,116],[&quot;2000-06-06&quot;,129],[&quot;2000-06-07&quot;,135],[&quot;2000-06-08&quot;,86],[&quot;2000-06-09&quot;,73],[&quot;2000-06-10&quot;,85],[&quot;2000-06-11&quot;,73],[&quot;2000-06-12&quot;,68],[&quot;2000-06-13&quot;,92],[&quot;2000-06-14&quot;,130],[&quot;2000-06-15&quot;,245],[&quot;2000-06-16&quot;,139],[&quot;2000-06-17&quot;,115],[&quot;2000-06-18&quot;,111],[&quot;2000-06-19&quot;,309],[&quot;2000-06-20&quot;,206],[&quot;2000-06-21&quot;,137],[&quot;2000-06-22&quot;,128],[&quot;2000-06-23&quot;,85],[&quot;2000-06-24&quot;,94],[&quot;2000-06-25&quot;,71],[&quot;2000-06-26&quot;,106],[&quot;2000-06-27&quot;,84],[&quot;2000-06-28&quot;,93],[&quot;2000-06-29&quot;,85],[&quot;2000-06-30&quot;,73],[&quot;2000-07-01&quot;,83],[&quot;2000-07-02&quot;,125],[&quot;2000-07-03&quot;,107],[&quot;2000-07-04&quot;,82],[&quot;2000-07-05&quot;,44],[&quot;2000-07-06&quot;,72],[&quot;2000-07-07&quot;,106],[&quot;2000-07-08&quot;,107],[&quot;2000-07-09&quot;,66],[&quot;2000-07-10&quot;,91],[&quot;2000-07-11&quot;,92],[&quot;2000-07-12&quot;,113],[&quot;2000-07-13&quot;,107],[&quot;2000-07-14&quot;,131],[&quot;2000-07-15&quot;,111],[&quot;2000-07-16&quot;,64],[&quot;2000-07-17&quot;,69],[&quot;2000-07-18&quot;,88],[&quot;2000-07-19&quot;,77],[&quot;2000-07-20&quot;,83],[&quot;2000-07-21&quot;,111],[&quot;2000-07-22&quot;,57],[&quot;2000-07-23&quot;,55],[&quot;2000-07-24&quot;,60]];
    var dateList = data.map(function (item) {
        return item[0];
    });
    var valueList = data.map(function (item) {
        return item[1];
    });

    return {
      line: {

          // Make gradient line here
          visualMap: [{
              show: false,
              type: 'continuous',
              seriesIndex: 0,
              min: 0,
              max: 400
          }],
          tooltip: {
              trigger: 'axis'
          },
          xAxis: {
              data: dateList
          },
          yAxis: {
              splitLine: {show: false},
          },
          series: {
              type: 'line',
              showSymbol: false,
              data: valueList
          }
      },
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
import 'echarts/lib/chart/line'
import theme from './theme.json'

ECharts.registerTheme('ovilia-green', theme)

export default {
    data() {
        let data = [
            ["2000-06-05", 116],
            ["2000-06-06", 129],
            ["2000-06-07", 135],
            ["2000-06-08", 86],
            ["2000-06-09", 73],
            ["2000-06-10", 85],
            ["2000-06-11", 73],
            ["2000-06-12", 68],
            ["2000-06-13", 92],
            ["2000-06-14", 130],
            ["2000-06-15", 245],
            ["2000-06-16", 139],
            ["2000-06-17", 115],
            ["2000-06-18", 111],
            ["2000-06-19", 309],
            ["2000-06-20", 206],
            ["2000-06-21", 137],
            ["2000-06-22", 128],
            ["2000-06-23", 85],
            ["2000-06-24", 94],
            ["2000-06-25", 71],
            ["2000-06-26", 106],
            ["2000-06-27", 84],
            ["2000-06-28", 93],
            ["2000-06-29", 85],
            ["2000-06-30", 73],
            ["2000-07-01", 83],
            ["2000-07-02", 125],
            ["2000-07-03", 107],
            ["2000-07-04", 82],
            ["2000-07-05", 44],
            ["2000-07-06", 72],
            ["2000-07-07", 106],
            ["2000-07-08", 107],
            ["2000-07-09", 66],
            ["2000-07-10", 91],
            ["2000-07-11", 92],
            ["2000-07-12", 113],
            ["2000-07-13", 107],
            ["2000-07-14", 131],
            ["2000-07-15", 111],
            ["2000-07-16", 64],
            ["2000-07-17", 69],
            ["2000-07-18", 88],
            ["2000-07-19", 77],
            ["2000-07-20", 83],
            ["2000-07-21", 111],
            ["2000-07-22", 57],
            ["2000-07-23", 55],
            ["2000-07-24", 60]
        ];
        var dateList = data.map(function(item) {
            return item[0];
        });
        var valueList = data.map(function(item) {
            return item[1];
        });

        return {
            line: {
                visualMap: [{
                    show: false,
                    type: 'continuous',
                    seriesIndex: 0,
                    min: 0,
                    max: 400
                }],
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: dateList
                },
                yAxis: {
                    splitLine: { show: false },
                },
                series: {
                    type: 'line',
                    showSymbol: false,
                    data: valueList
                }
            },
        }
    },
    components: {
        ECharts
    }
}
</script>