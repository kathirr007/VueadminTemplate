<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">

      <!-- CARD 1: CONGRATS -->
      <div class="vx-col w-full lg:w-1/2 mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
                    <img src="../assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                    <img src="../assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
          <feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
          <h1 class="mb-6 text-white">Congratulations John,</h1>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">You have done <strong>57.6%</strong> more sales today. Check your new badge in your profile.</p>
        </vx-card>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="UsersIcon" statistic="92.6k" statisticTitle="Subscribers Gained" :chartData="analyticsData.subscribersGained" type='area'></statistics-card-line>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="ShoppingBagIcon" statistic="97.5K" statisticTitle="Orders Received" :chartData="analyticsData.ordersRecevied" color='warning' type='area'></statistics-card-line>
      </div>
    </div>

    <div class="vx-row">

      <!-- CARD 4: SESSION -->
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
              <p>Goal: $100000</p>
              <vs-progress class="block mt-1" :percent="50" color="primary"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Users: 100K</p>
              <vs-progress class="block mt-1" :percent="60" color="warning"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Retention: 90%</p>
              <vs-progress class="block mt-1" :percent="70" color="danger"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Duration: 1yr</p>
              <vs-progress class="block mt-1" :percent="90" color="success"></vs-progress>
            </div>
          </div>
        </vx-card>
      </div>

      <!-- CARD 5: SUPPORT TRACKER -->
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

        <div class="vx-row">
            <!-- CARD 6: Product Orders -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Product Orders">
                    <!-- CARD ACTION -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <div slot="no-body">
                        <vue-apex-charts type=radialBar height=370 :options="analyticsData.productOrdersRadialBar.chartOptions" :series="analyticsData.productOrdersRadialBar.series" />
                    </div>

                    <ul>
                        <li v-for="orderData in analyticsData.productOrdersRadialBar.analyticsData" :key="orderData.orderType" class="flex mb-3 justify-between">
                            <span class="flex items-center">
                                    <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid" :class="`border-${orderData.color}`"></span>
                                    <span class="font-semibold">{{ orderData.orderType }}</span>
                            </span>
                            <span>{{ orderData.counts }}</span>
                        </li>
                        <!-- <li><span class="inline-block h-2 w-2 rounded-full mr-2 bg-primary"></span>Finished - 23,043</li> -->
                    </ul>
                </vx-card>
            </div>

            <!-- CARD 7: Sales Stats -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
              <vx-card title="Sales Stats" subtitle="Last 6 Months">
                <template slot="actions">
                  <feather-icon icon="MoreVerticalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </template>
                <div class="flex">
                  <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-1 bg-primary"></div><span>Sales</span></span>
                  <span class="flex items-center ml-4"><div class="h-3 w-3 rounded-full mr-1 bg-success"></div><span>Visits</span></span>
                </div>
                <div slot="no-body-bottom">
                  <vue-apex-charts type=radar height=400 :options="analyticsData.statisticsRadar.chartOptions" :series="analyticsData.statisticsRadar.series" />
                </div>
              </vx-card>
            </div>

            <!-- CARD 8: Activity Timeline -->
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Activity Timeline">
                    <ul class="activity-timeline">
                        <li>
                            <div class="timeline-icon bg-primary">
                                <feather-icon icon="PlusIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Client Meeting</p>
                                <span class="activity-desc">Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                            </div>
                            <small class="text-grey activity-e-time">25 mins ago</small>
                        </li>
                        <li>
                            <div class="timeline-icon bg-warning">
                                <feather-icon icon="AlertCircleIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Email Newsletter</p>
                                <span class="activity-desc">Cupcake gummi bears soufflé caramels candy</span>
                            </div>
                            <small class="text-grey activity-e-time">15 days ago</small>
                        </li>
                        <li>
                            <div class="timeline-icon bg-danger">
                                <feather-icon icon="CheckIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Plan Webinar</p>
                                <span class="activity-desc">Candy ice cream cake. Halvah gummi bears</span>
                            </div>
                            <small class="text-grey activity-e-time">20 days ago</small>
                        </li>
                        <li>
                            <div class="timeline-icon bg-success">
                                <feather-icon icon="CheckIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Launch Website</p>
                                <span class="activity-desc">Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.</span>
                            </div>
                            <small class="text-grey activity-e-time">25 days ago</small>
                        </li>
                        <li>
                            <div class="timeline-icon bg-primary">
                                <feather-icon icon="CheckIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Marketing</p>
                                <span class="activity-desc">Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.</span>
                            </div>
                            <small class="text-grey activity-e-time">28 days ago</small>
                        </li>
                    </ul>
                </vx-card>
            </div>
        </div>

    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="vx-col w-full">
        <vx-card title="Dispatched Orders">
          <div slot="no-body" class="mt-4">
            <vs-table :data="users">
              <template slot="thead">
                <vs-th>ORDER NO.</vs-th>
                <vs-th>STATUS</vs-th>
                <vs-th>OPERATORS</vs-th>
                <vs-th>LOCATION</vs-th>
                <vs-th>DISTANCE</vs-th>
                <vs-th>START DATE</vs-th>
                <vs-th>EST DELIVERY DATE</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <span>#{{data[indextr].orderNo}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].status">
                    <span class="flex items-center px-2 py-1 rounded"><div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + data[indextr].statusColor"></div>{{data[indextr].status}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <ul class="users-liked user-list">
                        <li v-for="(user, userIndex) in data[indextr].usersLiked" :key="userIndex">
                            <vx-tooltip :text="user.name" position="bottom">
                                <vs-avatar :src="require(`@/assets/images/portrait/small/${user.img}`)" size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                            </vx-tooltip>
                        </li>
                    </ul>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].location}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].distance}}</span>
                    <vs-progress :percent="data[indextr].distPercent" :color="data[indextr].statusColor"></vs-progress>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].startDate}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].estDelDate}}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>

        </vx-card>
      </div>
    </div>

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default {
    data() {
        return {
            analyticsData: analyticsData,
            isImp: false,
            navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
            show: false,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
            'tableList': [
                'vs-th: Component',
                'vs-tr: Component',
                'vs-td: Component',
                'thread: Slot',
                'tbody: Slot',
                'header: Slot'
            ],
            users: [{
                    "orderNo": 879985,
                    "status": "Moving",
                    "statusColor": "success",
                    "operator": "Cinar Knowles",
                    "operatorImg": "avatar-s-2.png",
                    usersLiked: [
                        { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                        { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                        { name: 'Darcey Nooner', img: 'avatar-s-8.png' }
                    ],
                    "location": "Anniston, Alabama",
                    "distance": "130 km",
                    "distPercent": 80,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 156897,
                    "status": "Pending",
                    "statusColor": "warning",
                    "operator": "Britany Ryder",
                    "operatorImg": "avatar-s-4.png",
                    usersLiked: [
                        { name: 'Trina Lynes', img: 'avatar-s-1.png' },
                        { name: 'Lilian Nenez', img: 'avatar-s-2.png' },
                        { name: 'Alberto Glotzbach', img: 'avatar-s-3.png' }
                    ],
                    "location": "Cordova, Alaska",
                    "distance": "234 km",
                    "distPercent": 60,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 568975,
                    "status": "Moving",
                    "statusColor": "success",
                    "operator": "Kishan Ashton",
                    "operatorImg": "avatar-s-1.png",
                    usersLiked: [
                        { name: 'Lai Lewandowski', img: 'avatar-s-6.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                        { name: 'Darcey Nooner', img: 'avatar-s-8.png' },
                        { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                        { name: 'Jeffrey Gerondale', img: 'avatar-s-9.png' },
                    ],
                    "location": "Florence, Alabama",
                    "distance": "168 km",
                    "distPercent": 70,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 245689,
                    "status": "Canceled",
                    "statusColor": "danger",
                    "operator": "Anabella Elliott",
                    "operatorImg": "avatar-s-6.png",
                    usersLiked: [
                        { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' }
                    ],
                    "location": "Clifton, Arizona",
                    "distance": "125 km",
                    "distPercent": 95,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                }

            ]
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown
    },
}
</script>

<style lang="scss">
#dashboard-analytics {
  .greet-user{
    position: relative;
    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
</style>
