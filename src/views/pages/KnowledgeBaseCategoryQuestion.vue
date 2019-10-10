<!-- =========================================================================================
    File Name: KnowledgeBaseCategoryQuestion.vue
    Description: Knowledge Base Question - Answer Article
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="knowledge-base-article">
        <div class="vx-row">
            <div class="vx-col w-full md:w-2/5 lg:w-1/4">
                <vx-card title="Related Questions">
                    <ul class="bordered-items">
                        <li v-for="que in relatedQuestions" :key="que.id" class="py-2"><router-link :to="que.answerUrl">{{ que.question }}</router-link></li>
                    </ul>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
                <vx-card>
                    <div class="article-title mb-6">
                        <h1>{{ article.title }}</h1>
                        <p class="mt-1">Last updated on <span>{{ article.lastUpdated | date(true) }}</span></p>
                    </div>
                    <p>Pastry jelly chocolate bar caramels fruitcake gummies marshmallow lemon drops. Powder cupcake topping muffin carrot cake croissant soufflé sugar plum sweet roll. Cotton candy ice cream gummies biscuit bonbon biscuit. Icing pastry bonbon. Sweet roll chocolate cake liquorice jelly beans caramels jelly cookie caramels. Pastry candy canes cake powder lollipop tootsie roll sugar plum. Cake cotton candy dragée danish. Muffin croissant sweet roll candy wafer marzipan cheesecake. Carrot cake toffee gummi bears gingerbread donut biscuit. Donut chupa chups oat cake cheesecake apple pie gummies marzipan icing cake. Macaroon jelly beans gummi bears carrot cake tiramisu liquorice. Sweet tootsie roll cookie marzipan brownie icing cookie jelly tart. Lollipop cookie tootsie roll candy canes.</p>
                    <img :src="require(`@/assets/images/pages/${article.img}`)" alt="article-img" class="responsive my-3 rounded" />
                    <p class="mb-6">Candy canes oat cake biscuit halvah ice cream. Marshmallow icing topping toffee caramels dessert carrot cake. Liquorice soufflé brownie sugar plum dessert cotton candy. Cupcake halvah topping oat cake soufflé pastry dragée pudding cotton candy.</p>
                    <h5 class="mb-2">Topics:</h5>
                    <vx-list :list="article.topics"></vx-list>
                    <p class="mt-4">Chocolate cake powder I love jelly beans lemon drops candy fruitcake. Sesame snaps sugar plum chocolate candy canes muffin. Wafer pastry topping croissant pudding dessert I love. Bonbon apple pie fruitcake candy canes I love. Lollipop sweet gingerbread I love I love dessert. I love halvah marshmallow pie jelly beans macaroon candy. Bonbon ice cream lollipop pie fruitcake oat cake. Topping marshmallow I love sesame snaps dragée. I love sesame snaps jelly. Chocolate sesame snaps jelly I love I love powder jelly-o.</p>

                    <template slot="footer">
                        <div class="flex items-center justify-between">
                            <router-link to="/pages/knowledge-base/category/question" class="flex items-center"><feather-icon icon="ChevronsLeftIcon" class="mr-2" svgClasses="h-4 w-4"></feather-icon> Previous Article</router-link>
                            <router-link to="/pages/knowledge-base/category/question" class="flex items-center">Next Article <feather-icon icon="ChevronsRightIcon" class="ml-2" svgClasses="h-4 w-4"></feather-icon></router-link>
                        </div>
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return {
            article: {
                title: 'Dessert halvah carrot cake sweet?',
                lastUpdated: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
                img: 'kb-article.jpg',
                topics: ['Pastry jelly chocolate bar caramels', 'Donut chupa chups oat cake', 'Marshmallow icing topping toffee caramels dessert carrot cake']
            },
            relatedQuestions: [
                {
                    "id": 0,
                    "question": 'Cake icing gummi bears?',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 1,
                    "question": 'Jelly soufflé apple pie?',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 2,
                    "question": 'Soufflé apple pie ice cream cotton?',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 3,
                    "question": 'Powder wafer brownie?',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 4,
                    "question": 'Toffee donut dragée cotton candy?',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 5,
                    "question": 'Soufflé chupa chups chocolate bar?',
                    "answerUrl": "/pages/knowledge-base/category/question"
                }
            ]
        }
    },
    computed: {},
    methods: {},
    components: {},
    mounted() {
        this.$emit('changeRouteTitle', 'Question');
    }
}
</script>