/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  ADD_EVENT_TO_CALENDAR(state, event) {
      const length = state.calendarEvents.length
      let lastIndex = 0;
      if(length){
          lastIndex = state.calendarEvents[length - 1].id;
      }
      event.id = lastIndex + 1
      const newEvent = Object.assign({}, event);
      state.calendarEvents.push(newEvent);
  },
  EDIT_CALENDAR_EVENT(state, event) {
      const eventIndex = state.calendarEvents.findIndex((e) => e.id == event.id);
      state.calendarEvents[eventIndex].title = event.title;
      state.calendarEvents[eventIndex].start = event.start;
      state.calendarEvents[eventIndex].end = event.end;
      state.calendarEvents[eventIndex].desc = event.desc;
      state.calendarEvents[eventIndex].cssClass = event.cssClass;
      state.calendarEvents[eventIndex].label = event.label;
  },
  REMOVE_CALENDAR_EVENT(state, eventId) {
      const eventIndex = state.calendarEvents.findIndex((e) => e.id == eventId);
      state.calendarEvents.splice(eventIndex, 1);
  },

  // Simple Calendar Mutations
  ADD_EVENT_TO_SIMPLE_CALENDAR(state, event) {
      const length = state.simpleCalendarEvents.length
      let lastIndex = 0;
      if(length){
          lastIndex = state.simpleCalendarEvents[length - 1].id;
      }
      event.id = lastIndex + 1
      const newEvent = Object.assign({}, event);
      state.simpleCalendarEvents.push(newEvent);
  },
  EDIT_SIMPLE_CALENDAR_EVENT(state, event) {
      const eventIndex = state.simpleCalendarEvents.findIndex((e) => e.id == event.id);
      state.simpleCalendarEvents[eventIndex].title = event.title;
      state.simpleCalendarEvents[eventIndex].startDate = event.startDate;
      state.simpleCalendarEvents[eventIndex].endDate = event.endDate;
      state.simpleCalendarEvents[eventIndex].url = event.url;
      state.simpleCalendarEvents[eventIndex].classes = event.classes;
      state.simpleCalendarEvents[eventIndex].label = event.label;
  },
  REMOVE_SIMPLE_CALENDAR_EVENT(state, eventId) {
      const eventIndex = state.simpleCalendarEvents.findIndex((e) => e.id == eventId);
      state.simpleCalendarEvents.splice(eventIndex, 1);
  },
  SIMPLE_CALENDAR_EVENT_DRAGGED(state, payload) {
    const eventIndex = state.simpleCalendarEvents.findIndex((e) => e.id == payload.event.id);
    console.log(payload.date.getTime());
    console.log(state.simpleCalendarEvents[eventIndex].endDate.getTime());

    // const ms = payload.date - state.simpleCalendarEvents[eventIndex].startDate;
    // console.log(ms);
    // console.log(state.simpleCalendarEvents[eventIndex].endDate + ms);
    // if(ms < 0) {
    //   console.log(new Date(state.simpleCalendarEvents[eventIndex].endDate + ms));
    // }
    // console.log("after dragging end date:");
    // console.log(state.simpleCalendarEvents[eventIndex].endDate - ms);
    // console.log(typeof state.simpleCalendarEvents[eventIndex].endDate);
    const diff = payload.date.getTime() - state.simpleCalendarEvents[eventIndex].startDate.getTime()
    const newEndDate = new Date(state.simpleCalendarEvents[eventIndex].endDate.getTime() + diff)
    state.simpleCalendarEvents[eventIndex].startDate = payload.date;
    state.simpleCalendarEvents[eventIndex].endDate = newEndDate;
  }
}
