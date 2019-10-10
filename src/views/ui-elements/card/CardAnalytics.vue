    <!-- =========================================================================================
    File Name: CardAnalytics.vue
    Description: Analytic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="demo-card-analytics">
        <!-- ROW 1 -->
        <div class="vx-row">
            <!-- SESSIONS BY DEVICES -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Sessions By Device">
                    <!-- SLOT = ACTION -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <!-- CHART -->
                    <div slot="no-body">
                        <vue-apex-charts type="donut" height="330" class="mt-5" :options="analyticsData.sessionsByDeviceDonut.chartOptions" :series="analyticsData.sessionsByDeviceDonut.series" />
                    </div>

                    <!-- CHART DATA -->
                    <ul>
                        <li v-for="deviceData in analyticsData.sessionsByDeviceDonut.analyticsData" :key="deviceData.device" class="flex mb-3">
                            <feather-icon :icon="deviceData.icon" :svgClasses="[`h-5 w-5 stroke-current text-${deviceData.color}`]"></feather-icon>
                            <span class="ml-2 inline-block font-semibold">{{ deviceData.device }}</span>
                            <span class="mx-2">-</span>
                            <span class="mr-4">{{ deviceData.sessionsPercentgae }}%</span>
                            <div class="ml-auto flex -mr-1">
                            <span class="mr-1">{{ deviceData.comparedResultPercentage }}%</span>
                            <feather-icon :icon=" deviceData.comparedResultPercentage < 0 ? 'ArrowDownIcon' : 'ArrowUpIcon'" :svgClasses="[deviceData.comparedResultPercentage < 0 ? 'text-danger' : 'text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                            </div>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- PRODUCT ORDERS -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Product Orders">
                    <!-- SLOT = ACTIONS -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <!-- CHART -->
                    <div slot="no-body">
                        <vue-apex-charts type="radialBar" height="350" :options="analyticsData.productOrdersRadialBar.chartOptions" :series="analyticsData.productOrdersRadialBar.series" />
                    </div>

                    <!-- CHART DATA -->
                    <ul>
                        <li v-for="orderData in analyticsData.productOrdersRadialBar.analyticsData" :key="orderData.orderType" class="flex mb-3 justify-between">
                            <span class="flex items-center">
                                    <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid" :class="`border-${orderData.color}`"></span>
                                    <span class="font-semibold">{{ orderData.orderType }}</span>
                            </span>
                            <span>{{ orderData.counts }}</span>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- CUSTOMERS CHART -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Customers">
                    <!-- SLOT = ACTIONS -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <div slot="no-body">
                        <!-- CHART -->
                        <vue-apex-charts type=pie height=345 class="mt-2" :options="analyticsData.customersPie.chartOptions" :series="analyticsData.customersPie.series" />

                        <!-- CHART DATA -->
                        <ul class="mb-1">
                            <li v-for="customerData in analyticsData.customersPie.analyticsData" :key="customerData.customerType" class="flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0">
                                <span class="flex items-center">
                                    <span class="inline-block h-3 w-3 rounded-full mr-2" :class="`bg-${customerData.color}`"></span>
                                    <span class="font-semibold">{{ customerData.customerType }}</span>
                                </span>
                                <span>{{ customerData.counts }}</span>
                            </li>
                        </ul>
                    </div>

                </vx-card>
            </div>

        </div>

        <!-- ROW 2 -->
        <div class="vx-row">
            <!-- SALES CHART - RADIAL -->
            <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
                <vx-card title="Sales" subtitle="Last 6 Months">
                    <!-- SLOT = ACTION -->
                    <template slot="actions">
                        <feather-icon icon="MoreVerticalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <!-- LABELS -->
                    <div class="flex">
                        <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-2 bg-primary"></div><span>Sales</span></span>
                        <span class="flex items-center ml-5"><div class="h-3 w-3 rounded-full mr-2 bg-success"></div><span>Visits</span></span>
                    </div>
                    <!-- CHART -->
                    <div slot="no-body-bottom">
                        <vue-apex-charts type=radar :options="analyticsData.statisticsRadar.chartOptions" :series="analyticsData.statisticsRadar.series" />
                    </div>
                </vx-card>
            </div>

            <!-- SUPPORT TRACKER CHART+- -->
            <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
                <vx-card title="Support Tracker">
                    <!-- CARD ACTION -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <div slot="no-body">
                        <div class="vx-row text-center">
                            <div class="vx-col sm:w-1/5 w-full flex flex-col justify-between mb-4">
                                <div class="ml-6 mt-6">
                                    <h1 class="font-bold text-5xl">163</h1>
                                    <small>Tickets</small>
                                </div>
                            </div>
                            <div class="vx-col sm:w-4/5 justify-center mx-auto">
                                <vue-apex-charts type=radialBar height=250 :options="analyticsData.supportTrackerRadialBar.chartOptions" :series="analyticsData.supportTrackerRadialBar.series" />
                            </div>
                        </div>
                        <div class="flex flex-row justify-between px-8 pb-4">
                            <p class="text-center"><span class="block">New Tickets</span><span class="text-4xl">29</span></p>
                            <p class="text-center"><span class="block">Open Tickets</span><span class="text-4xl">63</span></p>
                            <p class="text-center"><span class="block">Response Time</span><span class="text-4xl">1d</span></p>

                        </div>
                    </div>
                </vx-card>
            </div>
        </div>

        <!-- ROW 1 -->
        <div class="vx-row">

            <!-- LINE CHART -->
            <div class="vx-col w-full md:w-2/3 mb-base">
                <vx-card title="Revenue">
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <div class="flex">
                            <div class="mr-6">
                                <p class="mb-1 font-semibold">This Month</p>
                                <p class="text-3xl text-success"><sup class="text-base mr-1">$</sup>86,589</p>
                            </div>
                            <div>
                                <p class="mb-1 font-semibold">Last Month</p>
                                <p class="text-3xl"><sup class="text-base mr-1">$</sup>73,683</p>
                            </div>
                        </div>
                        <vue-apex-charts type=line height=266 :options="analyticsData.revenueComparisonLine.chartOptions" :series="analyticsData.revenueComparisonLine.series" />
                    </div>
                </vx-card>
            </div>

            <!-- RADIAL CHART -->
            <div class="vx-col w-full md:w-1/3 mb-base">
                <vx-card title="Goal Overview">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="analyticsData.goalOverviewRadialBar.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center" slot="no-body-bottom">
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mt-4">Completed</p>
                            <p class="mb-4 text-3xl font-semibold">786,617</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mt-4">In Progress</p>
                            <p class="mb-4 text-3xl font-semibold">13,561</p>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>

        <!-- ROW 4 -->
        <div class="vx-row">
            <div class="vx-col w-full md:w-1/2 mb-base">
                <vx-card>
                    <div class="vx-row flex-col-reverse lg:flex-row">

                        <!-- LEFT COL -->
                        <div class="vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-between">
                            <div>
                                <h2 class="mb-1 font-bold">2.7K</h2>
                                <span class="font-medium">Avg Sessions</span>
                                <p class="mt-2 text-xl font-medium"><span class='text-success'>+5.2%</span> vs last 7 days</p>
                            </div>
                            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4">View Details</vs-button>
                        </div>

                        <!-- RIGHT COL -->
                        <div class="vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 mb-base">
                            <change-time-duration-dropdown class="self-end" />
                            <vue-apex-charts type=bar height=200 :options="analyticsData.salesBar.chartOptions" :series="analyticsData.salesBar.series" />
                        </div>

                    </div>
                    <vs-divider class="my-6"></vs-divider>
                    <div class="vx-row">
                        <div class="vx-col w-1/2 mb-3">
                            <small>Goal: $100000</small>
                            <vs-progress class="block mt-1" :percent="50" color="primary"></vs-progress>
                        </div>
                        <div class="vx-col w-1/2 mb-3">
                            <small>Users: 100K</small>
                            <vs-progress class="block mt-1" :percent="60" color="warning"></vs-progress>
                        </div>
                        <div class="vx-col w-1/2 mb-3">
                            <small>Retention: 90%</small>
                            <vs-progress class="block mt-1" :percent="70" color="danger"></vs-progress>
                        </div>
                        <div class="vx-col w-1/2 mb-3">
                            <small>Duration: 1yr</small>
                            <vs-progress class="block mt-1" :percent="90" color="success"></vs-progress>
                        </div>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-1/2 mb-base">
                <vx-card class="overflow-hidden">
                    <template slot="no-body">
                        <div class="flex justify-between items-center p-6 border border-solid d-theme-border-grey-light border-r-0 border-l-0 border-t-0">
                            <div>
                                <p><span class="font-semibold">2 task completed</span> out of 10</p>
                                <vs-progress :percent="20" color="primary"></vs-progress>
                            </div>
                            <span>Sat, 16 Feb</span>
                        </div>
                        <ul class="tasks-today-container">
                            <li class="px-6 py-4 tasks-today__task">
                                <div class="vx-row">
                                    <div class="vx-col w-full sm:w-auto">
                                        <p class="font-semibold text-lg">Refactor button component</p>
                                        <small>16 Feb 2019 - 2 hrs</small>
                                    </div>
                                    <div class="tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0">
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-check" size="small"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-edit-2" size="small" class="ml-3"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-trash" size="small" class="ml-3"></vs-button>
                                    </div>
                                </div>
                            </li>
                            <li class="px-6 py-4 tasks-today__task">
                                <div class="vx-row">
                                    <div class="vx-col w-full sm:w-auto">
                                        <p class="font-semibold text-lg">Submit report to admin</p>
                                        <small>16 Feb 2019 - 2 hrs</small>
                                    </div>
                                    <div class="tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0">
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-check" size="small"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-edit-2" size="small" class="ml-3"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-trash" size="small" class="ml-3"></vs-button>
                                    </div>
                                </div>
                            </li>
                            <li class="px-6 py-4 tasks-today__task">
                                <div class="vx-row">
                                    <div class="vx-col w-full sm:w-auto">
                                        <p class="font-semibold text-lg">Prepare presentation</p>
                                        <small>16 Feb 2019 - 2 hrs</small>
                                    </div>
                                    <div class="tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0">
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-check" size="small"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-edit-2" size="small" class="ml-3"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-trash" size="small" class="ml-3"></vs-button>
                                    </div>
                                </div>
                            </li>
                            <li class="px-6 py-4 tasks-today__task">
                                <div class="vx-row">
                                    <div class="vx-col w-full sm:w-auto">
                                        <p class="font-semibold text-lg">Calculate monthly income</p>
                                        <small>16 Feb 2019 - 2 hrs</small>
                                    </div>
                                    <div class="tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0">
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-check" size="small"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-edit-2" size="small" class="ml-3"></vs-button>
                                        <vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-trash" size="small" class="ml-3"></vs-button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </template>
                </vx-card>
            </div>
        </div>

        <!-- ROW 3 -->
        <div class="vx-row">
            <div class="vx-col w-full md:w-2/3 lg:w-3/4">
                <vx-card title="Sales">
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <vue-apex-charts type=line height=266 :options="analyticsData.salesLine.chartOptions" :series="analyticsData.salesLine.series" />
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
                <vx-card>
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <div>
                                <h1><sup class="text-lg">$</sup>23,597</h1>
                                <small><span class="text-grey">Deposits:</span> $20,065</small>
                            </div>
                            <p class="mt-2 mb-8 text-xl text-success font-medium">+5.2% ($956)</p>
                            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Add Funds</vs-button>
                        </div>
                        <div class="p-8 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0">
                            <div class="mb-4">
                                <small>Earned: $56,156</small>
                                <vs-progress :percent="50" color="success"></vs-progress>
                            </div>
                            <div>
                                <small>Duration: 2y</small>
                                <vs-progress :percent="50" color="warning"></vs-progress>
                            </div>
                        </div>
                    </template>
                </vx-card>
            </div>
        </div>

        <div class="vx-row mt-base">

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                <vx-card title="Browser Statistics">
                    <div v-for="(browser, index) in analyticsData.browserAnalytics" :key="browser.id" :class="{'mt-4': index}">
                        <div class="flex justify-between">
                            <div class="flex flex-col">
                                <span class="mb-1">{{ browser.name }}</span>
                                <h4>{{ browser.ratio }}%</h4>
                            </div>
                            <div class="flex flex-col text-right">
                                <span class="flex -mr-1">
                                    <span class="mr-1">{{ browser.comparedResult }}</span>
                                    <feather-icon :icon=" browser.comparedResult < 0 ? 'ArrowDownIcon' : 'ArrowUpIcon'" :svgClasses="[browser.comparedResult < 0 ? 'text-danger' : 'text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                                </span>
                                <span class="text-grey">{{ browser.time | time(true) }}</span>
                            </div>
                        </div>
                        <vs-progress :percent="browser.ratio"></vs-progress>
                    </div>
                </vx-card>
            </div>

            <div class="vx-col w-full md:w-2/3">
                <vx-card title="Client Retention">
                    <div class="flex">
                        <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-1 bg-warning"></div><span>New Clients</span></span>
                        <span class="flex items-center ml-4"><div class="h-3 w-3 rounded-full mr-1 bg-danger"></div><span>Retained Clients</span></span>
                    </div>
                    <vue-apex-charts type=bar height=266 :options="analyticsData.clientRetentionBar.chartOptions" :series="analyticsData.clientRetentionBar.series" />
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default {
    data() {
        return {
            analyticsData: analyticsData,
            statisticsChartData1: {
                chartHeight: '150px',
                id: 'static-chart-1',
                data: {
                    series: [
                        [10, 15, 7, 12, 3, 16]
                    ],
                },
                options: {
                    axisX: {
                        showGrid: false,
                        showLabel: false,
                    },
                    axisY: {
                        showLabel: false,
                        showGrid: false,
                        low: 0,
                        high: 20,
                        offset: 0
                    },
                    fullWidth: true
                },
                listener: {
                    created: function(data) {
                        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
                        defs.elem('linearGradient', {
                            id: 'lineLinearStats1',
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 0
                        }).elem('stop', {
                            offset: '0%',
                            'stop-color': 'rgba(157,33,254,1)'
                        }).parent().elem('stop', {
                            offset: '60%',
                            'stop-color': 'rgba(116,58,253,1)'
                        }).parent().elem('stop', {
                            offset: '75%',
                            'stop-color': 'rgba(99,68,252, 1)'
                        }).parent().elem('stop', {
                            offset: '90%',
                            'stop-color': 'rgba(69,85,252,1)'
                        });

                        return defs;
                    }
                },
            },
            statisticsChartData2: {
                chartHeight: '150px',
                id: 'static-chart-2',
                data: {
                    series: [
                        [3, 12, 7, 15, 7, 13]
                    ]
                },
                options: {
                    axisX: {
                        showGrid: false,
                        showLabel: false,
                    },
                    axisY: {
                        showLabel: false,
                        showGrid: false,
                        low: 0,
                        high: 20,
                        offset: 0
                    },
                    fullWidth: true
                },
                listener: {
                    created: function(data) {
                        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
                        defs.elem('linearGradient', {
                            id: 'lineLinearStats2',
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 0
                        }).elem('stop', {
                            offset: '0%',
                            'stop-color': 'rgba(157,33,254,1)'
                        }).parent().elem('stop', {
                            offset: '60%',
                            'stop-color': 'rgba(116,58,253,1)'
                        }).parent().elem('stop', {
                            offset: '75%',
                            'stop-color': 'rgba(99,68,252, 1)'
                        }).parent().elem('stop', {
                            offset: '90%',
                            'stop-color': 'rgba(69,85,252,1)'
                        });

                        return defs;
                    }
                },
            },
            statisticsChartData3: {
                chartHeight: '150px',
                id: 'static-chart-3',
                data: {
                    series: [
                        [16, 3, 10, 5, 15, 10]
                    ]
                },
                options: {
                    axisX: {
                        showGrid: false,
                        showLabel: false,
                    },
                    axisY: {
                        showLabel: false,
                        showGrid: false,
                        low: 0,
                        high: 20,
                        offset: 0
                    },
                    fullWidth: true
                },
                listener: {
                    created: function(data) {
                        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
                        defs.elem('linearGradient', {
                            id: 'lineLinearStats3',
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 0
                        }).elem('stop', {
                            offset: '0%',
                            'stop-color': 'rgba(157,33,254,1)'
                        }).parent().elem('stop', {
                            offset: '60%',
                            'stop-color': 'rgba(116,58,253,1)'
                        }).parent().elem('stop', {
                            offset: '75%',
                            'stop-color': 'rgba(99,68,252, 1)'
                        }).parent().elem('stop', {
                            offset: '90%',
                            'stop-color': 'rgba(69,85,252,1)'
                        });

                        return defs;
                    }
                },
            },
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown
    }
}
</script>


<style lang="scss">
#demo-card-analytics {
    .tasks-today-container {
        .tasks-today__task {
            transition: background .15s ease-out;
            .tasks-today__actions {
                display: none;
            }

            &:hover {
                background: rgba(var(--vs-primary),.04) ;
                .tasks-today__actions {
                    display: flex;
                }
            }
        }
    }
}
</style>
