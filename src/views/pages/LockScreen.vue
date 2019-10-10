<!-- =========================================================================================
    File Name: LockScreen.vue
    Description: Lock Screen Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter justify-center items-center">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/lock-screen.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Your Session is locked</h4>
                                </div>
                                <vs-input icon="icon icon-user" icon-pack="feather" label-placeholder="Username" v-model="value1" class="w-full mb-6 no-icon-border"/>
                                <vs-input icon="icon icon-lock" icon-pack="feather" type="password" label-placeholder="Password" v-model="value2" class="w-full mb-6 no-icon-border" />

                                <div class="flex justify-between flex-wrap">
                                    <router-link to="/pages/login" class="mb-4">Are you not John Doe?</router-link>
                                    <vs-button class="ml-2">Unlock</vs-button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: ''
        }
    }
}
</script>
