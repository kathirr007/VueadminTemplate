<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter justify-center items-center">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-2/5 m-4">
            <vx-card>
                <div class="vx-card__title mb-6">
                    <h2 class="text-center">We are launching soon</h2>
                </div>
                <img src="../../assets/images/pages/rocket.png" alt="coming-soon" class="mx-auto mb-2" width="150">
                <!-- <p>Thank you for checking out our app. We are under construction, we will be here soon with our new awesome app. </p> -->
                <div class="count-down">
                    <countdown :time="new Date('03/09/2021 00:00:00').getTime() - new Date().getTime()">
                        <template slot-scope="props">
                            <div class="single-counter">
                                <span class="timer">{{ props.days }}</span>
                                <span>Days</span>
                            </div>
                            <div class="single-counter">
                                <span class="timer">{{ props.hours }}</span>
                                <span>Hours</span>
                            </div>
                            <div class="single-counter">
                                <span class="timer">{{ props.minutes }}</span>
                                <span>Minutes</span>
                            </div>
                            <div class="single-counter">
                                <span class="timer">{{ props.seconds }}</span>
                                <span>Seconds</span>
                            </div>
                        </template>
                    </countdown>
                </div>
                <vs-divider position="center">Subscribe</vs-divider>
                <div class="subscription">
                    <span>If you would like to be notified when our app is live, Please subscribe to our mailing list.</span>
                    <vs-input type="email" label-placeholder="Email" v-model="value1" class="w-full mb-4" />
                    <vs-button class="w-full">Subscribe</vs-button>
                </div>

            </vx-card>
        </div>
    </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
export default {
    data() {
        return {
            value1: ''
        }
    },
    components: {
        'countdown': VueCountdown
    }
}
</script>
