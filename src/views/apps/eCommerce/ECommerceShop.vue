<!-- =========================================================================================
    File Name: ECommerceShop.vue
    Description: eCommerce Shop Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <ais-instant-search
            :search-client="searchClient"
            index-name="instant_search" id="algolia-instant-search-demo">

            <!-- AIS CONFIG -->
            <ais-configure :hits-per-page.camel="9" />

            <div class="algolia-header mb-4">
                <div class="flex md:items-end items-center justify-between flex-wrap">
                    <!-- TOGGLE SIDEBAR BUTTON -->
                    <feather-icon
                        class="inline-flex lg:hidden cursor-pointer mr-4"
                        icon="MenuIcon"
                        @click.stop="toggleFilterSidebar" />

                    <p class="lg:inline-flex hidden font-semibold algolia-filters-label">Filters</p>

                    <div class="flex justify-between items-end flex-grow">
                        <!-- Stats -->
                        <ais-stats>
                            <p slot-scope="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }" class="font-semibold md:block hidden">
                                {{ nbHits }} results found in {{ processingTimeMS }}ms
                            </p>
                        </ais-stats>

                        <div class="flex flex-wrap">

                            <!-- SORTING -->
                            <ais-sort-by :items="[
                                { value: 'instant_search', label: 'Featured' },
                                { value: 'instant_search_price_asc', label: 'Lowest Price' },
                                { value: 'instant_search_price_desc', label: 'Highest Price' },
                            ]">
                                <vs-select
                                    :value="currentRefinement"
                                    slot-scope="{ items, currentRefinement, refine }"
                                    @input="(val) => refine(val)"
                                    class="mr-4 vs-input-shadow-drop vs-select-no-border d-theme-input-dark-bg w-48">
                                    <vs-select-item v-for="item in items" :key="item.value" :value="item.value" :text="item.label" />
                                </vs-select>
                            </ais-sort-by>

                            <!-- ITEM VIEW - GRID/LIST -->
                            <div>
                                <feather-icon
                                    icon="GridIcon"
                                    @click="currentItemView='item-grid-view'"
                                    class="p-2 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer"
                                    :svgClasses="{'text-primary stroke-current': currentItemView == 'item-grid-view'}" />
                                <feather-icon
                                    icon="ListIcon"
                                    @click="currentItemView='item-list-view'"
                                    class="p-2 ml-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer hidden sm:inline-flex"
                                    :svgClasses="{'text-primary stroke-current': currentItemView == 'item-list-view'}" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="algolia-content-container" class="relative clearfix">
                <vs-sidebar
                    class="items-no-padding vs-sidebar-rounded background-absolute"
                    parent="#algolia-content-container"
                    :click-not-close="clickNotClose"
                    :hidden-background="clickNotClose"
                    v-model="isFilterSidebarActive">

                    <div class="p-6 filter-container">

                        <!-- MULTI RANGE -->
                        <h6 class="font-bold mb-3">Multi Range</h6>
                        <ais-numeric-menu attribute="price" :items="numericItems">
                            <ul slot-scope="{ items, refine, createURL }">
                                <li
                                    v-for="item in items"
                                    :key="item.value"
                                    class="flex items-center cursor-pointer py-1"
                                    @click="refine(item.value)">

                                    <feather-icon icon="CircleIcon" :svgClasses="[{ 'text-primary fill-current': item.isRefined}, 'h-5 w-5']" />
                                    <span class="ml-2" :class="{'text-primary': item.isRefined}">{{ item.label }}</span>
                                </li>
                            </ul>
                        </ais-numeric-menu>

                        <vs-divider />

                        <!-- PRICE SLIDER -->
                        <h6 class="font-bold mb-3">Slider</h6>
                        <ais-range-input attribute="price">
                            <div slot-scope="{ currentRefinement, range, refine }">
                                <vs-slider
                                    class="algolia-price-slider"
                                    text-fixed="$"
                                    :min="range.min"
                                    :max="range.max"
                                    :value="toValue(currentRefinement, range)"
                                    @input="refine({min: $event[0], max: $event[1]})" />
                            </div>
                        </ais-range-input>

                        <vs-divider />

                        <!-- CATEGORIES -->
                        <h6 class="font-bold mb-4">Category</h6>
                        <ais-hierarchical-menu :attributes="algoliaCategories">
                            <div slot-scope="{
                              items,
                              refine,
                            }">
                                <ul>
                                    <li v-for="item in items" :key="item.value" class="flex items-center cursor-pointer py-1" @click="refine(item.value)">
                                        <feather-icon icon="CircleIcon" :svgClasses="[{ 'text-primary fill-current': item.isRefined}, 'h-5 w-5']" />
                                        <span class="ml-2" :class="{'text-primary': item.isRefined}">{{ item.label }}</span>
                                    </li>
                                </ul>
                            </div>
                        </ais-hierarchical-menu>

                        <vs-divider />

                        <!-- Brands -->
                        <h6 class="font-bold mb-4">Brand</h6>
                        <ais-refinement-list attribute="brand">
                            <div slot-scope="{
                              items,
                              isFromSearch,
                              refine,
                            }">
                                <ul>
                                    <li v-if="isFromSearch && !items.length">No results.</li>
                                    <li v-for="item in items" :key="item.value" class="mb-2 flex items-center justify-between">
                                        <vs-checkbox v-model="item.isRefined" class="ml-0" @click="refine(item.value)">{{ item.label }}</vs-checkbox>
                                        <span>{{ item.count }}</span>
                                    </li>
                                </ul>
                            </div>
                        </ais-refinement-list>
                        <vs-divider />

                        <!-- Rating -->
                        <h6 class="font-bold mb-3">Rating</h6>
                        <ais-rating-menu attribute="rating">
                            <ul slot-scope="{ items, refine, createURL }">
                                <li v-for="item in items" :key="item.value" class="mb-2">
                                    <div @click.prevent="refine(item.value)" class="flex justify-between items-center">
                                        <div class="flex items-center flex-wrap">
                                            <feather-icon icon="StarIcon" :svgClasses="[{'text-warning': full, 'text-grey': !full, 'ml-1' : index}, 'cursor-pointer stroke-current h-6 w-6']" v-for="(full, index) in item.stars" :key="index" />
                                            <span class="ml-2">&amp; up</span>
                                        </div>
                                        <span>({{ item.count }})</span>
                                    </div>
                                </li>
                            </ul>
                        </ais-rating-menu>

                        <vs-divider />

                        <ais-clear-refinements class="flex justify-center">
                            <vs-button slot-scope="{ canRefine, refine, createURL }" @click.prevent="refine" :disabled="!canRefine">CLEAR ALL FILTERS</vs-button>
                        </ais-clear-refinements>
                    </div>
                </vs-sidebar>

                <!-- RIGHT COL -->
                <div :class="{'sidebar-spacer-with-margin': clickNotClose}">

                    <!-- SEARCH BAR -->
                    <ais-search-box>
                        <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
                            <div class="relative mb-8">

                                <!-- SEARCH INPUT -->
                                <vs-input class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg" placeholder="Search here" v-model="currentRefinement" @input="refine($event)" @keyup.esc="refine('')" size="large" />

                                <!-- SEARCH LOADING -->
                                <span :hidden="!isSearchStalled">Loading...</span>

                                <!-- SEARCH ICON -->
                                <div slot="submit-icon" class="absolute top-0 right-0 py-4 px-6" v-show="!currentRefinement">
                                    <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
                                </div>

                                <!-- CLEAR INPUT ICON -->
                                <div slot="reset-icon" class="absolute top-0 right-0 py-4 px-6" v-show="currentRefinement">
                                    <feather-icon icon="XIcon" svgClasses="h-6 w-6 cursor-pointer" @click="refine('')" />
                                </div>
                            </div>
                        </div>
                    </ais-search-box>

                    <!-- SEARCH RESULT -->
                    <ais-hits>
                        <div slot-scope="{ items }">

                            <!-- GRID VIEW -->
                            <template v-if="currentItemView == 'item-grid-view'">
                                <div class="items-grid-view vx-row match-height">
                                    <div class="vx-col lg:w-1/3 sm:w-1/2 w-full" v-for="item in items" :key="item.objectID">

                                        <item-grid-view :item="item">

                                            <!-- SLOT: ACTION BUTTONS -->
                                            <template slot="action-buttons">
                                                <div class="flex flex-wrap">

                                                    <!-- PRIMARY BUTTON: ADD TO WISH LIST -->
                                                    <div
                                                        class="item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer"
                                                        @click="toggleItemInWishList(item)">
                                                        <feather-icon icon="HeartIcon" :svgClasses="[{'text-danger fill-current' : isInWishList(item.objectID)}, 'h-4 w-4']" />

                                                        <span class="text-sm font-semibold ml-2">WISHLIST</span>
                                                    </div>

                                                    <!-- SECONDARY BUTTON: ADD-TO/VIEW-IN CART -->
                                                    <div
                                                        class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
                                                        @click="cartButtonClicked(item)">
                                                        <feather-icon icon="ShoppingBagIcon" svgClasses="h-4 w-4" />

                                                        <span class="text-sm font-semibold ml-2" v-if="isInCart(item.objectID)">VIEW IN CART</span>
                                                        <span class="text-sm font-semibold ml-2" v-else>ADD TO CART</span>
                                                    </div>
                                                </div>
                                            </template>
                                        </item-grid-view>

                                    </div>
                                </div>
                            </template>

                            <!-- LIST VIEW -->
                            <template v-else>
                                <div class="items-list-view" v-for="item in items" :key="item.objectID">

                                    <item-list-view :item="item">

                                        <!-- SLOT: ACTION BUTTONS -->
                                        <template slot="action-buttons">
                                            <div
                                                class="item-view-primary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3"
                                                @click="toggleItemInWishList(item)">
                                                <feather-icon icon="HeartIcon" :svgClasses="[{'text-danger fill-current' : isInWishList(item.objectID)}, 'h-4 w-4']" />
                                                <span class="text-sm font-semibold ml-2">WISHLIST</span>
                                            </div>
                                            <div
                                                class="item-view-secondary-action-btn bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer"
                                                @click="cartButtonClicked(item)">
                                                <feather-icon icon="ShoppingBagIcon" svgClasses="h-4 w-4" />

                                                <span class="text-sm font-semibold ml-2" v-if="isInCart(item.objectID)">VIEW IN CART</span>
                                                <span class="text-sm font-semibold ml-2" v-else>ADD TO CART</span>
                                            </div>
                                        </template>
                                    </item-list-view>

                                </div>
                            </template>
                        </div>
                    </ais-hits>

                    <!-- PAGINATION -->
                    <ais-pagination>
                        <div slot-scope="{
                                currentRefinement,
                                nbPages,
                                pages,
                                isFirstPage,
                                isLastPage,
                                refine,
                                createURL
                            }"
                        >

                        <vs-pagination

                            :total="nbPages"
                            :max="7"
                            :value="currentRefinement + 1"
                            @input="(val) => { refine(val - 1) }" />
                        </div>
                    </ais-pagination>

                    <!-- ALGOLIA LOGO -->
                    <img class="flex mt-4 mx-auto h-8" src="@/assets/images/pages/eCommerce/Algolia-logo.png" alt="algolia-logo">
                </div>
            </div>
        </ais-instant-search>
    </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';

export default {
    components: {
        ItemGridView: () => import("./components/ItemGridView.vue"),
        ItemListView: () => import("./components/ItemListView.vue")
    },
    data() {
        return {
            searchClient: algoliasearch(
                'latency',
                '6be0576ff61c053d5f9a3225e2a90f76'
            ),
            // Filter Sidebar
            isFilterSidebarActive: true,
            clickNotClose: true,
            windowWidth: window.innerWidth,
            currentItemView: 'item-grid-view',
            numericItems: [
              { label: 'All' },
              { label: '<= $10', end: 10 },
              { label: '$10 - $100', start: 10, end: 100 },
              { label: '$100 - $500', start: 100, end: 500 },
              { label: '>= $500', start: 500 },
            ],
            algoliaCategories: [
              'hierarchicalCategories.lvl0',
              'hierarchicalCategories.lvl1',
              'hierarchicalCategories.lvl2',
              'hierarchicalCategories.lvl3',
            ]
        };
    },
    computed: {
        toValue() {
            return (value, range) =>
                [
                    value.min !== null ? value.min : range.min,
                    value.max !== null ? value.max : range.max,
                ];
        },

        // GRID VIEW
        isInCart() {
            return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
        },
        isInWishList() {
            return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
        },
    },
    methods: {
        handleWindowResize(event) {
            this.windowWidth = event.currentTarget.innerWidth;
            this.setSidebarWidth();
        },
        setSidebarWidth() {
            if(this.windowWidth < 992) {
                this.isFilterSidebarActive = this.clickNotClose = false;
            }else {
                this.isFilterSidebarActive = this.clickNotClose = true;
            }
        },

        // GRID VIEW - ACTIONS
        toggleFilterSidebar() {
            if(this.clickNotClose) return
            this.isFilterSidebarActive = !this.isFilterSidebarActive;
        },
        toggleItemInWishList(item) {
            this.$store.dispatch('eCommerce/toggleItemInWishList', item)
        },
        additemInCart(item) {
            this.$store.dispatch('eCommerce/additemInCart', item)
        },
        cartButtonClicked(item) {
            if(this.isInCart(item.objectID)) this.$router.push('/apps/eCommerce/checkout')
            else this.additemInCart(item)
        }
    },
    created() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.handleWindowResize);
        })
        this.setSidebarWidth();
    },
    beforeDestroy: function() {
        window.removeEventListener('resize', this.handleWindowResize)
    },
};
</script>

<style lang="scss">
#algolia-instant-search-demo {
    .algolia-header {
        .algolia-filters-label {
            width: calc(260px + 2.4rem);
        }
    }

    #algolia-content-container {

        .vs-sidebar {
          position: relative;
          float: left;
        }
    }

    .algolia-search-input-right-aligned-icon {
        padding: 1rem 1.5rem;
    }

    .algolia-price-slider {
        min-width: unset;
    }

    .item-list-view {
        .algolia-result-img {

        }
    }

    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
        min-width: 50%;
    }

    .item-view-secondary-action-btn {
        min-width: 50%;
    }
}

.theme-dark {
    #algolia-instant-search-demo {
        #algolia-content-container {
            .vs-sidebar {
                background-color: #10163a;
            }
        }
    }
}

@media (min-width: 992px) {
    .vs-sidebar-rounded {
        .vs-sidebar { border-radius: .5rem; }
        .vs-sidebar--items {border-radius: .5rem; }
    }
}

@media (max-width: 992px) {
    #algolia-content-container {
      .vs-sidebar {
        position: absolute !important;
        float: none !important;
      }
    }
}
</style>
