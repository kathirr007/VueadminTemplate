<!-- =========================================================================================
    File Name: Datepicker.vue
    Description: Datepicker (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-datepicker-demo">

        <p class="mb-4">A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations. Read full documnetation <a href="https://github.com/charliekassel/vuejs-datepicker" target="_blank" rel="nofollow">here</a></p>
        
        <div class="vx-row match-height">
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-default class="mb-base"></datepicker-default>
            </div>
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-format class="mb-base"></datepicker-format>
            </div>
        </div>
        
        <div class="vx-row match-height">
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-min-max-date-range class="mb-base"></datepicker-min-max-date-range>
            </div>
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-highlight-dates class="mb-base"></datepicker-highlight-dates>
            </div>
        </div>
        
        <div class="vx-row match-height">
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-inline class="mb-base"></datepicker-inline>
            </div>
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-open-programatically class="mb-base"></datepicker-open-programatically>
            </div>
        </div>
        
        <div class="vx-row match-height">
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-translation class="mb-base"></datepicker-translation>
            </div>
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-rtl class="mb-base"></datepicker-rtl>
            </div>
        </div>
        
        <div class="vx-row match-height">
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-day-view-only class="mb-base"></datepicker-day-view-only>
            </div>
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-month-view-only class="mb-base"></datepicker-month-view-only>
            </div>
        </div>
        
        <div class="vx-row match-height">
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-date-month-view-only></datepicker-date-month-view-only>
            </div>
            <div class="vx-col md:w-1/2 w-full">
                <datepicker-month-year-view-only></datepicker-month-year-view-only>
            </div>
        </div>
    </div>
</template>

<script>
import DatepickerDefault from './DatepickerDefault.vue'
import DatepickerFormat from './DatepickerFormat.vue'
import DatepickerMinMaxDateRange from './DatepickerMinMaxDateRange.vue'
import DatepickerHighlightDates from './DatepickerHighlightDates.vue'
import DatepickerInline from './DatepickerInline.vue'
import DatepickerOpenProgramatically from './DatepickerOpenProgramatically.vue'
import DatepickerTranslation from './DatepickerTranslation.vue'
import DatepickerRtl from './DatepickerRtl.vue'
import DatepickerDayViewOnly from './DatepickerDayViewOnly.vue'
import DatepickerMonthViewOnly from './DatepickerMonthViewOnly.vue'
import DatepickerDateMonthViewOnly from './DatepickerDateMonthViewOnly.vue'
import DatepickerMonthYearViewOnly from './DatepickerMonthYearViewOnly.vue'

export default {
    components: {
        DatepickerDefault,
        DatepickerFormat,
        DatepickerMinMaxDateRange,
        DatepickerHighlightDates,
        DatepickerInline,
        DatepickerOpenProgramatically,
        DatepickerTranslation,
        DatepickerRtl,
        DatepickerDayViewOnly,
        DatepickerMonthViewOnly,
        DatepickerDateMonthViewOnly,
        DatepickerMonthYearViewOnly,
    }
}
</script>