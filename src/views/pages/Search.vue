<!-- =========================================================================================
    File Name: Search.vue
    Description: Search Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="search-page">
        <div class="search-page__search-bar flex items-center">
            <vs-input placeholder="Search" v-model="searchQuery" class="w-full input-rounded-full no-icon-border" icon="icon-search" icon-pack="feather" />
        </div>
        <div class="search-page__serch-menu flex flex-wrap items-center md:justify-between mt-8">
            <div class="flex flex-wrap">
                <span class="search-tab-filter">All</span>
                <span class="search-tab-filter">Images</span>
                <span class="search-tab-filter">Video</span>
                <span class="search-tab-filter">Maps</span>
                <span class="search-tab-filter">News</span>
                <vs-dropdown vs-trigger-click class="search-tab-filter">
                    <span>More</span>
                    <vs-dropdown-menu class="search-page__more-dropdown">
                        <vs-dropdown-item>Shopping</vs-dropdown-item>
                        <vs-dropdown-item>Books</vs-dropdown-item>
                        <vs-dropdown-item>Flight</vs-dropdown-item>
                        <vs-dropdown-item>Finance</vs-dropdown-item>
                        <vs-dropdown-item>Personal</vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>
            <div>
                <vs-dropdown vs-trigger-click class="search-tab-filter">
                    <span>Settings</span>
                    <vs-dropdown-menu class="search-page__settings-dropdown w-64">
                        <vs-dropdown-item>Search settings</vs-dropdown-item>
                        <vs-dropdown-item>Language</vs-dropdown-item>
                        <vs-dropdown-item>Turn on SafeSearch</vs-dropdown-item>
                        <vs-dropdown-item>Hide Private Results</vs-dropdown-item>
                        <vs-dropdown-item>Advanced Search</vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
                <span class="search-tab-filter mr-0">Tools</span>
            </div>
        </div>
        <div class="search-meta flex flex-wrap justify-between mt-6">
            <span class="mb-4">Approx 84,00,00,000 results (0.35s)</span>
            <div>
                <vs-dropdown vs-trigger-click class="cursor-pointer">
                    <span class="flex items-center">
                        <span>Any Time</span>
                        <feather-icon icon="ChevronDownIcon" style="width:1rem; height:1rem" class="cursor-pointer"></feather-icon>
                    </span>
                    <vs-dropdown-menu class="w-48">
                        <vs-dropdown-item>Any Time</vs-dropdown-item>
                        <vs-dropdown-item>Past Hour</vs-dropdown-item>
                        <vs-dropdown-item>Past 24 Hours</vs-dropdown-item>
                        <vs-dropdown-item>Past Week</vs-dropdown-item>
                        <vs-dropdown-item>Past Month</vs-dropdown-item>
                        <vs-dropdown-item>Past Year</vs-dropdown-item>
                        <vs-dropdown-item>Custom Period</vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
                &nbsp;
                <vs-dropdown vs-trigger-click class="cursor-pointer">
                    <span class="flex items-center">
                        <span>All Results</span>
                        <feather-icon icon="ChevronDownIcon" style="width:1rem; height:1rem" class="cursor-pointer"></feather-icon>
                    </span>
                    <vs-dropdown-menu class="w-32">
                        <vs-dropdown-item>All Result</vs-dropdown-item>
                        <vs-dropdown-item>Verbatim</vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>
        </div>

        <!-- SEARCH RESULTS -->
        <div class="vx-row mt-4 md:flex-row flex-col-reverse">
            <div class="vx-col md:w-3/5 lg:w-2/3 w-full">
                <vx-card class="search-page__search-results lg:p-2">
                    <div class="vx-row search-Page__search-result" v-for="(result, index) in searchResults" :key="index" :class="{ 'mt-8': index }">
                        <div class="vx-col mb-2" :class="result.resultImg || result.resultVideo ? 'lg:w-1/5 md:w-1/4 w-full' : 'w-full'" v-if="result.resultImg || result.resultVideo">
                            <img :src="require(`@/assets/images/pages/${result.resultImg}`)" alt="result-img" class="responsive" v-if="result.resultImg">
                            <video-player ref="player" class="media-video-player" :options="playerOptions(result.resultVideo[0])" v-else-if="result.resultVideo" />
                        </div>
                        <div class="vx-col" :class="result.resultImg || result.resultVideo ? 'lg:w-4/5 md:w-3/4' : 'w-full'">
                            <a :href="result.linkUrl" class="inline-block text-2xl" target="_blank" rel="nofollow">{{ result.title }}</a><br>
                            <a :href="result.resultUrl" class="inline-block text-success mb-1" target="_blank" rel="nofollow">{{ result.resultUrl }}</a><br>
                            <!-- META DATA ROW -->
                            <div class="flex flex-wrap items-center search-page__search-result-meta my-1" v-if="result.metaData">
                                <!-- RATINGS -->
                                <div class="flex items-center search-page__search-result-ratings mr-3" v-if="result.metaData.ratings">
                                    <img src="@/assets/images/raty/star-on-2.png" alt="rating" v-for="i in Math.floor(result.metaData.ratings)" :key="i" class="mb-1" />
                                    <img src="@/assets/images/raty/star-half-2.png" alt="rating" v-if="result.metaData.ratings % 1" class="mb-1" />
                                </div>
                                <div>
                                    <span class="mr-2" v-for="(info, infoIndex) in result.metaData.info" :key="infoIndex">{{ info }} <span v-if="infoIndex < result.metaData.info.length - 1">|</span></span>
                                </div>
                            </div>
                            <!-- RESULT DESC -->
                            <span v-if="result.time">{{ result.time | date(true) }} - </span>
                            <span>{{ result.description | truncate(225) | tailing('...') }}</span>
                            <!-- SITE LINKS -->
                            <div class="vx-row mt-6" v-if="result.sitelinks">
                                <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-5" v-for="(sitelink , index) in result.sitelinks" :key="index">
                                    <a :href="sitelink.url" class="inline-block mb-1" target="_blank" rel="nofollow">{{ sitelink.title }}</a><br>
                                    <p>{{ sitelink.description | truncate(50) | tailing('...') }}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </vx-card>

                <vs-pagination :total="40" v-model="currentPage" class="mt-base"></vs-pagination>
            </div>

            <!-- KNOWLEDGE PANEL -->
            <div class="vx-col md:w-2/5 lg:w-1/3 w-full mb-base">
                <vx-card card-border class="bg-transparent no-shadow">
                    <div class="search-page__search-img-gallery vx-row mb-4">
                        <div class="vx-col w-full">
                            <img :src="require(`@/assets/images/pages/${knowledgePanel.img}`)" alt="gallery-img" class="responsive shadow-md rounded-lg">
                        </div>
                    </div>
                    <h3>{{ knowledgePanel.title }}</h3>
                    <small>{{ knowledgePanel.subtitle }}</small>
                    <div class="knowledgePanel__external-link flex my-2">
                        <feather-icon :icon="knowledgePanel.externalLink.icon" svgClasses="w-4 h-4 mb-1 mr-2"></feather-icon>
                        <a :href="knowledgePanel.externalLink.url" target="_blank" rel="nofollow">{{ knowledgePanel.externalLink.title }}</a>
                    </div>
                    <p>{{ knowledgePanel.description }}</p>
                    <div class="knowledge-panel__info-list flex mt-6">
                        <div class="knowledge-panel__info flex-1 text-center border-solid border-grey-light border border-r-0 border-b-0 border-t-0" v-for="(info, index) in knowledgePanel.info" :key="info.title" :class="{'border-l-0': index == 0}">
                            <p class="font-medium">{{ info.title }}</p>
                            <small>{{ info.subtitle }}</small>
                        </div>
                    </div>
                    <div class="knowledge-panel__meta-list mt-6">
                        <div class="knowledge-panel__meta" v-for="meta in knowledgePanel.resultMetaList" :key="meta.name">
                            <p><span class="font-medium mr-2">{{ meta.name }}:</span> {{ meta.value }}</p>
                        </div>
                    </div>
                    <div class="knowledge-panel-suggestions mt-6">
                        <p class="text-lg font-medium mb-2">People also search for</p>
                        <div class="knowledge-panel__suggested-list flex flex-wrap">
                            <div class="knowledge-panel__suggestion mr-4 text-center" v-for="search in knowledgePanel.suggestedSearches" :key="search.name">
                                <a :href="search.url" target="_blank" rel="nofollow"><img :src="require(`@/assets/images/pages/${search.img}`)" alt="suggested-search-img" class="mx-auto" height="40px" width="40px"></a>
                                <a :href="search.url" target="_blank" rel="nofollow" class="text-sm">{{ search.name }}</a>
                            </div>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default{
    data() {
        return {
            searchQuery: 'Modern Admin',
            currentPage: 1,
            knowledgePanel: {
                img: ['modern.jpg'],
                title: 'Modern Admin - Clean Bootstrap 4 Dashboard HTML Template',
                subtitle: 'Clean Bootstrap 4 Dashboard HTML Template',
                description: 'Clean Bootstrap 4 Dashboard HTML Template + Bitcoin Dashboard can be used for any type of web applications: Project Management, eCommerce backends, CRM, Analytics, Fitness or any custom admin panels.',
                info: [
                    { title: '1,367', subtitle: 'Sales' },
                    { title: '74', subtitle: 'Comments' },
                    { title: '5', subtitle: 'Ratings' },
                ],
                externalLink: {
                    title: 'View on Themeforest',
                    icon: 'ExternalLinkIcon',
                    url: 'https://themeforest.net/item/modern-admin-clean-bootstrap-4-dashboard-html-template/21430660',
                },
                resultMetaList: [
                    { name: 'Bootstrap', value: 'v4.13 updated' },
                    { name: 'Created', value: 'Mar 8 2018' },
                    { name: 'Last Update', value: 'Nov 28 2018' },
                    { name: 'Documentation', value: 'Well Documented' },
                    { name: 'Layout', value: 'Responsive' },
                ],
                suggestedSearches: [
                    { name: 'Apex', img: '1-apex.png', url: 'https://themeforest.net/item/apex-angular-4-bootstrap-admin-template/20774875'},
                    { name: 'Convex', img: '3-convex.png', url: 'https://themeforest.net/item/convex-angular-bootstrap-admin-dashboard-template/22424619'},
                    { name: 'Materialize', img: '4-materialize.png', url: 'https://themeforest.net/item/materialize-material-design-admin-template/11446068'},
                    { name: 'Stack', img: '2-stack.png', url: 'https://themeforest.net/item/stack-responsive-bootstrap-4-admin-template/20039431'},
                ]
            },
            searchResults: [
                {
                    title: 'Modern Admin - Clean Bootstrap 4 Dashboard HTML Template',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    metaData: {
                        ratings: 5,
                        info: ['25 reviews', '25.00 USD', 'In Stock']
                    },
                    time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
                    description: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop. Chocolate cake oat cake tiramisu marzipan sugar plum. Donut sweet pie oat cake dragée fruitcake cotton candy lemon drops. Sweet roll wafer bear claw tiramisu oat cake.',
                    sitelinks: [
                        {
                            title: 'Dashboard',
                            url: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                            description: 'Halvah marzipan icing chocolate caramels candy canes carrot cake dragée apple pie. Croissant oat cake gummies biscuit.'
                        },
                        {
                            title: 'UI Components',
                            url: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                            description: 'Brownie lollipop chocolate bar chocolate cake macaroon. Bonbon chocolate tootsie roll chocolate.'
                        },
                        {
                            title: 'Form Elements',
                            url: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                            description: 'Lollipop cake wafer. Candy chocolate toffee icing. Chocolate cake cupcake toffee chupa chups topping.'
                        },
                        {
                            title: 'Support',
                            url: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                            description: 'Carrot cake sweet soufflé cake bear claw lollipop. Muffin sugar plum chupa chups liquorice cotton candy halvah danish cake.'
                        },
                        {
                            title: 'Charts',
                            url: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                            description: 'Gingerbread chupa chups toffee jelly chocolate cake tiramisu marshmallow. Donut tiramisu chocolate marshmallow.'
                        },
                        {
                            title: 'Documentation',
                            url: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                            description: 'Powder brownie candy toffee soufflé. Gingerbread sweet roll gingerbread icing macaroon.'
                        },
                    ]
                },
                {
                    title: 'Attire bench - Quick win shoot me an email',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    resultImg: 'search-result.jpg',
                    metaData: {
                        ratings: 4.5,
                        info: ['17 reviews', '12 votes', '28.00 USD', 'In Stock']
                    },
                    time: 'Mon Feb 23 2017 07:45:00 GMT+0000 (GMT)',
                    description: 'Tiramisu soufflé gummies ice cream liquorice gingerbread sweet roll. Cake cotton candy candy ice cream muffin donut soufflé danish. Dessert jelly beans wafer cheesecake. Sugar plum gingerbread caramels candy canes gummi bears bear claw donut. Oat cake cookie tiramisu sweet halvah sugar plum. Dessert danish oat cake.',
                },
                {
                    title: 'The Table - for what do you feel you would',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    resultVideo: [{sources: [ { type: "video/mp4", src: "http://vjs.zencdn.net/v/oceans.mp4" } ], poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'}],
                    metaData: {
                        info: ['1M Views', 'Uploaded by PlayStation']
                    },
                    time: 'Mon Jun 25 2016 07:45:00 GMT+0000 (GMT)',
                    description: 'Tiramisu soufflé gummies ice cream liquorice gingerbread sweet roll. Cake cotton candy candy ice cream muffin donut soufflé danish. Dessert jelly beans wafer cheesecake. Sugar plum gingerbread caramels candy canes gummi bears bear claw donut. Oat cake cookie tiramisu sweet halvah sugar plum. Dessert danish oat cake.',
                },
                {
                    title: 'Microdosing - deep v actually schlitz chia',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    description: 'Wafer liquorice sweet roll jelly beans cake soufflé. Oat cake marzipan chocolate cake sesame snaps jujubes. Dragée biscuit dessert. Chocolate muffin wafer. Sugar plum icing tootsie roll gummi bears marzipan candy canes biscuit.',
                },
                {
                    title: 'Aesthetic neutra freegan, mlkshk literally',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    time: 'Mon Jun 30 2017 10:30:00 GMT+0000 (GMT)',
                    description: 'Donut jelly cake chupa chups powder chocolate cake cheesecake. Wafer macaroon sweet roll gingerbread cheesecake gummi bears. Marzipan jujubes sweet roll tootsie roll cookie apple pie brownie bear claw jelly beans.',
                },
                {
                    title: 'iCell - disrupt butcher pitchfork.',
                    linkUrl: 'https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html#',
                    resultUrl: 'https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent',
                    time: 'Mon DEC 12 2015 08:39:00 GMT+0000 (GMT)',
                    description: 'Cake fruitcake cake caramels jelly beans chocolate bar. Macaroon gingerbread pastry. Gummies ice cream chocolate lollipop brownie cotton candy. Topping cotton candy brownie. Cake tiramisu macaroon sugar plum. Sweet cotton candy powder tootsie roll candy gummies brownie lollipop. Sweet muffin pudding.',
                },
            ]
        }
    },
    computed: {
        playerOptions() {
            return (media) => {
                return {
                    height: '360',
                    fluid: true,
                    // rmeove this comment if you want to autoplay
                    // autoplay: true,
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: media.sources,
                    poster: media.poster,
                }
            }
        }
    },
    methods: {},
    components: {
        videoPlayer,
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/search.scss";
</style>
