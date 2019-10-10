]<!-- =========================================================================================
    File Name: Faq.vue
    Description: FAQ Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="faq-page">
        <!-- JUMBOTRON -->
        <div class="faq-jumbotron">
            <div class="faq-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
                <h1 class="mb-1 text-white">Have Any Questions?</h1>
                <p class="text-white">Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.</p>
                <vs-input placeholder="Search" v-model="faqSearchQuery" icon-pack="feather" icon="icon-search" size="large" class="w-full mt-6" icon-no-border />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg">
                <vx-card>
                    <h4>Table of Content</h4>
                    <ul class="faq-topics mt-4">
                        <li v-for="category in categories" :key="category.id" class="p-2 font-medium flex items-center" @click="faqFilter = category.id">
                            <div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + category.color"></div><span class="cursor-pointer">{{ category.name }}</span>
                        </li>
                    </ul>

                    <br><br>

                    <h4>Supporters</h4>
                    <ul class="faq-supporters mt-4">
                        <li v-for="supporter in supporters" :key="supporter.id" class="mt-4">
                            <div class="flex items-center">
                                <vs-avatar class="mr-3" :src="require(`@/assets/images/portrait/small/${supporter.img}`)" size="35px" />
                                <div class="leading-tight">
                                    <p class="font-semibold">{{ supporter.name }}</p>
                                    <small>{{ supporter.profession }}</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- FAQ COL -->
            <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
                <vs-collapse accordion type="margin" class="p-0">
                    <vs-collapse-item v-for="(que,index) in filteredFaq" class="faq-bg rounded-lg" :class="{'mt-0': !index}" :key="que.id">
                        <div slot="header"><h5>{{ que.question }}</h5></div>
                        <p>{{ que.ans }}</p>
                    </vs-collapse-item>
                </vs-collapse>
                
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return {
            faqSearchQuery: '',
            faqFilter: 1,
            categories: [
                {
                    id: 1,
                    name: 'All',
                    color: 'grey',
                },
                {
                    id: 2,
                    name: 'General',
                    color: 'primary'
                },
                {
                    id: 3,
                    name: 'Licenses',
                    color: 'success'
                },
                {
                    id: 4,
                    name: 'Company usage',
                    color: 'warning'
                },
                {
                    id: 5,
                    name: 'Trademark use',
                    color: 'danger'
                },
            ],
            faqs: [
                {
                    id: 1,
                    categoryId: 2,
                    question: 'What does royalty free mean?',
                    ans: 'Royalty free means you just need to pay for rights to use the item once per end product. You don\'t need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses.'
                },
                {
                    id: 2,
                    categoryId: 2,
                    question: 'What do you mean by item and end product?',
                    ans: 'The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template; the end product is the finalized business card. The item is a button graphic; the end product is an app using the button graphic in the app\'s interface.'
                },
                {
                    id: 3,
                    categoryId: 2,
                    question: 'Am I allowed to modify the item that I purchased?',
                    ans: 'Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client.'
                },
                {
                    id: 4,
                    categoryId: 2,
                    question: 'What does non-exclusive mean?',
                    ans: 'Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item.'
                },
                {
                    id: 5,
                    categoryId: 3,
                    question: 'Is the Regular License the same thing as an editorial license?',
                    ans: 'No, our Regular License is for a free end product (whether or not the item is used in the end product in an editorial way). And our Extended License is for an end product that\'s sold (whether or not the item is used in the end product in an editorial way). If you want to use an item in an editorial way in your end product, choose the Regular License if your end product is distributed for free, and choose the Extended License if your end product is sold to the end customer.'
                },
                {
                    id: 6,
                    categoryId: 3,
                    question: 'Which license do I need for an end product that is only accessible to paying users?',
                    ans: 'If the end users need to pay to see the end product, you need an Extended License. There can be more than one end user as long as there is only one end product. Example: A website that requires money before you can access the content.'
                },
                {
                    id: 7,
                    categoryId: 3,
                    question: 'Which license do I need to use an item in a commercial?',
                    ans: 'You only need a Regular License where the end product is an advertisement, as the audience does not have to pay to view it. It doesn\'t matter if the advertisement is for things that are being sold. Example: An After Effects template used to produce a TV commercial would only need the Regular License'
                },
                {
                    id: 8,
                    categoryId: 3,
                    question: 'Can I re-distribute an item? What about under an Extended License?',
                    ans: 'No. You can\'t license items and then make them available to others "as-is" (that is, as a stand-alone item or as stock), regardless of which license you purchase. Example: You can\'t buy a business card template and distribute it as a template, source files and all.'
                },
                {
                    id: 9,
                    categoryId: 4,
                    question: 'Can multiple people within my company have access to the item?',
                    ans: 'Yes. If you purchased a single-use license, access should only be given to people working on the single end product incorporating that item.'
                },
                {
                    id: 10,
                    categoryId: 4,
                    question: 'Can I store the item on an intranet so everyone has access?',
                    ans: 'No, items must be stored in a location where only those who need them have access. If you purchased a single-use license, once the item has been used in a single end product, the only place you should store it is in the archive files for that end product.'
                },
                {
                    id: 11,
                    categoryId: 5,
                    question: 'Does this apply to all items from Envato Market?',
                    ans: 'No. This only applies to items with real-world products and trademarks in the actual item. This is most likely in product mock-ups (graphics items), product promos (motion graphics project files) and 3D items. This does not apply to PhotoDune items, which are available for commercial use. This also does not apply to images of products and trademarks used illustratively in item previews, as they\'re not included in the item you download.'
                },
                {
                    id: 12,
                    categoryId: 5,
                    question: 'What does \'editorial use\' mean?',
                    ans: 'Editorial use means using an item only for news or journalistic purposes like in blogs, magazine and newspaper editorial applications.'
                },
                {
                    id: 13,
                    categoryId: 5,
                    question: 'Is this item still \'royalty free\'?',
                    ans: 'Yes. Royalty free means you pay for the item once for each end product, and you don\'t need to pay any additional or ongoing fees for each person who sees or uses it. This is separate to whether you need a clearance from the owner of rights in the real world product or trademark within an item.'
                },
            ],
            supporters: [
                {
                    id: 1,
                    img: 'avatar-s-1.png',
                    name: 'Boyce Shene',
                    profession: 'Web Developer'
                },
                {
                    id: 2,
                    img: 'avatar-s-2.png',
                    name: 'Margie Sevy',
                    profession: 'Web Designer'
                },
                {
                    id: 3,
                    img: 'avatar-s-3.png',
                    name: 'Cyndi Navas',
                    profession: 'Web Developer'
                },
                {
                    id: 4,
                    img: 'avatar-s-4.png',
                    name: 'Chi Petrusky',
                    profession: 'Web Developer'
                },
                {
                    id: 5,
                    img: 'avatar-s-5.png',
                    name: 'Shanel Dumag',
                    profession: 'Web Designer'
                },
            ]
        }
    },
    computed: {
        filteredFaq() { 
            return this.faqs.filter((faq) => {
                if (this.faqFilter == 1) return (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 2) return faq.categoryId == 2 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 3) return faq.categoryId == 3 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 4) return faq.categoryId == 4 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 5) return faq.categoryId == 5 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
            });
        }
    },
    methods: {
    },
    components: {
    }
}
</script>

<style lang="scss">
#faq-page {
    .faq-jumbotron-content {
        background-image: url('../../assets/images/pages/faq.jpg');
        background-size: cover;
    }

    .faq-bg {
        background-color: #fff;
    }   
}
</style>