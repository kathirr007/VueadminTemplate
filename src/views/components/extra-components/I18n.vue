<!-- =========================================================================================
    File Name: i18n.vue
    Description: I18n demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="page-i18n">
        <vx-card title="Change Locale">
            <span>Your Current Locale: <strong>{{ this.$i18n.locale }}</strong></span>
            <div class="flex flex-col">
                <vs-radio v-model="locale" vs-value="en" class="mt-3">
                    <span class="mr-2">English</span>
                </vs-radio>

                <vs-radio v-model="locale" vs-value="fr" class="mt-3">
                    <span class="mr-2">French</span>
                </vs-radio>

                <vs-radio v-model="locale" vs-value="de" class="mt-3">
                    <span class="mr-2">German</span>
                </vs-radio>

                <vs-radio v-model="locale" vs-value="pt" class="mt-3">
                    <span class="mr-2">Portuguese</span>
                </vs-radio>
            </div>

            <vx-card :title="$t('demoTitle')" class="mt-base" no-shadow card-border>
                <p>{{ $t("demoText") }}</p>
            </vx-card>
        </vx-card>
    </div>
</template>

<script>
export default{
    data() {
        return {
            locale: this.$i18n.locale
        }
    },
    watch: {
        locale(val) {
            this.$i18n.locale = val;
        }
    }
}
</script>
