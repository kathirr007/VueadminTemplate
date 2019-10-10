<!-- =========================================================================================
	File Name: ItemGridView.vue
	Description: Item Component - Grid VIew
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <!-- <div class="item-grid-view vx-row match-height">
        <div class="vx-col" :class="gridColumnWidth" v-for="item in items" :key="item.objectID"> -->
            <vx-card class="grid-view-item mb-base overflow-hidden">
                <template slot="no-body">

                    <!-- ITEM IMAGE -->
                    <div class="item-img-container bg-white h-64 flex items-center justify-center mb-4">
                        <img :src="item.image" :alt="item.name" class="grid-view-img px-4">
                    </div>
                    <div class="item-details px-4">

                        <!-- RATING & PRICE -->
                        <div class="flex justify-between items-center">
                            <div class="bg-primary flex text-white py-1 px-2 rounded">
                                <span class="text-sm mr-2">{{ item.rating }}</span>
                                <feather-icon icon="StarIcon" svgClasses="h-4 w-4" />
                            </div>
                            <h6 class="font-bold">${{ item.price }}</h6>
                        </div>

                        <!-- TITLE & DESCRIPTION -->
                        <div class="my-4">
                            <h6 class="truncate font-semibold mb-1">{{ item.name }}</h6>
                            <p class="item-description truncate text-sm">{{ item.description }}</p>
                        </div>
                    </div>

                    <!-- SLOT: ACTION BUTTONS -->
                    <slot name="action-buttons" />
                </template>
            </vx-card>
       <!--  </div>
    </div> -->
</template>

<script>
export default{
    props: {
        item: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-view-item {
    .grid-view-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        transition: .35s;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 4px 25px 0px rgba(0,0,0,.25);

        .grid-view-img{
            opacity: 0.9;
        }        
    }
}
</style>