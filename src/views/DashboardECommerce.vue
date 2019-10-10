<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="UsersIcon" statistic="92.6k" statisticTitle="Subscribers Gained" :chartData="analyticsData.subscribersGained" type='area'></statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="DollarSignIcon" statistic="97.5K" statisticTitle="Revenue Generated" :chartData="analyticsData.revenueGenerated" color='success' type='area'></statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="ShoppingCartIcon" statistic="36%" statisticTitle="Quarterly Sales" :chartData="analyticsData.quarterlySales" color='danger' type='area'></statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="ShoppingBagIcon" statistic="97.5K" statisticTitle="Orders Received" :chartData="analyticsData.ordersRecevied" color='warning' type='area'></statistics-card-line>
            </div>

        </div>

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

        <div class="vx-row">

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
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

            <div class="vx-col w-full md:w-2/3 mb-base">
                <vx-card title="Client Retention">
                    <div class="flex">
                        <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-1 bg-primary"></div><span>New Clients</span></span>
                        <span class="flex items-center ml-4"><div class="h-3 w-3 rounded-full mr-1 bg-danger"></div><span>Retained Clients</span></span>
                    </div>
                    <vue-apex-charts type=bar height=277 :options="analyticsData.clientRetentionBar.chartOptions" :series="analyticsData.clientRetentionBar.series" />
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <!-- Sessions By Device -->
            <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
                <vx-card title="Sessions By Device">
                    <!-- SLOT = ACTIONS -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <div slot="no-body">
                        <vue-apex-charts class="mt-5" type=donut height=325 :options="analyticsData.sessionsByDeviceDonut.chartOptions" :series="analyticsData.sessionsByDeviceDonut.series" />
                    </div>

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

            <!-- CHAT CARD -->
            <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
                <vx-card title="Chat" class="overflow-hidden">
                    <template slot="no-body">
                        <div class="chat-card-log">
                            <VuePerfectScrollbar ref="chatLogPS" class="scroll-area pt-6 px-6" :settings="settings">
                                <ul ref="chatLog">
                                        <li class="flex items-start" :class="{'flex-row-reverse': msg.isSent, 'mt-4': index}" v-for="(msg, index) in chatMsg" :key="index">
                                            <vs-avatar size="40px" class="m-0 flex-shrink-0" :class="msg.isSent ? 'ml-5' : 'mr-5'" :src="require(`@/assets/images/portrait/small/${msg.senderImg}`)"></vs-avatar>
                                            <div class="msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md" :class="{'chat-sent-msg bg-primary-gradient text-white': msg.isSent, 'border border-solid d-theme-border-grey-light': !msg.isSent}">
                                                <span>{{ msg.msg }}</span>
                                            </div>
                                        </li>
                                </ul>
                            </VuePerfectScrollbar>
                        </div>
                        <div class="flex bg-white chat-input-container p-6">
                            <vs-input class="mr-3 w-full" v-model="chatMsgInput" @keyup.enter="chatMsgInput = ''" placeholder="Type Your Message" ></vs-input>
                            <vs-button icon-pack="feather" icon="icon-send" @click="chatMsgInput = ''"></vs-button>
                        </div>
                    </template>
                </vx-card>
            </div>



            <!-- CUSTOMERS CHART -->
            <div class="vx-col w-full lg:w-1/3 lg:mt-0 mt-base">
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
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default{
    data() {
        return {
            analyticsData: analyticsData,
            chatMsgInput: '',
            contentImg1: 'content-img-1.jpg',
            profileUser1: 'avatar-s-18.png',
            profileUser2: 'avatar-s-1.png',
            profileUser3: 'avatar-s-12.png',
            overlayImg2: 'card-image-5.jpg',
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            chatMsg: [
                { senderImg: 'avatar-s-2.png', msg: 'Cake sesame snaps cupcake gingerbread', isSent: true },
                { senderImg: 'avatar-s-5.png', msg: 'Apple pie pie jujubes chupa chups muffin', isSent: false },
                { senderImg: 'avatar-s-2.png', msg: 'Chocolate cake', isSent: true },
                { senderImg: 'avatar-s-5.png', msg: 'Donut sweet pie oat cake dragée fruitcake', isSent: false },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: true },
                { senderImg: 'avatar-s-5.png', msg: 'Powder toffee tootsie roll macaroon cupcake.', isSent: false },
                { senderImg: 'avatar-s-2.png', msg: 'Apple pie oat cake brownie cotton candy cupcake chocolate bar dessert.', isSent: true },
                { senderImg: 'avatar-s-5.png', msg: 'Biscuit cake jujubes carrot cake topping sweet cake.', isSent: false },
            ]
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        VuePerfectScrollbar,
        ChangeTimeDurationDropdown
    },
    mounted() {
        this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    }
}
</script>

<style lang="scss">
.chat-card-log {
    height: 400px;

    .chat-sent-msg {
        background-color: #f2f4f7 !important;
    }
}
</style>
