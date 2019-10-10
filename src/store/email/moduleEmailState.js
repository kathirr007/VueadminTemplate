/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import emails from '@/views/apps/email/mails'

export default {
    mails: emails,
    mail_filter: 'inbox',
    mailTags: [
        { text: 'Personal', value : 'personal', color:"success"},
        { text: 'Company', value: 'company', color:"primary"},
        { text: 'Important', value: 'important', color:"warning"},
        { text: 'Private', value: 'private', color:"danger"},
    ],
    mailSearchQuery: '',
}