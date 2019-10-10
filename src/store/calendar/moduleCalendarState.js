/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {

  // Common Labels for both calendars
  calendarLabels: [
      { text: 'Business' ,value : 'business', color: 'success' },
      { text: 'Work', value: 'work', color: 'warning'},
      { text: 'Personal', value: 'personal', color: 'danger'},
  ],

  calendarEvents: [
    {
        id: 1,
        title: 'My Event',
        start: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
        end: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
        desc: 'demo event',
        cssClass: 'event-success',
        label: 'business'
    },
  ],

  // Simple Calendar State
  simpleCalendarEvents: [
    {
        id: 1,
        title: 'My Event',
        startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
        endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
        url: '',
        classes: 'event-success',
        label: 'business'
    },
  ]
}
