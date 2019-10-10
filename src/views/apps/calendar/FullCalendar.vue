<!-- =========================================================================================
    File Name: Calendar.vue
    Description: Calendar App
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="calendar-app">

    <div class="vx-card app-fixed-height">
        <VuePerfectScrollbar class="scroll-area" :settings="settings">
        <full-calendar class="w-full select-none" :events="calendarEvents" locale="en" @dayClick ="openAddNewEvent" @eventClick="openEditEvent">

            <!-- HEADER LEFT -->
            <div slot="fc-header-left" class="flex flex-wrap sm:justify-start justify-center">
                <div v-for="(label, index) in calendarLabels" :key="index" class="flex items-center mr-4 mb-2">
                    <div class="h-3 w-3 inline-block rounded-full mr-2" :class="'bg-' + label.color"></div>
                    <span>{{ label.text }}</span>
                </div>
                <div class="flex items-center mr-4 mb-2">
                    <div class="h-3 w-3 inline-block rounded-full mr-2 bg-primary"></div>
                    <span>None</span>
                </div>
            </div>

            <!-- HEADER RIGHT -->
            <div slot="fc-header-right" class="flex justify-end">
                <vs-button icon-pack="feather" icon="icon-plus" @click="promptAddNewEvent(new Date())">Add</vs-button>
            </div>

        </full-calendar>
        </VuePerfectScrollbar>

        <!-- ADD EVENT -->
        <vs-prompt
            class="calendar-event-dialog"
            vs-title="Add Event"
            vs-accept-text= "Add Event"
            @vs-accept="addEvent"
            :vs-is-valid="validForm"
            :vs-active.sync="activePromptAddEvent">

            <div class="calendar__label-container flex">

                <vs-chip v-if="labelLocal != 'none'" class="text-white" :class="'bg-' + labelColor(labelLocal)">{{ labelLocal }}</vs-chip>

                <vs-dropdown vs-custom-content vs-trigger-click class="ml-auto my-2 cursor-pointer">

                    <feather-icon icon="TagIcon" svgClasses="h-5 w-5" class="cursor-pointer" @click.prevent></feather-icon>

                    <vs-dropdown-menu style="z-index: 200001">
                            <vs-dropdown-item v-for="(label, index) in calendarLabels" :key="index" @click="labelLocal = label.value">
                                <div class="h-3 w-3 inline-block rounded-full mr-2" :class="'bg-' + label.color"></div>
                                <span>{{ label.text }}</span>
                            </vs-dropdown-item>

                            <vs-dropdown-item @click="labelLocal = 'none'">
                                <div class="h-3 w-3 mr-1 inline-block rounded-full mr-2 bg-primary"></div>
                                <span>None</span>
                            </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>

            </div>

            <vs-input name="event-name" v-validate="'required'" class="w-full" label-placeholder="Event Title" v-model="title"></vs-input>
                <div class="my-4">
                    <small class="date-label">Start Date</small>
                    <datepicker name="start-date" v-model="start" :disabled="disabledFrom"></datepicker>
                </div>
                <div class="my-4">
                    <small class="date-label">End Date</small>
                    <datepicker :disabledDates="disabledDatesTo" name="end-date" v-model="end"></datepicker>
                </div>
            <vs-textarea rows="5" label="Add description" v-model="desc" />

        </vs-prompt>

        <!-- EDIT EVENT -->
        <vs-prompt
            class="calendar-event-dialog"
            vs-title="Edit Event"
            vs-accept-text= "Submit"
            vs-cancel-text = "Remove"
            vs-button-cancel = "border"
            @vs-cancel="removeEvent"
            @vs-accept="editEvent"
            :vs-is-valid="validForm"
            :vs-active.sync="activePromptEditEvent">

            <div class="calendar__label-container flex">

                <vs-chip v-if="labelLocal != 'none'" class="text-white" :class="'bg-' + labelColor(labelLocal)">{{ labelLocal }}</vs-chip>

                <vs-dropdown vs-custom-content class="ml-auto my-2 cursor-pointer">

                    <feather-icon icon="TagIcon" svgClasses="h-5 w-5" @click.prevent></feather-icon>

                    <vs-dropdown-menu style="z-index: 200001">
                            <vs-dropdown-item v-for="(label, index) in calendarLabels" :key="index" @click="labelLocal = label.value">
                                <div class="h-3 w-3 inline-block rounded-full mr-2" :class="'bg-' + label.color"></div>
                                <span>{{ label.text }}</span>
                            </vs-dropdown-item>

                            <vs-dropdown-item @click="labelLocal = 'none'">
                                <div class="h-3 w-3 mr-1 inline-block rounded-full mr-2 bg-primary"></div>
                                <span>None</span>
                            </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>

            </div>

            <vs-input name="event-name" v-validate="'required'" class="w-full" label-placeholder="Event Title" v-model="title"></vs-input>
                <div class="my-4">
                    <small class="date-label">Start Date</small>
                    <datepicker :disabledDates="disabledDatesFrom" name="start-date" v-model="start"></datepicker>
                </div>
                <div class="my-4">
                    <small class="date-label">End Date</small>
                    <datepicker :disabledDates="disabledDatesTo" name="end-date" v-model="end"></datepicker>
                </div>
            <vs-textarea rows="5" label="Add description" v-model="desc" />

        </vs-prompt>
    </div>



  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
    data() {
        return {
            title: '',
            start: '',
            end: '',
            desc: '',
            id: 0,
            disabledFrom: false,
            labelLocal: 'none',
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: 0.30,
            },
            activePromptAddEvent: false,
            activePromptEditEvent: false,
        }
    },
    computed: {
        calendarEvents() {
            return this.$store.state.calendar.calendarEvents
        },
        validForm() {
            return this.title != '' && this.start != '' && this.end != '' && (Date.parse(this.end) - Date.parse(this.start)) >= 0;
        },
        disabledDatesTo() {
            return { to: new Date(this.start) }
        },
        disabledDatesFrom() {
            return { from: new Date(this.end) }
        },
        calendarLabels() {
            return this.$store.state.calendar.calendarLabels
        },
        labelColor() {
            return (label) => {
                if (label == "business") return "success"
                else if (label == "work") return "warning"
                if (label == "personal") return "danger"
                if (label == "none") return "primary"
            }
        },
    },
    methods: {
        addEvent() {
            const obj = { title: this.title, start: this.start, end: this.end, label: this.labelLocal, desc: this.desc }
            obj.cssClass = "event-" + this.labelColor(this.labelLocal)
            this.$store.dispatch('calendar/addEventToCalendar', obj);
        },
        clearFields() {
            this.title = this.end = this.desc = "";
            this.id = 0;
            this.labelLocal = "none";
        },
        addNewEventDialog(date) {
            this.clearFields();
            this.start = date;
            this.end = date;
            this.activePromptAddEvent = true;
        },
        openAddNewEvent(date) {
            this.disabledFrom = true;
            this.addNewEventDialog(date);
        },
        promptAddNewEvent(date) {
            this.disabledFrom = false;
            this.addNewEventDialog(date);
        },
        openEditEvent(event) {
            const e = this.$store.getters['calendar/eventById'](event.id)
            this.id = e.id
            this.title = e.title
            this.start = e.start
            this.end = e.end
            this.desc = e.desc
            this.activePromptEditEvent = true;
        },
        editEvent() {
            const obj = { id: this.id, title: this.title, start: this.start, end: this.end, label: this.labelLocal, desc: this.desc }
            obj.cssClass = "event-" + this.labelColor(this.labelLocal)
            this.$store.dispatch('calendar/ediCalendarEvent', obj)
        },
        removeEvent() {
            this.$store.dispatch('calendar/removeCalendarEvent', this.id)
        },
    },
    components: {
        'full-calendar': require('vue-fullcalendar'),
        Datepicker,
        VuePerfectScrollbar
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/apps/calendar.scss";
</style>
