<template>
  <div id="simple-calendar-app">
    <div class="vx-card app-fixed-height">
      <calendar-view
        ref="calendar"
        :displayPeriodUom="calendarView"
        :show-date="showDate"
        :events="simpleCalendarEvents"
        enableDragDrop
        :eventTop="windowWidth <= 400 ? '2rem' : '3rem'"
        eventBorderHeight="0px"
        eventContentHeight="1.65rem"
        class="theme-default"
        @click-date="openAddNewEvent"
        @click-event="openEditEvent"
        @drop-on-date="eventDragged">

        <div slot="header" class="mb-4">

          <div class="vx-row no-gutter">

            <!-- Month Name -->
            <div class="vx-col w-1/3 items-center sm:flex hidden">
              <!-- Add new event button -->
              <vs-button icon-pack="feather" icon="icon-plus" @click="promptAddNewEvent(new Date())">Add</vs-button>
            </div>

            <!-- Current Month -->
            <div class="vx-col sm:w-1/3 w-full sm:my-0 my-3 flex justify-center order-last">
              <div class="flex items-center">
                <feather-icon icon="ChevronLeftIcon" @click="updateMonth(-1)" class="cursor-pointer bg-primary text-white rounded-full" />
                <span class="mx-3 text-xl font-medium whitespace-no-wrap">{{ showDate | month }}</span>
                <feather-icon icon="ChevronRightIcon" @click="updateMonth(1)" class="cursor-pointer bg-primary text-white rounded-full" />
              </div>
            </div>

            <div class="vx-col sm:w-1/3 w-full flex justify-center">
              <vs-button
                class="rounded-r-none p-3 md:px-8 md:py-3"
                @click="calendarView = 'month'">Month</vs-button>
              <vs-button
                class="rounded-r-none rounded-l-none p-3 md:px-8 md:py-3"
                @click="calendarView = 'week'">Week</vs-button>
              <vs-button
                class="rounded-l-none p-3 md:px-8 md:py-3"
                @click="calendarView = 'year'">Year</vs-button>
            </div>
          </div>

          <div class="vx-row sm:flex hidden mt-4">
            <div class="vx-col w-full flex justify-end">
              <!-- Labels -->
              <div class="flex flex-wrap sm:justify-start justify-center">
                  <div v-for="(label, index) in calendarLabels" :key="index" class="flex items-center mr-4 mb-2">
                      <div class="h-3 w-3 inline-block rounded-full mr-2" :class="'bg-' + label.color"></div>
                      <span>{{ label.text }}</span>
                  </div>
                  <div class="flex items-center mr-4 mb-2">
                      <div class="h-3 w-3 inline-block rounded-full mr-2 bg-primary"></div>
                      <span>None</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </calendar-view>
    </div>

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
            <datepicker name="start-date" v-model="startDate" :disabled="disabledFrom"></datepicker>
        </div>
        <div class="my-4">
            <small class="date-label">End Date</small>
            <datepicker :disabledDates="disabledDatesTo" name="end-date" v-model="endDate"></datepicker>
        </div>
        <vs-input name="event-url" v-validate="'url'" class="w-full mt-6" label-placeholder="Event URL" v-model="url" :color="!errors.has('event-url') ? 'success' : 'danger'"></vs-input>

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
            <datepicker :disabledDates="disabledDatesFrom" name="start-date" v-model="startDate"></datepicker>
        </div>
        <div class="my-4">
            <small class="date-label">End Date</small>
            <datepicker :disabledDates="disabledDatesTo" name="end-date" v-model="endDate"></datepicker>
        </div>
        <vs-input name="event-url" v-validate="'url'" class="w-full mt-6" label-placeholder="Event URL" v-model="url" :color="!errors.has('event-url') ? 'success' : 'danger'"></vs-input>

    </vs-prompt>
  </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
require("vue-simple-calendar/static/css/default.css")

import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker
  },
  data() {
    return {
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      labelLocal: 'none',

      url: '',
      calendarView: 'month',

      activePromptAddEvent: false,
      activePromptEditEvent: false,
    }
  },
  computed: {
    simpleCalendarEvents() {
        return this.$store.state.calendar.simpleCalendarEvents
    },
    validForm() {
        return this.title != '' && this.startDate != '' && this.endDate != '' && (Date.parse(this.endDate) - Date.parse(this.startDate)) >= 0 && !this.errors.has('event-url');
    },
    disabledDatesTo() {
        return { to: new Date(this.startDate) }
    },
    disabledDatesFrom() {
        return { from: new Date(this.endDate) }
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
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    addEvent() {
        const obj = { title: this.title, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, url: this.url }
        obj.classes = "event-" + this.labelColor(this.labelLocal)
        this.$store.dispatch('calendar/addEventToSimpleCalendar', obj);
    },
    updateMonth(val) {
      this.showDate = this.$refs.calendar.getIncrementedPeriod(val);
    },
    clearFields() {
        this.title = this.endDate = this.url = "";
        this.id= 0;
        this.labelLocal = "none";
    },
    promptAddNewEvent(date) {
        this.disabledFrom = false;
        this.addNewEventDialog(date);
    },
    addNewEventDialog(date) {
        this.clearFields();
        this.startDate = date;
        this.endDate = date;
        this.activePromptAddEvent = true;
    },
    openAddNewEvent(date) {
        this.disabledFrom = true;
        this.addNewEventDialog(date);
    },
    openEditEvent(event) {
      const e = this.$store.getters['calendar/simpleCalendareventById'](event.id)
      this.id = e.id
      this.title = e.title
      this.startDate = e.startDate
      this.endDate = e.endDate
      this.url = e.url
      this.labelLocal = e.label
      this.activePromptEditEvent = true;
    },
    editEvent() {
      const obj = { id: this.id, title: this.title, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, url: this.url }
      obj.classes = "event-" + this.labelColor(this.labelLocal)
      this.$store.dispatch('calendar/editSimpleCalendarEvent', obj)
    },
    removeEvent() {
      this.$store.dispatch('calendar/removeSimpleCalendarEvent', this.id)
    },
    eventDragged(event, date) {
      this.$store.dispatch('calendar/simpleCalendarEventDragged', {event: event, date: date})
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/apps/simple-calendar.scss";
</style>
