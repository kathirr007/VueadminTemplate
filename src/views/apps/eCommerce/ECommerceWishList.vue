<!-- =========================================================================================
	File Name: ECommerceWishList.vue
	Description: eCommerce Wish List Page
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="ecommerce-wishlist-demo">
        <div class="items-grid-view vx-row match-height" v-if="wishListitems.length" appear>
            <div class="vx-col lg:w-1/4 md:w-1/3 sm:w-1/2 w-full" v-for="item in wishListitems" :key="item.objectID">

                <item-grid-view :item="item">

                    <!-- SLOT: ACTION BUTTONS -->
                    <template slot="action-buttons">
                        <div class="flex flex-wrap">

                            <!-- PRIMARY BUTTON : REMOVE -->
                            <div
                                class="item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer"
                                @click="removeItemFromWishList(item)">
                                <feather-icon icon="XIcon" svgClasses="h-4 w-4" />

                                <span class="text-sm font-semibold ml-2">REMOVE</span>
                            </div>

                            <!-- SECONDARY BUTTON: MOVE TO CART -->
                            <div
                                class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
                                @click="cartButtonClicked(item)">
                                <feather-icon icon="ShoppingBagIcon" svgClasses="h-4 w-4" />

                                <span class="text-sm font-semibold ml-2" v-if="isInCart(item.objectID)">VIEW IN CART</span>
                                <span class="text-sm font-semibold ml-2" v-else>MOVE TO CART</span>
                            </div>
                        </div>
                    </template>
                </item-grid-view>

            </div>
        </div>

        <!-- IF NO ITEMS IN CART -->
        <vx-card title="You don't have any items in your wish list." v-else>
            <vs-button @click="$router.push('/apps/eCommerce/shop')">Browse Shop</vs-button>
        </vx-card>
  </div>
</template>

<script>
const ItemGridView = () => import('./components/ItemGridView.vue')

export default {
    components: {
        ItemGridView
    },
    computed: {
        wishListitems() {
            return this.$store.state.eCommerce.wishList.slice().reverse();
        },
        isInCart() {
            return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
        },
        isInWishList() {
            return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
        },
    },
    methods: {
        removeItemFromWishList(item) {
            this.$store.dispatch('eCommerce/toggleItemInWishList', item)
        },
        cartButtonClicked(item) {
            if (this.isInCart(item.objectID)) this.$router.push('/apps/eCommerce/checkout')
            else {
                this.additemInCart(item);
                this.removeItemFromWishList(item);
            }
        },
        additemInCart(item) {
            this.$store.dispatch('eCommerce/additemInCart', item)
        },
    }
}
</script>

<style lang="scss" scoped>
#ecommerce-wishlist-demo {
    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
        min-width: 50%;
    }

    .item-view-secondary-action-btn {
        min-width: 50%;
    }
}
</style>
