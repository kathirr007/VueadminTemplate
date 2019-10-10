/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  addEventToCalendar({ commit }, event) {
    commit('ADD_EVENT_TO_CALENDAR', event);
  },
  ediCalendarEvent({ commit }, event) {
    commit('EDIT_CALENDAR_EVENT', event);
  },
  removeCalendarEvent({ commit }, eventId) {
    commit('REMOVE_CALENDAR_EVENT', eventId);
  },

  // Simple Calendar Actions
  addEventToSimpleCalendar({ commit }, event) {
    commit('ADD_EVENT_TO_SIMPLE_CALENDAR', event);
  },
  editSimpleCalendarEvent({ commit }, event) {
    commit('EDIT_SIMPLE_CALENDAR_EVENT', event);
  },
  removeSimpleCalendarEvent({ commit }, eventId) {
    commit('REMOVE_SIMPLE_CALENDAR_EVENT', eventId);
  },
  simpleCalendarEventDragged({ commit }, payload) {
    commit('SIMPLE_CALENDAR_EVENT_DRAGGED', payload)
  }
}
