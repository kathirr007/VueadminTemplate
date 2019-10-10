/*=========================================================================================
  File Name: moduleEmailMutations.js
  Description: Email Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    SET_MAIL_SEARCH_QUERY(state, query) {
        state.mailSearchQuery = query;
    },
    UPDATE_MAIL_FILTER(state, filterName) {
        state.mail_filter = filterName
    },
    TOGGLE_IS_MAIL_STARRED(state, payload) {
        state.mails.forEach((mail) => {
            if(mail.id == payload.mailId) {
                mail.isStarred = payload.value
            }
        })
    },
    MOVE_MAILS_TO(state, payload) {
        payload.mails.forEach((mailId) => {
            const mailIndex = state.mails.findIndex((mail) => mail.id == mailId);

            state.mails[mailIndex].mailType = payload.to;
        })
    },
    UPDATE_MAIL_UNREAD(state, payload) {
        payload.mails.forEach((mailId) => {
            const mailIndex = state.mails.findIndex((mail) => mail.id == mailId);

            state.mails[mailIndex].unread = payload.unread;
        })
    },
    ADD_LABEL_TO_MAILS(state, payload) {
        payload.mails.forEach((mailId) => {
            const mailIndex = state.mails.findIndex((mail) => mail.id == mailId);

            const index = state.mails[mailIndex].labels.indexOf(payload.label)

            if(index == -1) {
                state.mails[mailIndex].labels.push(payload.label)
            }else{
                state.mails[mailIndex].labels.splice(index, 1);
            }
        })
    },
    UPDATE_MAIL_LABELS(state, payload) {
        const mailIndex = state.mails.findIndex((mail) => mail.id == payload.mailId);
        state.mails[mailIndex].labels = payload.value;
    },
}