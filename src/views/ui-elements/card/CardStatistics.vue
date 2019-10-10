<!-- =========================================================================================
    File Name: CardStatistics.vue
    Description: Statistics Card
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div>
        <!-- ROW 1 -->
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

        <!-- ROW 2 -->
        <div class="vx-row">

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                <statistics-card-line icon="MonitorIcon" icon-right statistic="78.9k" statisticTitle="Site Traffic" :chartData="analyticsData.siteTraffic"></statistics-card-line>
            </div>

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                <statistics-card-line icon="UserCheckIcon" icon-right statistic="659.8k" statisticTitle="Active Users" :chartData="analyticsData.activeUsers" color="success"></statistics-card-line>
            </div>

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                <statistics-card-line icon="MailIcon" icon-right statistic="28.7k" statisticTitle="Newsletter" :chartData="analyticsData.newsletter" color="warning"></statistics-card-line>
            </div>
        </div>
    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './analyticsData.js'

export default{
    data() {
        return {
            analyticsData: analyticsData,
        }
    },
    components: {
        StatisticsCardLine
    }
}
</script>