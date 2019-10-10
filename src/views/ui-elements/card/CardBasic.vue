<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="demo-basic-card">
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card>
                    <div slot="no-body">
                        <img :src="require(`@/assets/images/pages/${card_1.contentImg1}`)" alt="content-img" class="responsive card-img-top">
                    </div>
                    <h5 class="mb-2">{{ card_1.title }}</h5>
                    <p class="text-grey">{{ card_1.subtitle }}</p>
                    <p class="text-grey">{{ card_1.subtitle_2 }}</p>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Download</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">View All</vs-button>
                    </div>
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card>
                    <img :src="require(`@/assets/images/pages/${card_2.contentImg2}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ card_2.title }}</h5>
                        <p class="text-grey">{{ card_2.subtitle }}</p>
                    </div>
                    <vs-divider></vs-divider>
                    <div class="flex justify-between flex-wrap">
                        <span>
                            <p class="text-xl">{{ card_2.footer_text_left_value }}</p>
                            <p class="text-grey">{{ card_2.footer_text_left_label }}</p>
                        </span>
                        <span>
                            <p class="text-xl">{{ card_2.footer_text_right_value }}</p>
                            <p class="text-grey">{{ card_2.footer_text_right_label }}</p>
                        </span>
                    </div>
                </vx-card>
            </div>

            <!-- CONTENT CARD - PROGRESS BAR/GOAL -->
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card>
                    <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ card_3.title }}</h5>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ card_3.current_progress }}</small>
                            <small class="text-grey">{{ card_3.progress_goal }}</small>
                        </div>
                        <vs-progress :percent="card_3.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_3.btn_left_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_3.btn_right_text }}</vs-button>
                    </div>
                </vx-card>
            </div>

            <!-- USER PROFILE CARD 2 - MINIMAL -->
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require(`@/assets/images/portrait/small/${card_4.userImg}`)" />
                    <div class="text-center">
                        <h4>{{ card_4.name }}</h4>
                        <p class="text-grey">{{ card_4.profession }}</p>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_4.btn_1_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_4.btn_2_text }}</vs-button>
                    </div>
                    <template slot="footer">
                        <vs-divider />
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_1_icon" svgClasses="h-5 w-5 text-warning stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_1 }}</span>
                            </span>
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_2_icon" svgClasses="h-5 w-5 text-primary stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_2 }}</span>
                            </span>
                        </div>
                    </template>
                </vx-card>
            </div>


            <!-- USER PRODFILE CARD -->
            <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                <vx-card class="p-2">
                    <div class="text-center">
                        <h4>{{ card_5.name }}</h4>
                        <p class="text-grey">{{ card_5.profession }}</p>
                    </div>
                    <vs-avatar class="mx-auto my-6 block" size="80px" :src="require(`@/assets/images/portrait/small/${ card_5.userImg }`)" />
                    <div class="flex justify-between text-center">
                        <span>
                            <p class="text-xl font-semibold">{{ card_5.user_meta_1_title }}</p>
                            <small class="text-grey">{{ card_5.user_meta_1_label }}</small>
                        </span>
                        <span>
                            <p class="text-xl font-semibold">{{ card_5.user_meta_2_title }}</p>
                            <small class="text-grey">{{ card_5.user_meta_2_label }}</small>
                        </span>
                        <span>
                            <p class="text-xl font-semibold">{{ card_5.user_meta_3_title }}</p>
                            <small class="text-grey">{{ card_5.user_meta_3_label }}</small>
                        </span>
                    </div>
                    <vs-button type="gradient" class="w-full mt-6" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_5.btn_text }}</vs-button>
                </vx-card>
            </div>

            <!-- USER PROFILE CARD - SCORE -->
            <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require(`@/assets/images/portrait/small/${ card_6.userImg }`)" />
                    <div class="text-center">
                        <h4>{{ card_6.name }}</h4>
                        <p class="text-grey">{{ card_6.profession }}</p>
                    </div>
                    <div class="mb-4 mt-base">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ card_6.current_progress }}</small>
                            <small class="text-grey">{{ card_6.progress_goal }}</small>
                        </div>
                        <vs-progress :percent="card_6.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_6.btn_left_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_6.btn_right_text }}</vs-button>
                    </div>
                </vx-card>
            </div>

            <!-- OVERLAY CARD -->
            <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                <vx-card class="overlay-card overflow-hidden">
                    <template slot="no-body">
                        <img :src="require(`@/assets/images/pages/${card_7.overlay_img}`)" alt="user-profile-cover" class="responsive">
                        <div class="card-overlay text-white flex flex-col justify-between">
                            <h4 class="text-white mb-4">{{ card_7.title }}</h4>
                            <p>{{ card_7.text }}</p>
                        </div>
                    </template>
                </vx-card>
            </div>

            <!-- OVERLAY CARD 2 -->
            <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                <vx-card class="overlay-card overflow-hidden">
                    <template slot="no-body">
                        <img :src="require('@/assets/images/pages/card-image-5.jpg')" alt="user-profile-cover" class="responsive blur-1">
                        <div class="card-overlay text-white">
                            <div class="flex flex-col justify-between h-full">
                                <div class="text-center mt-8 w-full">
                                    <h3 class="text-white mb-2 tracking-wide">Snowy</h3>
                                    <p class="mb-6">New York</p>
                                    <div class="flex justify-around">
                                        <feather-icon icon="CloudSnowIcon" svgClasses="w-24 h-24 text-white"></feather-icon>
                                        <h2 class="text-white text-big">-6 <sup class="text-2xl">o</sup> </h2>
                                    </div>
                                </div>
                                <div class="text-center w-full">
                                    <div class="flex justify-between px-8 mb-8 text-xl">
                                        <span>Precipitation</span>
                                        <span>48%</span>
                                    </div>
                                    <div class="flex justify-between px-8 mb-8 text-xl">
                                        <span>Humidity</span>
                                        <span>60%</span>
                                    </div>
                                    <div class="flex justify-between px-8 mb-8 text-xl">
                                        <span>Wind</span>
                                        <span>23 km/h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </vx-card>
            </div>

            <!-- CHAT CARD -->
            <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                <vx-card title="Chat" class="overflow-hidden">
                    <template slot="no-body">
                        <div class="chat-card-log">
                            <VuePerfectScrollbar ref="chatLogPS" class="scroll-area pt-6 px-6" :settings="settings">
                                <ul ref="chatLog">
                                        <li class="flex items-start" :class="{'flex-row-reverse': msg.isSent, 'mt-4': index}" v-for="(msg, index) in chatMsg" :key="index">
                                            <vs-avatar size="40px" class="m-0 flex-shrink-0" :class="msg.isSent ? 'ml-3' : 'mr-3'" :src="require(`@/assets/images/portrait/small/${msg.senderImg}`)"></vs-avatar>
                                            <div class="msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md" :class="{'chat-sent-msg bg-primary-gradient text-white': msg.isSent, 'border border-solid d-theme-border-grey-light': !msg.isSent}">
                                                <span>{{ msg.msg }}</span>
                                            </div>
                                        </li>
                                </ul>
                            </VuePerfectScrollbar>
                        </div>
                        <div class="flex bg-white p-6 chat-input-container">
                            <vs-input class="mr-3 w-full" v-model="chatMsgInput" @keyup.enter="chatMsgInput = ''" placeholder="Type Your Message" ></vs-input>
                            <vs-button icon-pack="feather" icon="icon-send" @click="chatMsgInput = ''"></vs-button>
                        </div>
                    </template>
                </vx-card>
            </div>

            <!-- CONTENT CARD - ICONS -->
            <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                <vx-card :title="card_9.title" :subtitle="card_9.subtitle">
                    <template slot="actions">
                        <feather-icon icon="MoreVerticalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <img :src="require(`@/assets/images/pages/${card_9.img}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="flex mt-6 flex-wrap">
                        <span class="flex mr-6"><feather-icon class="cursor-pointer" icon="ThumbsUpIcon" svgClasses="text-success stroke-current h-6 w-6"></feather-icon><span class="ml-2">368</span></span>
                        <span class="flex mr-6"><feather-icon class="cursor-pointer" icon="MessageSquareIcon" svgClasses="text-primary stroke-current h-6 w-6"></feather-icon><span class="ml-2">341</span></span>
                        <span class="flex mr-6"><feather-icon class="cursor-pointer" icon="ThumbsDownIcon" svgClasses="text-danger stroke-current h-6 w-6"></feather-icon><span class="ml-2">53</span></span>
                    </div>
                </vx-card>
            </div>

            <div class="vx-col w-full lg:w-2/3 mb-base">
                <vx-card class="overflow-hidden">
                    <template slot="no-body">
                        <video-player ref="player" class="media-video-player card-video" :options="playerOptions" />
                    </template>
                </vx-card>
            </div>

            <!-- ACTIVITY TIMELINE -->
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="Activity Timeline">
                    <ul class="activity-timeline">
                        <li>
                            <div class="timeline-icon bg-primary">
                                <feather-icon icon="PlusIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Task Added</p>
                                <span class="activity-desc">Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                            </div>
                            <small class="text-grey activity-e-time">25 days ago</small>
                        </li>
                        <li>
                            <div class="timeline-icon bg-warning">
                                <feather-icon icon="AlertCircleIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Task Updated</p>
                                <span class="activity-desc">Cupcake gummi bears soufflé caramels candy</span>
                            </div>
                            <small class="text-grey activity-e-time">15 days ago</small>
                        </li>
                        <li>
                            <div class="timeline-icon bg-success">
                                <feather-icon icon="CheckIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                            </div>
                            <div class="timeline-info">
                                <p class="font-semibold">Task Completed</p>
                                <span class="activity-desc">Candy ice cream cake. Halvah gummi bears</span>
                            </div>
                            <small class="text-grey activity-e-time">20 mins ago</small>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="Contact Form">
                    <vs-input placeholder="Name" class="w-full mb-4" v-model="name" />
                    <vs-input placeholder="Email" type="email" class="w-full mb-4" v-model="email" />
                    <vs-textarea label="Message" v-model='msg' />
                    <vs-button class="mr-4" @click="name = email = msg =''">Submit</vs-button>
                    <vs-button type="border" color="warning" @click="name = email = msg =''" class="mt-3">Cancel</vs-button>
                </vx-card>
            </div>
        </div>

        <!-- CARD WITH TABS COMPONENT -->
        <div class="vx-row match-height">
            <!-- SIMPLE CARD WITH TABS -->
            <div class="vx-col w-full md:w-1/2 mb-base">
                <vx-card>
                    <vs-tabs>
                        <vs-tab vs-label="HTML">
                            <div class="mt-3">
                                <p>Lollipop chocolate cake muffin pudding biscuit cheesecake. Pudding biscuit caramels jelly beans caramels. Pie macaroon wafer danish sweet caramels. Icing jelly-o cotton candy sweet roll brownie marshmallow marzipan icing. Candy canes apple pie icing. Tart macaroon pastry caramels chocolate bar. Gummies cupcake sesame snaps chocolate cookie sugar plum bear claw. Cheesecake chocolate cake dessert bear claw candy tiramisu soufflé.</p>
                            </div>
                        </vs-tab>
                        <vs-tab vs-label="JS">
                            <div class="mt-3">
                                <p>Wafer sesame snaps toffee brownie liquorice danish icing fruitcake croissant. Gingerbread chocolate cake danish pie gingerbread. Muffin donut fruitcake powder jelly lemon drops cheesecake. Croissant oat cake carrot cake tiramisu halvah. Cupcake cupcake wafer muffin topping danish cheesecake croissant. Liquorice donut liquorice lollipop sesame snaps lollipop ice cream macaroon danish. Cupcake chocolate cake chupa chups gummi bears macaroon.</p>
                            </div>
                        </vs-tab>
                        <vs-tab vs-label="OUTPUT">
                            <div class="mt-3">
                                <p>Cookie cheesecake fruitcake sweet roll gummi bears marzipan marshmallow marshmallow. Cheesecake muffin jujubes chocolate cake carrot cake jujubes croissant. Cake toffee carrot cake topping oat cake lemon drops toffee toffee marzipan. Gingerbread toffee marshmallow marshmallow caramels brownie donut cake. Cheesecake candy topping tart cotton candy chocolate bar jujubes powder chupa chups. Cupcake candy soufflé jelly beans. Icing lollipop tiramisu oat cake dessert.</p>
                            </div>
                        </vs-tab>
                    </vs-tabs>
                </vx-card>
            </div>

            <!-- CARD WITH VERTICAL TABS -->
            <div class="vx-col w-full md:w-1/2 mb-base">
                <vx-card>
                    <template slot="no-body">
                        <vs-tabs vs-position="left" vs-alignment="fixed">
                            <vs-tab vs-label="Features">
                                <div class="mt-1 pl-2">
                                    <p>Powder halvah dragée. Powder cupcake bear claw cookie sugar plum. Danish sesame snaps sugar plum brownie. Carrot cake fruitcake chocolate cake jelly beans toffee. Icing chocolate brownie. Biscuit candy canes jelly-o bonbon wafer jujubes. Chocolate cake sweet roll jelly-o chocolate bar. Liquorice tootsie roll ice cream sweet. Candy pie donut caramels bonbon macaroon dragée chupa chups gingerbread. Dragée fruitcake jujubes. Brownie caramels muffin caramels jelly apple pie.</p>
                                </div>
                            </vs-tab>
                            <vs-tab vs-label="Products">
                                <div class="mt-1 pl-2">
                                    <p>Cotton candy dessert dragée bonbon jelly beans icing sweet roll. Sesame snaps cake dessert chupa chups sweet powder biscuit. Jelly beans caramels croissant cheesecake. Liquorice chocolate cake macaroon cake. Fruitcake croissant carrot cake cookie halvah sesame snaps toffee. Cake tootsie roll cake jelly beans croissant sugar plum jujubes. Bear claw sesame snaps lollipop. Pudding biscuit donut sweet roll pie apple pie wafer jelly beans brownie. Lemon drops ice cream candy canes soufflé muffin.</p>
                                </div>
                            </vs-tab>
                            <vs-tab vs-label="Updates">
                                <div class="mt-1 pl-2">
                                    <p>Bear claw sesame snaps lollipop. Pudding biscuit donut sweet roll pie apple pie wafer jelly beans brownie. Lemon drops ice cream candy canes soufflé muffin. Caramels cookie macaroon sweet roll muffin liquorice brownie pie. Cupcake tootsie roll cupcake candy brownie icing bear claw jujubes cupcake. Marzipan pastry sesame snaps cotton candy chocolate cake tiramisu. Wafer apple pie cotton candy cotton candy icing.</p>
                                </div>
                            </vs-tab>
                            <vs-tab vs-label="Links">
                                <div class="mt-1 pl-2">
                                    <p>Gingerbread dessert apple pie. Bear claw cake ice cream cookie. Toffee jujubes jelly beans cookie muffin. Wafer sugar plum bonbon sweet roll chocolate cake pie tootsie roll jelly chocolate. Apple pie oat cake chocolate cake toffee lollipop sesame snaps chocolate bar. Chocolate liquorice pudding fruitcake toffee topping liquorice. Wafer topping cotton candy dessert carrot cake cotton candy. Pudding chocolate cake dragée cupcake. Pastry marzipan donut. Ice cream chocolate tart chupa chups liquorice marshmallow sweet roll jelly soufflé.</p>
                                </div>
                            </vs-tab>
                        </vs-tabs>
                    </template>
                </vx-card>
            </div>

            <!-- HORIZONTAL TABS WITH ICONS -->
            <div class="vx-col w-full md:w-1/2">
                <vx-card>
                    <vs-tabs vs-alignment="fixed" alignment="fixed">
                        <vs-tab vs-label="Profile" vs-icon="account_circle">
                            <div class="mt-3">
                                <p>Liquorice croissant chocolate chocolate cake. Bonbon dessert carrot cake fruitcake pudding sugar plum sweet gummies bear claw. Gummies marshmallow chocolate cake. Jelly icing cake carrot cake. Gummies marshmallow chocolate carrot cake lemon drops. Soufflé gingerbread cupcake chupa chups dragée halvah toffee liquorice. Jelly-o pie ice cream ice cream pudding sweet. </p>
                            </div>
                        </vs-tab>
                        <vs-tab vs-label="Messages" vs-icon="message">
                            <div class="mt-3">
                                <p>Jelly-o soufflé danish jelly-o jujubes oat cake caramels chocolate. Danish jelly chocolate bar jelly jujubes gummies halvah. Candy jujubes jujubes cheesecake bear claw sesame snaps cheesecake gingerbread. Toffee bonbon candy canes macaroon candy lollipop dragée. Brownie lemon drops chocolate cake pastry jelly biscuit.</p>
                            </div>
                        </vs-tab>
                    </vs-tabs>
                </vx-card>
            </div>

            <!-- CARD WITH VERTICAL ICON TABS -->
            <div class="vx-col w-full md:w-1/2 md:mt-0 mt-base">
                <vx-card>
                    <template slot="no-body">
                        <vs-tabs vs-position="left" alignment="fixed">
                            <vs-tab vs-label="Features" vs-icon="extension">
                                <div class="mt-1 pl-2">
                                    <p>Chocolate cake brownie candy canes marzipan. Chocolate cake powder jujubes bonbon tart cake bonbon sweet roll. Carrot cake sweet dragée ice cream pie candy canes sesame snaps tart halvah. Lemon drops pastry tart candy. Caramels jelly beans dessert dessert cupcake lollipop cake cotton candy. Pudding chupa chups ice cream tiramisu liquorice. Lollipop jelly pie tiramisu pudding marshmallow.</p>
                                </div>
                            </vs-tab>
                            <vs-tab vs-label="Products" vs-icon="store">
                                <div class="mt-1 pl-2">
                                    <p>Bear claw liquorice candy liquorice chocolate cake wafer. Gummi bears muffin cake icing pastry marshmallow lemon drops sweet chocolate. Marzipan apple pie jelly beans marshmallow jelly-o. Brownie danish bear claw. Dragée oat cake marzipan fruitcake caramels croissant tootsie roll cupcake sesame snaps. Cheesecake jujubes gingerbread apple pie bonbon caramels chocolate bar.</p>
                                </div>
                            </vs-tab>
                            <vs-tab vs-label="Updates" vs-icon="get_app">
                                <div class="mt-1 pl-2">
                                    <p>Cheesecake pie lollipop dragée candy icing jujubes fruitcake. Apple pie caramels apple pie gingerbread danish candy canes brownie liquorice topping. Icing dragée donut jelly caramels cake. Toffee gummi bears ice cream apple pie. Jujubes candy marzipan lollipop tiramisu biscuit apple pie liquorice. Lemon drops icing gummies cake marshmallow. </p>
                                </div>
                            </vs-tab>
                            <vs-tab vs-label="Links" vs-icon="link">
                                <div class="mt-1 pl-2">
                                    <p>Brownie marshmallow halvah wafer tart jelly. Chocolate cake apple pie halvah brownie pastry icing pudding marshmallow. Jelly beans candy canes sesame snaps chocolate cake sesame snaps chocolate cake candy tiramisu. Caramels sesame snaps candy canes cheesecake. Chocolate bar pie pastry liquorice tart. Cupcake biscuit cupcake halvah tiramisu muffin.</p>
                                </div>
                            </vs-tab>
                        </vs-tabs>
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default{
    data() {
        return {
            // card 1
            card_1: {
                contentImg1: 'content-img-1.jpg',
                title: 'Vuesax Admin',
                subtitle: 'By Pixinvent Creative Studio',
                subtitle_2: 'Elite Author',
            },

            // card 2
            card_2: {
                contentImg2: 'content-img-2.jpg',
                title: 'Vuesax Admin',
                subtitle: 'By Pixinvent Creative Studio',
                footer_text_left_value: '$ 4785.78',
                footer_text_left_label: 'Income',
                footer_text_right_value: '12 June 2019',
                footer_text_right_label: 'Delivery Date',
            },

            // card 3
            card_3: {
                contentImg3: 'content-img-3.jpg',
                title: 'Vuesax Admin',
                progress_done_per: 75,
                current_progress: '$ 5975',
                progress_goal: '$ 8000',
                btn_left_text: 'Add More',
                btn_right_text: 'Remove'

            },

            // card 4
            card_4: {
                userImg: 'avatar-s-12.png',
                name: 'Zoila Legore',
                profession: 'Backend Dev',
                btn_1_text: 'Follow',
                btn_2_text: 'Message',
                footer_text_1_icon: 'StarIcon',
                footer_text_1: '4.9',
                footer_text_2_icon: 'BriefcaseIcon',
                footer_text_2: '37 Projects',
            },

            // card_5
            card_5: {
                userImg: 'avatar-s-12.png',
                name: 'Wilhelmina Jamal',
                profession: 'Frontend Dev',
                user_meta_1_title: 568,
                user_meta_1_label: 'Uploads',
                user_meta_2_title: '78.6K',
                user_meta_2_label: 'Followers',
                user_meta_3_title: 112,
                user_meta_3_label: 'Following',
                btn_text: 'Follow'
            },


            // card 6
            card_6: {
                userImg: 'avatar-s-1.png',
                name: 'Jonell Binion',
                profession: 'Designer',
                progress_done_per: 72,
                current_progress: '720 Points',
                progress_goal: '1000',
                btn_left_text: 'Follow',
                btn_right_text: 'Message'
            },

            card_7: {
                overlay_img: 'card-image-6.jpg',
                title: 'Beautiful Overlay',
                text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop.',
            },

            // card 9
            card_9: {
                title: 'Vuesax Admin',
                subtitle: 'by Pixinvent Creative Studio',
                img: 'content-img-4.jpg',
                footer_text_1_icon: 'ThumbsUpIcon',
                footer_text_1: 368,
                footer_text_2_icon: 'MessageSquareIcon',
                footer_text_2: 341,
                footer_text_3_icon: 'ThumbsDownIcon',
                footer_text_3: 23,
            },

            name: '',
            email: '',
            msg: '',

            playerOptions: {
                height: '460',
                fluid: true,
                autoplay: false,
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [ { type: "video/mp4", src: "http://vjs.zencdn.net/v/oceans.mp4" } ],
                poster: 'https://goo.gl/xcCsDd',
            },
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            chatMsgInput: '',
            chatMsg: [
                { senderImg: 'avatar-s-2.png', msg: 'Cake sesame snaps cupcake gingerbread', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Apple pie pie jujubes chupa chups muffin', isSent: true },
                { senderImg: 'avatar-s-2.png', msg: 'Chocolate cake', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Donut sweet pie oat cake dragée fruitcake', isSent: true },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Pudding candy', isSent: true },
            ]
        }
    },
    components: {
        VuePerfectScrollbar,
        videoPlayer
    },
    mounted() {
        this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    }
}
</script>

<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
</style>
