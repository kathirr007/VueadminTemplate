<!-- =========================================================================================
    File Name: ChatContact.vue
    Description: Chat contact - single component for chat
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="chat__contact flex items-center px-2 py-3" :class="{'bg-primary-gradient text-white shadow-lg': isActiveChatUser}">
        <div class="contact__avatar mr-3">
            <vs-avatar class="border-2 border-solid border-white" :src="require(`@/assets/images/portrait/small/${contact.img}`)" size="42px"></vs-avatar>
        </div>
        <div class="contact__container w-full flex items-center justify-between overflow-hidden">
            <div class="contact__info flex flex-col truncate w-5/6">
                <h5 class="font-semibold" :class="{'text-white': isActiveChatUser}">{{ contact.name }}</h5>
                <span class="truncate">{{ contact.about }}</span>
            </div>

            <div class="chat__contact__meta flex self-start flex-col items-end w-1/6">
                <span class="whitespace-no-wrap">{{ lastMessaged | date }}</span>
                <vs-avatar color="primary" :text="`${unseenMsg}`" size="20px" v-if="unseenMsg" />
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            contact: {
                type: Object,
                required: true,
            },
            lastMessaged: {
                type: String,
                default: "",
            },
            unseenMsg: {
                type: Number,
                default: 0,
            },
            isActiveChatUser: {
                type: Boolean,
            }
        },
    }
</script>